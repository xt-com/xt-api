---
title: 改单
position_number: 2
type: post
description: /future/trade/v1/order/update
remark: Content-Type = application/x-www-form-urlencoded && application/json
parameters:
    -
        name: orderId
        type: number
        mandatory: true
        default: 
        description: 订单id
        ranges:
    -
        name: price
        type: number
        mandatory: true
        default: 
        description: 目标价格
        ranges:
    -
        name: origQty
        type: number
        mandatory: true
        default: 
        description: 目标数量（张）
        ranges:
    -
        name: triggerProfitPrice
        type: number
        mandatory: false
        default: N/A
        description: 止盈价格
        ranges:
    -
        name: triggerStopPrice
        type: number
        mandatory: false
        default: N/A
        description: 止损价格
        ranges:
    -
        name: triggerPriceType
        type: string
        mandatory: false
        default: LATEST_PRICE
        description: 触发价格类型
        ranges: INDEX_PRICE(指数价格)；MARK_PRICE(标记价格)；LATEST_PRICE(最新价)
    -
        name: profitDelegateOrderType
        type: string
        mandatory: false
        default: N/A
        description: 止盈委托订单类型
        ranges: LIMIT(限价)；MARKET(市价)
    -
        name: profitDelegateTimeInForce
        type: string
        mandatory: false
        default: N/A
        description: 止盈委托有效方式
        ranges: GTC;IOC;FOK;GTX
    -
        name: profitDelegatePrice
        type: number
        mandatory: false
        default: N/A
        description: 止盈委托委托价格
        ranges: 
    -
        name: stopDelegateOrderType
        type: string
        mandatory: false
        default: N/A
        description: 止损委托订单类型
        ranges:  LIMIT(限价)；MARKET(市价)
    -
        name: stopDelegateTimeInForce
        type: string
        mandatory: false
        default: N/A
        description: 止损委托有效方式
        ranges: GTC;IOC;FOK;GTX
    -
        name: stopDelegatePrice
        type: number
        mandatory: false
        default: N/A
        description: 止损委托价格
        ranges: 
    -
        name: followUpOrder
        type: boolean
        mandatory: false
        default: N/A
        description: 
        ranges: 如果为 true，则表示为追单订单
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