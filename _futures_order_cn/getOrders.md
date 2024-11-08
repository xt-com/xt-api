---
title: 查询订单
position_number: 5
type: get
description: /future/trade/v1/order/list
parameters:
  - name: clientOrderId
    type: String
    mandatory: false
    default: N/A
    description: 自定义订单id
    ranges:
  - name: page
    type: integer
    mandatory: false
    default: 1
    description: 页码
    ranges:
  - name: size
    type: integer
    mandatory: false
    default: 10
    description: 单页数
    ranges:
  - name: startTime
    type: integer
    mandatory: false
    default: N/A
    description: 开始时间
    ranges:
  - name: endTime
    type: integer
    mandatory: false
    default: N/A
    description: 结束时间
    ranges:
  - name: state
    type: string
    mandatory: false
    default: NEW
    description: >-
      订单状态
      NEW：新建订单（未成交）；PARTIALLY_FILLED：部分成交；FILLED：全部成交；CANCELED：用户撤销；REJECTED：下单失败；EXPIRED：已过期；UNFINISHED：未完成；HISTORY：（历史）
    ranges:
  - name: symbol
    type: string
    mandatory: false
    default: N/A
    description: 交易对
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
          "items": [
            {
              "clientOrderId": "", //自定义订单id
              "avgPrice": 0, //成交均价
              "closePosition": false, //是否条件全平仓
              "closeProfit": 0, //平仓盈亏
              "createdTime": 0, //创建时间
              "executedQty": 0, //已成交数量（张）
              "forceClose": false, //是否是全平订单
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
          ],
          "page": 0,
          "ps": 0,
          "total": 0
        },
        "returnCode": 0
      }
    title: Response
    language: json
---