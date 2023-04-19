---
title: 委托变动
position_number: 6
display: 0
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

    语法: trigger

    示例: trigger
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
                {
                    "topic": "trigger", 
                    "event": "trigger", 
                    "data": {
                        "s": "btc_usdt",                // symbol 交易对
                        "t": 1656043204763,             // time 发⽣时间
                        "i": "6216559590087220004",     // triggerId 订单号
                        "st": "NEW"                     // state 状态
                    }
                }
        title: 推送
        language: json
---
