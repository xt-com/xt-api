---
title: 订单变动
position_number: 7
type:
description: |+

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

    语法: order

    示例: order
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
                {
                    "topic": "order", 
                    "event": "order", 
                    "data": {
                        "s": "btc_usdt",                // symbol 交易对
                        "t": 1656043204763,             // time 发⽣时间
                        "i": "6216559590087220004",     // orderId 订单号
                        "st": "PARTIALLY_FILLED",       // state 状态
                        "eq": "2",                      // executedQty 已执⾏数量
                        "ap": "30000"                   // avg price 均价
                    }
                }
        title: 推送
        language: json
---
