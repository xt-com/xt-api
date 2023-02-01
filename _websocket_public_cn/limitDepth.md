---
title: 有限深度
position_number: 9
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

    &nbsp;

    语法: depth@\{symbol\},\{levels\}

    levels: 5, 10, 20, 50

    示例: depth@btc\_usdt,20
    
    速率: 1000ms
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
                {
                    "topic": "depth", 
                    "event": "depth@btc_usdt,20", 
                    "data": {
                        "s": "btc_usdt",        // symbol 交易对
                        "i": 12345678,          // updateId
                        "t": 1657699200000,     // time 时间戳
                        "a": [                  // asks 卖盘
                            [                   //[0]价格, [1]数量
                                "34000",        //价格
                                "1.2"           //数量 
                            ], 
                            [
                                "34001", 
                                "2.3"
                            ]
                        ], 
                        "b": [                   // bids 买盘
                            [
                                "32000", 
                                "0.2"
                            ], 
                            [
                                "31000", 
                                "0.5"
                            ]
                        ]
                    }
                }
        title: Response
        language: json
---
