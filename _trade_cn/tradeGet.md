---
title: 成交查询
position_number: 1
type: get
description: /v4/trade
parameters:
    -
        name: symbol
        type: string
        mandatory: false
        default:
        description: 交易对，不传代表所有
        ranges:
    -
        name: bizType
        type: string
        mandatory: false
        default:
        description: >-
            业务类型  SPOT-现货, LEVER-杠杆
        ranges:
    -
        name: orderSide
        type: string
        mandatory: false
        default:
        description: BUY-买,SELL-卖
        ranges:
    -
        name: orderType
        type: string
        mandatory: false
        default:
        description: 订单类型   LIMIT-现价, MARKET-市价
        ranges:
    -
        name: orderId
        type: number
        mandatory: false
        default:
        description: 订单号
        ranges:
    -
        name: fromId
        type: number
        mandatory: false
        default:
        description: 分页起始ID
        ranges:
    -
        name: direction
        type: string
        mandatory: false
        default:
        description: 查询方向:PREV, NEXT
        ranges:
    -
        name: limit
        type: number
        mandatory: false
        default: '20'
        description: 限制数量,最大100
        ranges:
    -
        name: startTime
        type: number
        mandatory: false
        default:
        description: 开始时间 eg:1657682804112
        ranges:
    -
        name: endTime
        type: number
        mandatory: false
        default:
        description: 结束时间
        ranges:
content_markdown:
left_code_blocks:
    -
        code_block:
        title: Java
        language: java
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
                {
                  "rc": 0,
                  "mc": "string",
                  "ma": [
                    {}
                  ],
                  "result": {
                    "hasPrev": true,
                    "hasNext": true,
                    "items": [
                      {
                        "symbol": "BTC_USDT",               //交易对
                        "tradeId": "6316559590087222001",   //成交单号
                        "orderId": "6216559590087220004",   //订单号
                        "orderSide": "BUY",                 //订单方向
                        "orderType": "LIMIT",               //订单类型
                        "bizType": "SPOT",                  //业务类型
                        "time": 1655958915583,              //成交时间
                        "price": "40000",                   //成交价格
                        "quantity": "1.2",                  //成交数量
                        "quoteQty": "48000",                //成交金额
                        "baseCurrency": "BTC",              //标的币种类型
                        "quoteCurrency": "USDT",            //报价币种类型
                        "fee": "0.5",                       //手续费资产金额
                        "feeCurrency": "USDT",              //手续费资产类型
                        "takerMaker": "taker"               //takerMaker
                      }
                    ]
                  }
                }
        title: Response
        language: json
---

