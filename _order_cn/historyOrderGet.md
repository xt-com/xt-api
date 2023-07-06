---
title: 历史订单查询
position_number: 9
type: get
description: /v4/history-order
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
        name: side
        type: string
        mandatory: false
        default:
        description: BUY-买,SELL-卖
        ranges:
    -
        name: type
        type: string
        mandatory: false
        default:
        description: 订单类型   LIMIT-现价, MARKET-市价
        ranges:
    -
        name: state
        type: string
        mandatory: false
        default:
        description: >-
            订单<a href="#orderStatusCn">状态</a>
            NEW-新建,PARTIALLY_FILLED-部分成交,FILLED-全部成交,CANCELED-用户撤单,REJECTED-下单失败,EXPIRED-过期(time_in_force撤单或溢价撤单)
        ranges:
    -
        name: fromId
        type: number
        mandatory: false
        default:
        description: 起始ID
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
    -
        name: hiddenCanceled
        type: bool
        mandatory: false
        default:
        description: 隐藏已取消
        ranges:
content_markdown: >-
    #### **限流规则**

    10/s/apikey
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
                "items": [   //内容信息参考单笔获取订单接口
                  {
                    "symbol": "BTC_USDT",
                    "orderId": "6216559590087220004",
                    "clientOrderId": "16559590087220001",
                    "baseCurrency": "string",
                    "quoteCurrency": "string",
                    "side": "BUY",
                    "type": "LIMIT",
                    "timeInForce": "GTC",
                    "price": "40000",
                    "origQty": "2",
                    "origQuoteQty": "48000",
                    "executedQty": "1.2",
                    "leavingQty": "string",
                    "tradeBase": "2",
                    "tradeQuote": "48000",
                    "avgPrice": "42350",
                    "fee": "string",
                    "feeCurrency": "string",
                    "state": "NEW",
                    "time": 1655958915583,
                    "updatedTime": 1655958915583
                  }
                ]
              }
            }
        title: Response
        language: json
---
