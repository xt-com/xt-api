---
title: 余额变动
position_number: 5
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
    param

    语法: balance

    示例: balance
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
                {
                    "topic": "balance", 
                    "event": "balance", 
                    "data": {
                        "a": "123",           // accountId 账号 
                        "t": 1656043204763,   // time 发⽣时间
                        "c": "btc",           // currency 币种
                        "b": "123",           // balance 可⽤资产
                        "f": "11",            // frozen 冻结资产
                        "z": "SPOT",          // bizType 业务类型[SPOT,LEVER]
                        "s": "btc_usdt"       // symbol 交易市场  
                    }
                }
        title: 推送
        language: json
---
