---
title: 获取当前跟单
position_number: 13
type: get
description: /future/copytrade/order/v1/copy-trade/follower-order-list
parameters:
    -
        name: type
        type: number
        mandatory: false
        default:
        description: 查询类型,1:明细,2:汇总
        ranges: 1,2
    -
        name: symbol
        type: string
        mandatory: false
        default:
        description: 交易对
        ranges:
    -
        name: direction
        type: string
        mandatory: false
        default:
        description: 方向(NEXT, PREV)
        ranges: NEXT,PREV
    -
        name: limit
        type: number
        mandatory: false
        default:
        description: 翻页大小
        ranges: 10
    -
        name: id
        type: number
        mandatory: false
        default:
        description: id
        ranges:
content_markdown: >-
    #### **限流规则**

    2/s/apikey
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
                        "returnCode": 0,
                        "msgInfo": "success",
                        "error": null,
                        "result": [
                                {
                                "symbolName": "string", // 市场名称
                                "positionType": "string", // 仓位类型:CROSSED(全仓);ISOLATED(逐仓)
                                "positionSide": "string", // 持仓方向:LONG;SHORT
                                "openLeverage": 5, // 杠杆
                                "id": 0, // id
                                "orderId": 0, // 订单id
                                "trackNo": 0, // 跟单trackNo
                                "openTime": 0, // 开仓时间
                                "closeTime": 0, // 平仓时间
                                "openPrice": 0, // 开仓均价
                                "closePrice": 0, // 平仓均价
                                "profitRate": 0, // 收益率
                                "openMargin": 0, // 开仓初始保证金
                                "realizedPnl": 0, // 已实现盈亏
                                "leaderNickname": "string", // 交易员
                                "openSize": 0, // 开仓仓位数量
                                "closeSize": 0, // 平仓仓位数量
                                "positionSize": 0, // 持仓数量
                                "closeOrderSize": 0, // 平仓订单占用
                                "availableCloseSize": 0, // 可平数量
                                "triggerProfitPrice": 0, // 止盈价
                                "triggerStopPrice": 0, // 止损价
                                "triggerPriceType": "string", // 触发价格类型:LATEST_PRICE,MARK_PRICE
                                "avatar": "string" // 头像
                                }
                        ]
                        }
        title: Response
        language: json
---
