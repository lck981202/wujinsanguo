// Global State
let gameState = { currentScenario: null, selectedLord: null, year: 184, month: 1, ap: 5, maxAp: 5, citiesData: [], playerGold: 2000 };
const FACTION_COLORS = ['#F4E04D', '#7C3AED', '#4CAF50', '#C41E3A', '#4682B4', '#FF9800', '#009688', '#9C27B0', '#E91E63', '#FF5722'];
let activeCityId = null;

document.addEventListener('DOMContentLoaded', () => { addLog("系统初始化完成，请选择时代。", "good"); });

function showMainMenu() { hideAllMenus(); document.getElementById('menu-main').classList.remove('hidden'); document.getElementById('hud-layer').style.display = 'none'; document.getElementById('game-title').style.display = 'none'; closeSidebar(); }
function showScenarioSelect() { hideAllMenus(); document.getElementById('menu-scenario').classList.remove('hidden'); renderScenarios(); }
function showLordSelect(id) {
    gameState.currentScenario = SCENARIOS.find(s => s.id === id);
    hideAllMenus(); document.getElementById('menu-lord').classList.remove('hidden');
    document.getElementById('lord-title').innerText = '选择主公 - ' + gameState.currentScenario.title;
    gameState.selectedLord = null; document.getElementById('btn-enter-game').classList.remove('visible');
    renderLords(id);
}
function hideAllMenus() { ['menu-main','menu-scenario','menu-lord'].forEach(id=>document.getElementById(id).classList.add('hidden')); closeAttackModal(); closeSidebar(); }
function selectLord(id) {
    const lords = SCENARIO_LORDS[gameState.currentScenario.id]; const lord = lords.find(l => l.id === id); if(!lord) return;
    gameState.selectedLord = lord;
    document.querySelectorAll('.lord-card').forEach(el => el.classList.remove('selected'));
    document.getElementById('lord-card-'+id).classList.add('selected');
    document.getElementById('btn-enter-game').classList.add('visible');
}
function enterGame() {
    if(!gameState.selectedLord) return;
    gameState.year = gameState.currentScenario.year; gameState.month = 1;
    gameState.ap = gameState.maxAp; gameState.playerGold = 2000;
    gameState.relations = {}; // v2.3 外交数据
    SCENARIO_LORDS[gameState.currentScenario.id].forEach(l => { if(l.id !== gameState.selectedLord.id) gameState.relations[l.id] = 50; });
    hideAllMenus(); document.getElementById('hud-layer').style.display = 'block'; document.getElementById('game-title').style.display = 'block';
    updateHUD(); initGameMap();
    addLog("您已选择 " + gameState.selectedLord.name + "，天下风云由此而起！", "good");
}

// === Map & Logic ===
function initGameMap() {
    console.log("Map Init Started");
    const layer = document.getElementById('city-layer'); layer.innerHTML = '';
    if(!gameState.citiesData || gameState.citiesData.length === 0) {
        if(typeof CITIES_CONFIG === 'undefined') { console.error("CITIES_CONFIG Missing!"); return; }
        gameState.citiesData = JSON.parse(JSON.stringify(CITIES_CONFIG));
        const myId = gameState.selectedLord.id; const myName = gameState.selectedLord.name; const myColor = gameState.selectedLord.color;
        const otherLords = SCENARIO_LORDS[gameState.currentScenario.id].filter(l => l.id !== myId);
        gameState.citiesData.forEach(city => {
            city.currentTroops = Math.floor(city.base_pop * 0.05); city.currentDefense = city.base_def; city.currentGrain = Math.floor(city.base_pop * 0.2);
            if(gameState.selectedLord.cities.includes(city.id)) { city.owner = myId; city.ownerName = myName; city.ownerColor = myColor; }
            else { const lord = otherLords[Math.floor(Math.random()*otherLords.length)]; city.owner = lord.id; city.ownerName = lord.name; city.ownerColor = lord.color; }
        });
    }
    gameState.citiesData.forEach(city => {
        const point = document.createElement('div'); point.className = 'city-point';
        point.style.left = city.x + 'px'; point.style.top = city.y + 'px';
        point.style.background = city.ownerColor; point.style.borderColor = (city.owner===gameState.selectedLord.id)?'#ffd700':'rgba(0,0,0,0.5)';
        
        const label = document.createElement('div'); label.className = 'city-name-label'; label.innerText = city.name; point.appendChild(label);
        point.onclick = (e) => { e.stopPropagation(); showSidebar(city); };
        layer.appendChild(point);
    });
    updateStabilityPanel(); updateMyFactionPanel(); updateDiplomacyPanel();
}

