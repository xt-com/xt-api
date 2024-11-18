---
title: 创建计划委托
position_number: 1
type: post
description: /future/trade/v1/entrust/create-plan
remark: Content-Type = application/x-www-form-urlencoded && application/json
parameters:
    -
        name: clientOrderId
        type: string
        mandatory: false
        default: N/A
        description: 自定义订单id
        ranges:
    -
        name: symbol
        type: string
        mandatory: true
        default: 
        description: 交易对
        ranges:
    -
        name: orderSide
        type: string
        mandatory: true
        default: N/A
        description: 买卖方向：BUY;SELL
        ranges: BUY;SELL
    -
        name: entrustType
        type: string
        mandatory: true
        default: N/A
        description: >-
            委托类型：TAKE_PROFIT(止盈限价单)；STOP(止损限价单)；TAKE_PROFIT_MARKET（止盈市价单）；STOP_MARKET（止损市价单）
        ranges: TAKE_PROFIT;STOP;TAKE_PROFIT_MARKET;STOP_MARKET
    -
        name: origQty
        type: number
        mandatory: true
        default: N/A
        description: 数量（张）
        ranges:
    -
        name: price
        type: number
        mandatory: false
        default: N/A
        description: 价格
        ranges:
    -
        name: stopPrice
        type: number
        mandatory: true
        default: N/A
        description: 触发价
        ranges:
    -
        name: timeInForce
        type: string
        mandatory: true
        default: N/A
        description: 有效方式：GTC;IOC;FOK;GTX, 市价委托只支持IOC
        ranges: GTC;IOC;FOK;GTX
    -
        name: triggerPriceType
        type: string
        mandatory: true
        default: N/A
        description: 触发价格类型：INDEX_PRICE(指数价格)；MARK_PRICE(标记价格)；LATEST_PRICE(最新价格)
        ranges: INDEX_PRICE;MARK_PRICE;LATEST_PRICE
#    -
#        name: expireTime
#        type: integer
#        mandatory: false
#        default: N/A
#        description: 过期时间
#        ranges:
    -
        name: positionSide
        type: string
        mandatory: true
        default: N/A
        description: 仓位方向：LONG;SHORT
        ranges: LONG;SHORT
content_markdown: |-

            #### **限流规则**

            200/s/apikey
left_code_blocks:
    -
        code_block: "public void getKLine() {\r\n\tString text = HttpUtil.get(URL + \"/data/api/future/trade/v1/getKLine?market=btc_usdt&type=1min&since=0\");\r\n\tSystem.out.println(text);\r\n}"
        title: Java
        language: java
right_code_blocks:
    - code_block: |-
        {
            "error": {
            "code": "",
            "msg": ""
            },
            "msgInfo": "",
            "result": {},
            "returnCode": 0
        }
        title: Response
        language: json
---