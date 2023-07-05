---
title: 订单变动
position_number: 7
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
                        "bc": "btc",                    // baseCurrency 标的币种
                        "qc": "usdt",                   // quoteCurrency 报价币种
                        "t": 1656043204763,             // time 发⽣时间
                        "ct": 1656043204663,            // createTime 下单时间
                        "i": "6216559590087220004",     // orderId 订单号
                        "ci": "test123",                // clientOrderId 客户端订单号
                        "st": "PARTIALLY_FILLED",       // state 状态 NEW/PARTIALLY_FILLED/FILLED/CANCELED/REJECTED/EXPIRED
                        "sd": "BUY",                    // side 方向 BUY/SELL
                        "tp": "LIMIT",                  // type 类型 LIMIT/MARKET
                        "oq":  "4"                      // origQty 原始数量
                        "oqq":  48000,                  // origQuoteQty 原始金额
                        "eq": "2",                      // executedQty 已执⾏数量
                        "lq": "2",                      // leavingQty 待执行数量
                        "p": "4000",                    // price 价格
                        "ap": "30000",                  // avg price 均价
                        "f": "0.001"                    // fee 手续费
                    }
                }
        title: 推送
        language: json
---
