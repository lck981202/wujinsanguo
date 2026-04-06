// Layer 1: Static Configuration Data
const CITIES_CONFIG = [
    {
        "id": "beiping",
        "name": "北平",
        "x": 885,
        "y": 126,
        "state": "幽州",
        "base_pop": 50000,
        "base_def": 2178
    },
    {
        "id": "luoyang",
        "name": "洛阳",
        "x": 761,
        "y": 334,
        "state": "司隶",
        "base_pop": 350000,
        "base_def": 9581
    },
    {
        "id": "chang_an",
        "name": "长安",
        "x": 646,
        "y": 349,
        "state": "司隶",
        "base_pop": 300000,
        "base_def": 10037
    },
    {
        "id": "tongguan",
        "name": "潼关",
        "x": 700,
        "y": 338,
        "state": "司隶",
        "base_pop": 16000,
        "base_def": 2136
    },
    {
        "id": "wuguan",
        "name": "武关",
        "x": 685,
        "y": 371,
        "state": "司隶",
        "base_pop": 12000,
        "base_def": 3051
    },
    {
        "id": "hongnong",
        "name": "弘农",
        "x": 743,
        "y": 284,
        "state": "司隶",
        "base_pop": 75000,
        "base_def": 4486
    },
    {
        "id": "yingchuan",
        "name": "颍川",
        "x": 796,
        "y": 332,
        "state": "豫州",
        "base_pop": 230000,
        "base_def": 6856
    },
    {
        "id": "jianye",
        "name": "建业",
        "x": 953,
        "y": 431,
        "state": "扬州",
        "base_pop": 118000,
        "base_def": 4937
    },
    {
        "id": "jizhou",
        "name": "蓟州",
        "x": 847,
        "y": 120,
        "state": "幽州",
        "base_pop": 58000,
        "base_def": 4321
    },
    {
        "id": "daijun",
        "name": "代郡",
        "x": 808,
        "y": 121,
        "state": "幽州",
        "base_pop": 34000,
        "base_def": 2710
    },
    {
        "id": "pingcheng",
        "name": "平城",
        "x": 764,
        "y": 137,
        "state": "并州",
        "base_pop": 34000,
        "base_def": 3470
    },
    {
        "id": "yanmenguan",
        "name": "雁门关",
        "x": 759,
        "y": 171,
        "state": "并州",
        "base_pop": 10000,
        "base_def": 2680
    },
    {
        "id": "bingzhou",
        "name": "并州",
        "x": 744,
        "y": 220,
        "state": "并州",
        "base_pop": 58000,
        "base_def": 3391
    },
    {
        "id": "shangdang",
        "name": "上党",
        "x": 721,
        "y": 239,
        "state": "并州",
        "base_pop": 46000,
        "base_def": 1868
    },
    {
        "id": "zhuojun",
        "name": "涿郡",
        "x": 867,
        "y": 163,
        "state": "幽州",
        "base_pop": 75000,
        "base_def": 3410
    },
    {
        "id": "qinghe",
        "name": "清河",
        "x": 840,
        "y": 174,
        "state": "冀州",
        "base_pop": 92000,
        "base_def": 3908
    },
    {
        "id": "nanpi",
        "name": "南皮",
        "x": 867,
        "y": 203,
        "state": "冀州",
        "base_pop": 120000,
        "base_def": 5350
    },
    {
        "id": "bohai",
        "name": "渤海",
        "x": 905,
        "y": 210,
        "state": "冀州",
        "base_pop": 110000,
        "base_def": 4081
    },
    {
        "id": "pingyuan",
        "name": "平原",
        "x": 829,
        "y": 211,
        "state": "冀州",
        "base_pop": 100000,
        "base_def": 4441
    },
    {
        "id": "jizhou_cheng",
        "name": "冀州",
        "x": 844,
        "y": 242,
        "state": "冀州",
        "base_pop": 135000,
        "base_def": 4027
    },
    {
        "id": "ye",
        "name": "邺城",
        "x": 792,
        "y": 228,
        "state": "冀州",
        "base_pop": 340000,
        "base_def": 6989
    },
    {
        "id": "liyang",
        "name": "黎阳",
        "x": 813,
        "y": 284,
        "state": "冀州",
        "base_pop": 58000,
        "base_def": 3211
    },
    {
        "id": "beihai",
        "name": "北海",
        "x": 984,
        "y": 223,
        "state": "青州",
        "base_pop": 125000,
        "base_def": 5360
    },
    {
        "id": "penglai",
        "name": "蓬莱",
        "x": 1027,
        "y": 237,
        "state": "青州",
        "base_pop": 42000,
        "base_def": 2216
    },
    {
        "id": "linzi",
        "name": "临淄",
        "x": 957,
        "y": 245,
        "state": "青州",
        "base_pop": 220000,
        "base_def": 6734
    },
    {
        "id": "langya",
        "name": "琅琊",
        "x": 945,
        "y": 292,
        "state": "徐州",
        "base_pop": 110000,
        "base_def": 4440
    },
    {
        "id": "jinan",
        "name": "济南",
        "x": 912,
        "y": 267,
        "state": "青州",
        "base_pop": 118000,
        "base_def": 4158
    },
    {
        "id": "baima",
        "name": "白马",
        "x": 863,
        "y": 292,
        "state": "兖州",
        "base_pop": 28000,
        "base_def": 3028
    },
    {
        "id": "yanzhou",
        "name": "兖州",
        "x": 896,
        "y": 298,
        "state": "兖州",
        "base_pop": 118000,
        "base_def": 4134
    },
    {
        "id": "guandu",
        "name": "官渡",
        "x": 835,
        "y": 330,
        "state": "豫州",
        "base_pop": 10000,
        "base_def": 2889
    },
    {
        "id": "chenliu",
        "name": "陈留",
        "x": 860,
        "y": 335,
        "state": "兖州",
        "base_pop": 185000,
        "base_def": 4750
    },
    {
        "id": "dingtao",
        "name": "定陶",
        "x": 899,
        "y": 338,
        "state": "兖州",
        "base_pop": 92000,
        "base_def": 3415
    },
    {
        "id": "shouchun",
        "name": "寿春",
        "x": 921,
        "y": 366,
        "state": "扬州",
        "base_pop": 135000,
        "base_def": 4224
    },
    {
        "id": "xuzhou",
        "name": "徐州",
        "x": 948,
        "y": 349,
        "state": "徐州",
        "base_pop": 150000,
        "base_def": 4103
    },
    {
        "id": "xiapi",
        "name": "下邳",
        "x": 978,
        "y": 366,
        "state": "徐州",
        "base_pop": 135000,
        "base_def": 4566
    },
    {
        "id": "peixian",
        "name": "沛县",
        "x": 923,
        "y": 334,
        "state": "徐州",
        "base_pop": 50000,
        "base_def": 1703
    },
    {
        "id": "hefei",
        "name": "合肥",
        "x": 903,
        "y": 403,
        "state": "扬州",
        "base_pop": 75000,
        "base_def": 3617
    },
    {
        "id": "huaiyin",
        "name": "淮阴",
        "x": 960,
        "y": 394,
        "state": "徐州",
        "base_pop": 58000,
        "base_def": 4316
    },
    {
        "id": "guangling",
        "name": "广陵",
        "x": 991,
        "y": 419,
        "state": "徐州",
        "base_pop": 92000,
        "base_def": 4312
    },
    {
        "id": "runan",
        "name": "汝南",
        "x": 863,
        "y": 442,
        "state": "豫州",
        "base_pop": 135000,
        "base_def": 4318
    },
    {
        "id": "xuchang",
        "name": "许昌",
        "x": 818,
        "y": 332,
        "state": "豫州",
        "base_pop": 120000,
        "base_def": 5998
    },
    {
        "id": "hulao",
        "name": "虎牢关",
        "x": 793,
        "y": 344,
        "state": "司隶",
        "base_pop": 15000,
        "base_def": 2072
    },
    {
        "id": "nanyang",
        "name": "南阳",
        "x": 813,
        "y": 372,
        "state": "荆州",
        "base_pop": 200000,
        "base_def": 4450
    },
    {
        "id": "wancheng",
        "name": "宛城",
        "x": 776,
        "y": 393,
        "state": "荆州",
        "base_pop": 100000,
        "base_def": 3770
    },
    {
        "id": "xinye",
        "name": "新野",
        "x": 760,
        "y": 411,
        "state": "荆州",
        "base_pop": 20000,
        "base_def": 2045
    },
    {
        "id": "xiangyang",
        "name": "襄阳",
        "x": 746,
        "y": 439,
        "state": "荆州",
        "base_pop": 220000,
        "base_def": 5940
    },
    {
        "id": "qiaojun",
        "name": "谯郡",
        "x": 852,
        "y": 377,
        "state": "豫州",
        "base_pop": 90000,
        "base_def": 3546
    },
    {
        "id": "hanzhong",
        "name": "汉中",
        "x": 604,
        "y": 383,
        "state": "益州",
        "base_pop": 100000,
        "base_def": 4405
    },
    {
        "id": "jiangxia",
        "name": "江夏",
        "x": 795,
        "y": 456,
        "state": "荆州",
        "base_pop": 75000,
        "base_def": 3069
    },
    {
        "id": "chibi",
        "name": "赤壁",
        "x": 813,
        "y": 486,
        "state": "荆州",
        "base_pop": 8000,
        "base_def": 2720
    },
    {
        "id": "jiamengguan",
        "name": "葭萌关",
        "x": 588,
        "y": 410,
        "state": "益州",
        "base_pop": 8000,
        "base_def": 2113
    },
    {
        "id": "wuzhangyuan",
        "name": "五丈原",
        "x": 615,
        "y": 357,
        "state": "司隶",
        "base_pop": 6000,
        "base_def": 2079
    },
    {
        "id": "xianyang",
        "name": "咸阳",
        "x": 632,
        "y": 332,
        "state": "司隶",
        "base_pop": 100000,
        "base_def": 3993
    },
    {
        "id": "chencang",
        "name": "陈仓",
        "x": 580,
        "y": 341,
        "state": "司隶",
        "base_pop": 42000,
        "base_def": 1873
    },
    {
        "id": "qishan",
        "name": "祁山",
        "x": 534,
        "y": 338,
        "state": "凉州",
        "base_pop": 6000,
        "base_def": 3481
    },
    {
        "id": "tianshui",
        "name": "天水",
        "x": 508,
        "y": 279,
        "state": "凉州",
        "base_pop": 50000,
        "base_def": 3358
    },
    {
        "id": "wudu",
        "name": "武都",
        "x": 456,
        "y": 301,
        "state": "凉州",
        "base_pop": 23000,
        "base_def": 1993
    },
    {
        "id": "yinping",
        "name": "阴平",
        "x": 524,
        "y": 391,
        "state": "益州",
        "base_pop": 16000,
        "base_def": 2798
    },
    {
        "id": "chengdu",
        "name": "成都",
        "x": 515,
        "y": 468,
        "state": "益州",
        "base_pop": 340000,
        "base_def": 5693
    },
    {
        "id": "baishui",
        "name": "白水",
        "x": 528,
        "y": 431,
        "state": "益州",
        "base_pop": 23000,
        "base_def": 1703
    },
    {
        "id": "mianzhu",
        "name": "绵竹",
        "x": 524,
        "y": 450,
        "state": "益州",
        "base_pop": 42000,
        "base_def": 2344
    },
    {
        "id": "zitong",
        "name": "梓潼",
        "x": 545,
        "y": 450,
        "state": "益州",
        "base_pop": 50000,
        "base_def": 2705
    },
    {
        "id": "jianmen",
        "name": "剑阁",
        "x": 560,
        "y": 414,
        "state": "益州",
        "base_pop": 8000,
        "base_def": 3069
    },
    {
        "id": "jiangyou",
        "name": "江油",
        "x": 576,
        "y": 465,
        "state": "益州",
        "base_pop": 28000,
        "base_def": 2314
    },
    {
        "id": "langzhong",
        "name": "阆中",
        "x": 604,
        "y": 445,
        "state": "益州",
        "base_pop": 58000,
        "base_def": 4077
    },
    {
        "id": "shangyong",
        "name": "上庸",
        "x": 660,
        "y": 416,
        "state": "荆州",
        "base_pop": 28000,
        "base_def": 3053
    },
    {
        "id": "jiangzhou",
        "name": "江州",
        "x": 589,
        "y": 503,
        "state": "益州",
        "base_pop": 118000,
        "base_def": 4467
    },
    {
        "id": "baidi",
        "name": "白帝城",
        "x": 662,
        "y": 451,
        "state": "益州",
        "base_pop": 28000,
        "base_def": 2573
    },
    {
        "id": "yiling",
        "name": "夷陵",
        "x": 719,
        "y": 465,
        "state": "荆州",
        "base_pop": 68000,
        "base_def": 4496
    },
    {
        "id": "jiangling",
        "name": "江陵",
        "x": 760,
        "y": 498,
        "state": "荆州",
        "base_pop": 170000,
        "base_def": 4689
    },
    {
        "id": "gongan",
        "name": "公安",
        "x": 736,
        "y": 506,
        "state": "荆州",
        "base_pop": 46000,
        "base_def": 2973
    },
    {
        "id": "huarong",
        "name": "华容",
        "x": 776,
        "y": 504,
        "state": "荆州",
        "base_pop": 34000,
        "base_def": 2052
    },
    {
        "id": "lujiang",
        "name": "庐江",
        "x": 899,
        "y": 467,
        "state": "扬州",
        "base_pop": 92000,
        "base_def": 4293
    },
    {
        "id": "longxi",
        "name": "陇西",
        "x": 472,
        "y": 259,
        "state": "凉州",
        "base_pop": 38000,
        "base_def": 1843
    },
    {
        "id": "liangzhou",
        "name": "凉州",
        "x": 466,
        "y": 206,
        "state": "凉州",
        "base_pop": 58000,
        "base_def": 3431
    },
    {
        "id": "zhangye",
        "name": "张掖",
        "x": 423,
        "y": 171,
        "state": "凉州",
        "base_pop": 20000,
        "base_def": 3076
    },
    {
        "id": "jiuquan",
        "name": "酒泉",
        "x": 379,
        "y": 152,
        "state": "凉州",
        "base_pop": 12000,
        "base_def": 3208
    },
    {
        "id": "dunhuang",
        "name": "敦煌",
        "x": 326,
        "y": 138,
        "state": "凉州",
        "base_pop": 10000,
        "base_def": 2278
    },
    {
        "id": "jieting",
        "name": "街亭",
        "x": 544,
        "y": 276,
        "state": "凉州",
        "base_pop": 10000,
        "base_def": 2874
    },
    {
        "id": "anding",
        "name": "安定",
        "x": 594,
        "y": 259,
        "state": "凉州",
        "base_pop": 46000,
        "base_def": 1911
    },
    {
        "id": "shangjun",
        "name": "上郡",
        "x": 650,
        "y": 220,
        "state": "并州",
        "base_pop": 25000,
        "base_def": 2889
    },
    {
        "id": "wuyuan",
        "name": "五原",
        "x": 642,
        "y": 118,
        "state": "并州",
        "base_pop": 15000,
        "base_def": 2210
    },
    {
        "id": "changsha",
        "name": "长沙",
        "x": 777,
        "y": 557,
        "state": "荆州",
        "base_pop": 135000,
        "base_def": 4963
    },
    {
        "id": "guiyang",
        "name": "桂阳",
        "x": 780,
        "y": 624,
        "state": "荆州",
        "base_pop": 58000,
        "base_def": 4333
    },
    {
        "id": "wuling",
        "name": "武陵",
        "x": 712,
        "y": 572,
        "state": "荆州",
        "base_pop": 75000,
        "base_def": 4412
    },
    {
        "id": "lelang",
        "name": "乐浪",
        "x": 1103,
        "y": 143,
        "state": "幽州",
        "base_pop": 20000,
        "base_def": 3440
    },
    {
        "id": "yuyang",
        "name": "渔阳",
        "x": 960,
        "y": 109,
        "state": "幽州",
        "base_pop": 46000,
        "base_def": 1996
    },
    {
        "id": "wujun",
        "name": "吴郡",
        "x": 998,
        "y": 461,
        "state": "扬州",
        "base_pop": 135000,
        "base_def": 4343
    },
    {
        "id": "kuaiji",
        "name": "会稽",
        "x": 1013,
        "y": 492,
        "state": "扬州",
        "base_pop": 100000,
        "base_def": 3943
    },
    {
        "id": "caisang",
        "name": "柴桑",
        "x": 865,
        "y": 513,
        "state": "扬州",
        "base_pop": 58000,
        "base_def": 4241
    },
    {
        "id": "yuzhang",
        "name": "豫章",
        "x": 876,
        "y": 566,
        "state": "扬州",
        "base_pop": 75000,
        "base_def": 3859
    },
    {
        "id": "poyang",
        "name": "蕃阳",
        "x": 914,
        "y": 520,
        "state": "扬州",
        "base_pop": 58000,
        "base_def": 4197
    },
    {
        "id": "jianan",
        "name": "建安",
        "x": 944,
        "y": 571,
        "state": "扬州",
        "base_pop": 34000,
        "base_def": 2324
    },
    {
        "id": "danyang",
        "name": "丹阳",
        "x": 951,
        "y": 492,
        "state": "扬州",
        "base_pop": 100000,
        "base_def": 4116
    },
    {
        "id": "luling",
        "name": "庐陵",
        "x": 872,
        "y": 639,
        "state": "扬州",
        "base_pop": 46000,
        "base_def": 2576
    },
    {
        "id": "nanhai",
        "name": "南海",
        "x": 781,
        "y": 727,
        "state": "交州",
        "base_pop": 75000,
        "base_def": 4139
    },
    {
        "id": "quanzhou",
        "name": "泉州",
        "x": 944,
        "y": 644,
        "state": "扬州",
        "base_pop": 20000,
        "base_def": 2725
    },
    {
        "id": "yizhou",
        "name": "夷洲",
        "x": 1001,
        "y": 696,
        "state": "扬州",
        "base_pop": 3000,
        "base_def": 2149
    },
    {
        "id": "yazhou",
        "name": "崖州",
        "x": 702,
        "y": 850,
        "state": "交州",
        "base_pop": 6000,
        "base_def": 1829
    },
    {
        "id": "guilin",
        "name": "桂林",
        "x": 653,
        "y": 692,
        "state": "交州",
        "base_pop": 34000,
        "base_def": 3159
    },
    {
        "id": "jiaozhi",
        "name": "交趾",
        "x": 572,
        "y": 783,
        "state": "交州",
        "base_pop": 58000,
        "base_def": 3368
    },
    {
        "id": "jianning",
        "name": "建宁",
        "x": 509,
        "y": 656,
        "state": "益州",
        "base_pop": 34000,
        "base_def": 1934
    },
    {
        "id": "wuyang",
        "name": "武阳",
        "x": 475,
        "y": 582,
        "state": "益州",
        "base_pop": 25000,
        "base_def": 2242
    },
    {
        "id": "yongan",
        "name": "永安",
        "x": 419,
        "y": 628,
        "state": "交州",
        "base_pop": 16000,
        "base_def": 2390
    },
    {
        "id": "yunnan",
        "name": "云南",
        "x": 457,
        "y": 672,
        "state": "益州",
        "base_pop": 20000,
        "base_def": 3186
    },
    {
        "id": "liaodong",
        "name": "辽东",
        "x": 1045,
        "y": 103,
        "state": "幽州",
        "base_pop": 58000,
        "base_def": 3909
    },
    {
        "id": "zhending",
        "name": "真定",
        "x": 806,
        "y": 180,
        "state": "冀州",
        "base_pop": 85000,
        "base_def": 3834
    },
    {
        "id": "hedong",
        "name": "河东",
        "x": 703,
        "y": 306,
        "state": "司隶",
        "base_pop": 100000,
        "base_def": 3355
    },
    {
        "id": "xicheng",
        "name": "西城",
        "x": 481,
        "y": 358,
        "state": "凉州",
        "base_pop": 28000,
        "base_def": 2084
    },
    {
        "id": "wuhuan",
        "name": "乌桓",
        "x": 908,
        "y": 42,
        "state": "幽州",
        "base_pop": 28000,
        "base_def": 2783
    },
    {
        "id": "yinchuan",
        "name": "银川",
        "x": 578,
        "y": 172,
        "state": "凉州",
        "base_pop": 15000,
        "base_def": 2015
    },
    {
        "id": "baqiu",
        "name": "巴丘",
        "x": 759,
        "y": 527,
        "state": "荆州",
        "base_pop": 42000,
        "base_def": 2480
    }
];
