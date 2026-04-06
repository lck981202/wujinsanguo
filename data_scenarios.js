// Layer 1: Scenarios & Lords Data
// ⚠️ 核心基准：不触碰地图坐标

const SCENARIOS = [
    { id: 184, year: 184, title: "黄巾之乱", desc: "苍天已死，黄天当立。乱世开启。" },
    { id: 190, year: 190, title: "讨伐董卓", desc: "十八路诸侯会盟，群雄并起。" },
    { id: 200, year: 200, title: "官渡之战", desc: "曹操 vs 袁绍，北方霸主之争。" },
    { id: 208, year: 208, title: "赤壁之战", desc: "孙刘联手抗曹，火烧赤壁定三分。" },
    { id: 220, year: 220, title: "三分天下", desc: "魏蜀吴鼎立，帝王基业成型。" },
    { id: 249, year: 249, title: "高平陵之变", desc: "司马懿夺权，后期风云再起。" }
];

// 主公数据配置
// 肖像路径约定：images/portraits/{id}.png (例如 images/portraits/liu_bei.png)
const SCENARIO_LORDS = {
    184: [
        { id: "liu_bei", name: "刘备", faction: "汉朝廷", color: "#F4E04D", difficulty: "极难", desc: "白手起家，桃园结义", cities: ["zhuojun", "pingyuan"] },
        { id: "cao_cao", name: "曹操", faction: "汉朝廷", color: "#7C3AED", difficulty: "普通", desc: "骑都尉，剿匪起家", cities: ["chenliu", "yanzhou"] },
        { id: "sun_jian", name: "孙坚", faction: "汉朝廷", color: "#4CAF50", difficulty: "困难", desc: "长沙太守，江东猛虎", cities: ["changsha", "jiangxia"] },
        { id: "dong_zhuo", name: "董卓", faction: "汉朝廷", color: "#C41E3A", difficulty: "简单", desc: "西凉军阀，兵强马壮", cities: ["luoyang", "chang_an", "tongguan"] }
    ],
    190: [
        { id: "cao_cao", name: "曹操", faction: "曹操", color: "#7C3AED", difficulty: "困难", desc: "陈留起兵", cities: ["chenliu", "yanzhou", "yingchuan"] },
        { id: "yuan_shao", name: "袁绍", faction: "袁绍", color: "#4682B4", difficulty: "普通", desc: "关东盟主", cities: ["ye", "jizhou_cheng", "qinghe"] },
        { id: "ma_teng", name: "马腾", faction: "马腾", color: "#57534E", difficulty: "困难", desc: "西凉铁骑", cities: ["tianshui", "liangzhou"] },
        { id: "gongsun_zan", name: "公孙瓒", faction: "公孙瓒", color: "#5F9EA0", difficulty: "困难", desc: "白马义从", cities: ["beiping", "daijun"] }
    ],
    200: [
        { id: "cao_cao", name: "曹操", faction: "曹操", color: "#7C3AED", difficulty: "困难", desc: "挟天子以令诸侯", cities: ["xuchang", "chenliu", "luoyang"] },
        { id: "yuan_shao", name: "袁绍", faction: "袁绍", color: "#4682B4", difficulty: "普通", desc: "河北霸主", cities: ["ye", "nanpi", "jizhou_cheng"] },
        { id: "sun_ce", name: "孙策", faction: "孙氏", color: "#4CAF50", difficulty: "普通", desc: "江东小霸王", cities: ["wujun", "kuaiji", "danyang"] },
        { id: "liu_biao", name: "刘表", faction: "刘表", color: "#009688", difficulty: "普通", desc: "荆州之主", cities: ["xiangyang", "jiangling", "wancheng"] }
    ],
    208: [
        { id: "cao_cao", name: "曹操", faction: "曹操", color: "#7C3AED", difficulty: "简单", desc: "大军南下", cities: ["xuchang", "luoyang", "xiangyang", "nanyang", "ye", "chenliu", "wancheng"] },
        { id: "sun_quan", name: "孙权", faction: "孙氏", color: "#4CAF50", difficulty: "普通", desc: "据长江天险", cities: ["wujun", "kuaiji", "danyang", "jianye"] },
        { id: "liu_bei", name: "刘备", faction: "刘备", color: "#F4E04D", difficulty: "极难", desc: "三顾茅庐", cities: ["xinye", "fan_cheng"] }
    ],
    220: [
        { id: "cao_pi", name: "曹丕", faction: "魏", color: "#7C3AED", difficulty: "简单", desc: "中原正统", cities: ["luoyang", "xuchang", "ye", "chang_an"] },
        { id: "liu_bei", name: "刘备", faction: "蜀", color: "#F4E04D", difficulty: "普通", desc: "汉中王", cities: ["chengdu", "hanshong", "jiangzhou"] },
        { id: "sun_quan", name: "孙权", faction: "吴", color: "#4CAF50", difficulty: "普通", desc: "吴王", cities: ["jianye", "wuchang", "kuaiji"] }
    ],
    249: [
        { id: "simayi", name: "司马懿", faction: "魏", color: "#7C3AED", difficulty: "困难", desc: "掌控魏国", cities: ["luoyang", "xuchang", "chang_an"] },
        { id: "jiang_wei", name: "姜维", faction: "蜀", color: "#F4E04D", difficulty: "极难", desc: "北伐中原", cities: ["chengdu", "hanshong", "jiangzhou"] },
        { id: "zhuge_ke", name: "诸葛恪", faction: "吴", color: "#4CAF50", difficulty: "困难", desc: "权倾朝野", cities: ["jianye", "wuchang", "kuaiji"] }
    ]
};
