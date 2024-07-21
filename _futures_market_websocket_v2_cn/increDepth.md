---
title: 增量深度
position_number: 16
type:
description: 

parameters:
    -
        name:
        type: string
        mandatory: false
        default:
        description:
        ranges:
content_markdown: |-
    **请求**

    语法: depth\_update@\{symbol\},\{interval\}

    interval: 100/250/500/1000 默认速率100ms

    示例: depth\_update@btc\_usdt,100ms
    
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
                {
                    "topic": "depth_update", 
                    "event": "depth_update@btc_usdt", 
                    "data": {
                        "s": "btc_usdt",        // symbol 交易对
                        "pu": 120,              // previousUpdateId 等于上一次推送的lastUpdateId
                        "fu": 121,              // firstUpdateId 等于上一次推送的lastUpdateId + 1
                        "u": 123,               // lastUpdateId
                        "a": [                  // asks 卖盘
                            [                   // [0]价格, [1]数量
                                "34000",        //价格
                                "1.2"           //数量
                            ], 
                            [
                                "34001", 
                                "2.3"
                            ]
                        ], 
                        "b": [                  // bids 买盘
                            [
                                "32000", 
                                "0.2"
                            ], 
                            [
                                "31000", 
                                "0.5"
                            ]
                        ],
                        "t": 123456789 // 时间戳
                    }
                }
        title: Response
        language: json
---