function showSidebar(city) {
    activeCityId = city.id;
    document.getElementById('sb-city-name').innerText = city.name;
    document.getElementById('sb-faction').innerText = city.ownerName; document.getElementById('sb-faction').style.color = city.ownerColor;
    document.getElementById('sb-defense').innerText = city.currentDefense;
    document.getElementById('sb-pop').innerText = city.base_pop.toLocaleString();
    document.getElementById('sb-troops').innerText = city.currentTroops.toLocaleString();
    document.getElementById('sb-grain').innerText = city.currentGrain.toLocaleString();
    document.getElementById('sb-gold').innerText = gameState.playerGold.toLocaleString();

    const isMine = (city.owner === gameState.selectedLord.id);
    const img = document.getElementById('sb-portrait'); img.src = 'images/portraits/'+(isMine?gameState.selectedLord.id:city.owner)+'.png'; img.onerror=function(){this.src='images/portraits/default.png';};

    const actions = document.getElementById('sb-actions'); actions.innerHTML = '';
    if(isMine) {
        const btnR = document.createElement('button'); btnR.className = 'btn-action btn-recruit';
        const lowG = (gameState.playerGold < 500); btnR.innerHTML = `<span>🛡️ 征兵 (+1000)</span> <span>💰500</span>`;
        if(lowG) btnR.classList.add('btn-disabled'); btnR.onclick = () => { if(!lowG) doRecruit(500, 1000); }; actions.appendChild(btnR);
        
        const btnGr = document.createElement('button'); btnGr.className = 'btn-action btn-buy';
        const lowGr = (gameState.playerGold < 100); btnGr.innerHTML = `<span>🌾 买粮 (+1000)</span> <span>💰100</span>`;
        if(lowGr) btnGr.classList.add('btn-disabled'); btnGr.onclick = () => { if(!lowGr) doBuyGrain(100, 1000); }; actions.appendChild(btnGr);
    } else {
        const adj = getAdjacentPlayerCities(city.id);
        if(adj.length > 0 && gameState.ap >= 2) {
            const btn = document.createElement('button'); btn.className = 'btn-action btn-attack';
            btn.innerHTML = `<span>⚔️ 攻城</span> <span>⚡2点</span>`; btn.onclick = () => openAttackModal(city.id); actions.appendChild(btn);
        } else { actions.innerHTML = '<div style="color:#888; text-align:center; margin-top:10px;">距离太远或行动力不足</div>'; }
    }
    document.getElementById('city-sidebar').classList.add('open');
}
function closeSidebar() { document.getElementById('city-sidebar').classList.remove('open'); }

// === Economy ===
function doRecruit(c, a) { gameState.playerGold -= c; const city = gameState.citiesData.find(x => x.id === activeCityId); if(city) city.currentTroops += a; gameState.ap -= 1; updateHUD(); updateMyFactionPanel(); showSidebar(city); addLog("在 " + city.name + " 征兵成功！"); }
function doBuyGrain(c, a) { gameState.playerGold -= c; const city = gameState.citiesData.find(x => x.id === activeCityId); if(city) city.currentGrain += a; gameState.ap -= 1; updateHUD(); updateMyFactionPanel(); showSidebar(city); addLog("在 " + city.name + " 购入粮草！"); }

