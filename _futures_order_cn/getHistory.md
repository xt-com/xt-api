---
title: 查询历史订单
position_number: 1.1
type: get
description: /future/trade/v1/order/list-history
parameters:
    -
        name: symbol
        type: string
        mandatory: false
        default: N/A
        description: 交易对
        ranges:
    -
        name: direction
        type: string
        mandatory: false
        default: NEXT
        description: "方向（PREV:上一页；NEXT:下一页）\t"
        ranges: PREV;NEXT
    -
        name: id
        type: integer
        mandatory: false
        default: N/A
        description: id
        ranges:
    -
        name: limit
        type: integer
        mandatory: false
        default: 10
        description: "条数\t"
        ranges:
    -
        name: startTime
        type: integer
        mandatory: false
        default: N/A
        description: 起始时间
        ranges:
    -
        name: endTime
        type: integer
        mandatory: false
        default: N/A
        description: 结束时间
        ranges:
content_markdown: |-

                  #### **限流规则**

                  200/s/apikey
left_code_blocks:
  - code_block: "public void getMarketConfig() {\r\n\tString text = HttpUtil.get(URL + \"/data/api/future/trade/v1/getMarketConfig\");\r\n\tSystem.out.println(text);\r\n}"
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
        "result": {
          "hasNext": false, //是否有下一页
          "hasPrev": false, //是否有上一页
          "items": [ //数据列表
            {
              "clientOrderId": "", //自定义订单id
              "avgPrice": 0, //成交均价
              "closePosition": false, //是否条件全平仓
              "closeProfit": 0, //平仓盈亏
              "createdTime": 0, //创建时间
              "executedQty": 0, //已成交数量（张）
              "forceClose": false, //是否是强平订单
              "marginFrozen": 0, //占用保证金
              "orderId": 0, //订单id
              "orderSide": "", //买卖方向
              "orderType": "", //订单类型
              "origQty": 0, //数量（张）
              "positionSide": "", //持仓方向
              "price": 0, //委托价格
              "sourceId": 0, //条件触发id
              "state": "", //订单状态 NEW：新建订单（未成交）；PARTIALLY_FILLED：部分成交；PARTIALLY_CANCELED：部分撤销；FILLED：全部成交；CANCELED：已撤销；REJECTED：下单失败；EXPIRED：已过期
              "symbol": "", //交易对
              "timeInForce": "", //有效类型
              "triggerProfitPrice": 0, //止盈触发价
              "triggerStopPrice": 0 //止损触发价
            }
          ]
        },
        "returnCode": 0
      }
    title: Response
    language: json
---