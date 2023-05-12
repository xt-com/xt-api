---
title: 用户订单
position_number: 10
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

    语法: order@\{accountId\}

    示例: order@123456
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
                    "event": "order@123456", 
                    "data": {
                         "symbol":"btc_usdt",  // 交易对
                         "orderId": "1234", //订单id
                         "origQty": "34244", // 下单数量
                         "avgPrice": "123", // 成交均价
                         "price": "1111", //下单价格
                         "executedQty":"34244", // 已成交数量
                         "orderSide": "BUY", // BUY, SELL
                         "positionSide": "LONG", // LONG, SHORT
                          "marginFrozen":"123", // 占用保证金
                          "sourceType":"default", //  DEFAULT:普通订单， ENTRUST:计划委托，PROFIR:止盈止损
                          "sourceId" : "1231231",// 条件订单出发ID
                          "state": "", // 订单状态 NEW：新建订单;未成交; PARTIALLY_FILLED：部分成交；PARTIALLY_CANCELED：部分撤销；FILLED：全部成交；CANCELED：已撤销；REJECTED：下单失败；EXPIRED：已过期
                          "createTime": 1731231231 // 时间戳
                       }
                }
        title: Response
        language: json
---