// === War System (Enriched) ===
function getAdjacentPlayerCities(targetId) {
    const target = gameState.citiesData.find(c => c.id === targetId);
    return gameState.citiesData.filter(c => { if(c.owner !== gameState.selectedLord.id) return false; return Math.sqrt(Math.pow(c.x-target.x,2)+Math.pow(c.y-target.y,2)) < 110; });
}
function openAttackModal(targetId) {
    activeCityId = targetId; document.getElementById('modal-attack').classList.remove('hidden');
    const list = document.getElementById('attack-source-list'); list.innerHTML = '';
    getAdjacentPlayerCities(targetId).forEach(c => {
        const btn = document.createElement('button'); btn.className = 'modal-btn';
        btn.innerHTML = `<span>🚩 ${c.name}</span> <span>(兵:${c.currentTroops})</span>`;
        btn.onclick = () => resolveBattle(c.id, targetId); list.appendChild(btn);
    });
}
function closeAttackModal() { document.getElementById('modal-attack').classList.add('hidden'); }

function resolveBattle(attId, defId) {
    closeAttackModal(); closeSidebar();
    const tactic = document.getElementById('tactic-select').value;
    const att = gameState.citiesData.find(c => c.id === attId); const def = gameState.citiesData.find(c => c.id === defId);
    
    let atkMod = 1.0; let defMod = 1.0; let lossMod = 1.0;
    let logMsg = "";

    if(tactic === 'assault') { atkMod = 1.3; lossMod = 1.5; logMsg = "🔥 [强攻] "; }
    else if(tactic === 'raid') {
        if(Math.random() > 0.5) { atkMod = 1.8; lossMod = 0.5; logMsg = "🌙 [夜袭成功] "; }
        else { atkMod = 0.5; lossMod = 1.5; logMsg = "🌙 [夜袭失败] "; }
    } else { logMsg = "⚔️ [普通] "; }

    const atk = att.currentTroops * atkMod * (0.8 + Math.random()*0.4);
    // 关隘防御加成 (方案 2)
    let terrainMod = 1.0;
    if (def.type === 'pass') {
        terrainMod = 1.5; // 关隘防御 x1.5
    }
    
    const dfs = (def.currentTroops + def.currentDefense*20) * defMod * terrainMod * (0.8 + Math.random()*0.4);

    if(atk > dfs) {
        const loss = Math.floor(att.currentTroops * 0.2 * lossMod); att.currentTroops -= loss;
        // 战后掠夺与收编 (方案 4)
        const lootGold = Math.floor(def.currentGold * 0.3);
        const lootGrain = Math.floor(def.currentGrain * 0.5);
        const captureTroops = Math.floor(def.currentTroops * 0.1); // 收编 10% 败军
        
        gameState.playerGold += lootGold;
        att.currentTroops += captureTroops;
        
        def.currentTroops = Math.floor(def.currentTroops * 0.2); // 残余兵力
        def.currentGold -= lootGold;
        def.currentGrain -= lootGrain;
        
        def.owner = att.owner; def.ownerName = att.ownerName; def.ownerColor = att.ownerColor;
        
        let lootMsg = ` (缴获金${lootGold}, 粮${lootGrain})`;
        addLog(logMsg + `攻占 ${def.name}！伤亡 ${loss}${lootMsg}`, "good"); 
        initGameMap();
    } else {
        const loss = Math.floor(att.currentTroops * 0.3 * lossMod); att.currentTroops -= loss;
        addLog(logMsg + `攻城 ${def.name} 失败！伤亡 ${loss}`, "bad");
    }
    gameState.ap -= 2; updateHUD(); updateMyFactionPanel();
}

// === Panels & Turn ===
function nextTurn() {
    gameState.month++; if(gameState.month > 12) { gameState.month = 1; gameState.year++; }
    gameState.playerGold += 500; gameState.ap = gameState.maxAp;
    gameState.citiesData.forEach(c => { if(c.owner === gameState.selectedLord.id) c.currentGrain += 500; });
    updateHUD(); updateStabilityPanel(); updateMyFactionPanel(); updateDiplomacyPanel(); addLog(`📅 ${gameState.year} 年 ${gameState.month} 月 开始。资源已结算。`, "neutral"); updateMyFactionPanel();
}
function updateHUD() { document.getElementById('hud-time').innerText = `${gameState.year} 年 ${gameState.month} 月`; document.getElementById('hud-ap').innerText = gameState.ap; }

