---
title: 订单成交
position_number: 8
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

    语法: trade

    示例: trade
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
            {
                "topic": "trade", 
                "event": "trade", 
                "data": {
                    "s": "btc_usdt",                // symbol 交易对
                    "t": 1656043204763,             // time 发⽣时间
                    "i": "6316559590087251233",     // tradeId 订单号
                    "oi": "6216559590087220004",    // orderId 订单号
                    "p": "30000",                   // price 成交价
                    "q": "3",                       // qty 成交量
                    "v": "90000"                    // quoteQty 成交量
                }
            }
        title: 推送
        language: json
---