function togglePanel(id) { const p = document.getElementById('panel-'+id); p.style.display = (p.style.display==='block')?'none':'block'; ['war','dip'].forEach(x=>{if(x!==id) document.getElementById('panel-'+x).style.display='none';}); }
function updateStabilityPanel() {
    const details = document.getElementById('stability-details'); details.innerHTML = '';
    const counts = {}; gameState.citiesData.forEach(c => { counts[c.ownerName] = (counts[c.ownerName]||0)+1; });
    const sorted = Object.entries(counts).sort((a,b)=>b[1]-a[1]);
    const myCount = counts[gameState.selectedLord.name] || 0;
    document.getElementById('stab-summary').innerText = (myCount>5?"动荡":(myCount>10?"稳定":"危险"));
    sorted.forEach(([name,count]) => {
        const stab = 100 - (count*2); const color = stab>60?'#4caf50':(stab>30?'#ffc107':'#f44336');
        details.innerHTML += `<div style="margin:4px 0;"><span style="color:${color}; font-weight:bold;">${name}</span>: ${stab}% (${count}城)</div>`;
    });
}
function toggleStability() { const d = document.getElementById('stability-details'); d.style.display = (d.style.display==='block')?'none':'block'; }

function addLog(msg, type="neutral") {
    const log = document.getElementById('log-content');
    const item = document.createElement('div'); item.className = 'log-item ' + (type==='good'?'log-good':(type==='bad'?'log-bad':''));
    item.innerText = msg; log.prepend(item); if(log.children.length > 20) log.lastChild.remove();
}

function renderScenarios() { const box = document.getElementById('scenario-list'); box.innerHTML = ''; SCENARIOS.forEach(s => { const c = document.createElement('div'); c.className = 'scenario-card'; c.onclick = () => showLordSelect(s.id); c.innerHTML = `<h3>${s.year}年 - ${s.title}</h3><p>${s.desc}</p>`; box.appendChild(c); }); }
function renderLords(id) {
    const box = document.getElementById('lord-list'); box.innerHTML = '';
    SCENARIO_LORDS[id].forEach(l => {
        const c = document.createElement('div'); c.id = 'lord-card-'+l.id; c.className = 'lord-card'; c.onclick = () => selectLord(l.id);
        c.innerHTML = `<div class="lord-portrait"><img src="images/portraits/${l.id}.png" onerror="this.src='images/portraits/default.png'"></div><div style="color:${l.color}; font-weight:bold; margin-bottom:3px;">${l.name}</div><div style="font-size:11px; color:#888;">${l.faction}</div>`;
        box.appendChild(c);
    });
}

// === 我的势力面板 ===

function updateMyFactionPanel() {
    if (!gameState.selectedLord) return;
    const myId = gameState.selectedLord.id;
    let cities = 0, pop = 0, troops = 0, grain = 0;
    
    gameState.citiesData.forEach(city => {
        if (city.owner === myId) {
            cities++;
            pop += city.base_pop;
            troops += city.currentTroops;
            grain += (city.currentGrain || 0);
        }
    });
    
    document.getElementById('mf-cities').innerText = cities;
    document.getElementById('mf-pop').innerText = (pop / 10000).toFixed(1) + '万';
    document.getElementById('mf-troops').innerText = troops;
    document.getElementById('mf-gold').innerText = gameState.playerGold;
    document.getElementById('mf-grain').innerText = grain;
}


// === 外交系统 v2.3 ===
function getFactionName(id) {
    const lords = SCENARIO_LORDS[gameState.currentScenario.id];
    if(!lords) return id;
    const l = lords.find(x => x.id === id);
    return l ? l.name : id;
}

function updateDiplomacyPanel() {
    const list = document.getElementById('dip-list'); if(!list) return;
    list.innerHTML = '';
    const myId = gameState.selectedLord.id;
    const lords = SCENARIO_LORDS[gameState.currentScenario.id] || [];
    
    lords.forEach(lord => {
        if (lord.id === myId) return;
        const rel = gameState.relations[lord.id] || 50;
        let status, color, barColor;
        if (rel >= 90) { status = '🟢 盟友'; color = '#4caf50'; barColor = '#4caf50'; }
        else if (rel >= 60) { status = '🔵 友善'; color = '#2196f3'; barColor = '#2196f3'; }
        else if (rel >= 40) { status = '⚪ 中立'; color = '#9e9e9e'; barColor = '#9e9e9e'; }
        else if (rel >= 20) { status = '🟠 敌对'; color = '#ff9800'; barColor = '#ff9800'; }
        else { status = '🔴 死敌'; color = '#f44336'; barColor = '#f44336'; }

        const item = document.createElement('div'); item.className = 'dip-item';
        item.innerHTML = `
            <div class="dip-header" onclick="document.getElementById('da-${lord.id}').classList.toggle('show')">
                <span style="color:${lord.color}; font-weight:bold;">${lord.name}</span>
                <span class="dip-status" style="color:${color}">${status} (${rel})</span>
            </div>
            <div class="dip-bar-bg"><div class="dip-bar" style="width:${rel}%; background:${barColor};"></div></div>
            <div id="da-${lord.id}" class="dip-actions">
                <button class="dip-btn" onclick="doDipAction('${lord.id}', 'envoy')">📜 使者(+10)</button>
                <button class="dip-btn" onclick="doDipAction('${lord.id}', 'gift')">🎁 赠金(+20)</button>
                <button class="dip-btn" onclick="doDipAction('${lord.id}', 'provoke')">😡 挑衅(-20)</button>
                ${rel >= 90 ? `<button class="dip-btn gold" onclick="doAllegiance('${lord.id}')">🤝 归附</button>` : ''}
            </div>
        `;
        list.appendChild(item);
    });
}

function doDipAction(fid, type) {
    if(gameState.ap < 1) { addLog("⚠️ 行动力不足！", "bad"); return; }
    let cost = 0, relChange = 0, log = "";
    if(type === 'envoy') { cost = 0; relChange = 10; log = "派遣使者拜访"; }
    else if(type === 'gift') { cost = 300; relChange = 20; log = "赠送金帛"; }
    else if(type === 'provoke') { cost = 0; relChange = -20; log = "恶言挑衅"; }
    
    if(gameState.playerGold < cost) { addLog(`⚠️ 黄金不足！需要 ${cost}`, "bad"); return; }
    
    gameState.playerGold -= cost; gameState.ap -= 1;
    gameState.relations[fid] = Math.max(0, Math.min(100, (gameState.relations[fid]||50) + relChange));
    addLog(`${log} ${getFactionName(fid)}，关系变动 ${relChange>0?'+':''}${relChange}`, relChange>0?"good":"bad");
    updateDiplomacyPanel(); updateMyFactionPanel();
}

function doAllegiance(fid) {
    const cost = 5000;
    if(gameState.playerGold < cost) { addLog(`⚠️ 归附需要 ${cost} 黄金！`, "bad"); return; }
    if(!confirm(`确定消耗 ${cost} 黄金收编 ${getFactionName(fid)} 吗？`)) return;
    
    gameState.playerGold -= cost; gameState.ap -= 3;
    gameState.relations[fid] = 100;
    
    // 转换所有城池归属
    let count = 0;
    gameState.citiesData.forEach(c => {
        if(c.owner === fid) { c.owner = gameState.selectedLord.id; c.ownerName = gameState.selectedLord.name; c.ownerColor = gameState.selectedLord.color; count++; }
    });
    addLog(`🤝 成功收编 ${getFactionName(fid)}！获得 ${count} 座城池。`, "good");
    initGameMap(); updateDiplomacyPanel(); updateMyFactionPanel();
}
