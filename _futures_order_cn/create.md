---
title: 下单
position_number: 1
type: post
description: /future/trade/v1/order/create
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
        name: orderType
        type: string
        mandatory: true
        default: N/A
        description: 订单类型：LIMIT；MARKET
        ranges: LIMIT；MARKET
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
#    -
#        name: reduceOnly
#        type: boolean
#        mandatory: false
#        default: false
#        description: 只减仓
#        ranges:
    -
        name: timeInForce
        type: string
        mandatory: false
        default: GTC
        description: 有效方式：GTC;IOC;FOK;GTX
        ranges: GTC;IOC;FOK;GTX
    -
        name: triggerProfitPrice
        type: number
        mandatory: false
        default: N/A
        description: 止盈价
        ranges:
    -
        name: triggerStopPrice
        type: number
        mandatory: false
        default: N/A
        description: 止损价
        ranges:
    -
        name: positionSide
        type: string
        mandatory: true
        default: N/A
        description: 仓位方向：LONG;SHORT
        ranges: LONG;SHORT
content_markdown: |-
  #### **OrigQty 计算公式**

  ###### **公式**  

   origQty = Truncate ((Balance * Percent * Leverage ) / (Mark_price * Contract_size))

  ###### **解释**

      Truncate : 取整数部分 

      Balance : (walletBalance - openOrderMarginFrozen) , api: /future/user/v1/compat/balance/list  

      Percent : 用户输入 , 例如: 0.2 

      Leverage : 杠杆倍数 , 例如: 20 

      Mark_price : 市场标记价格 , 例如: 88888 (btc_usdt) 

      Contract_size : 合约面值 , api: /future/market/v1/public/symbol/detail , Contract multiplier(face value)  

  ###### **举例**
   truncate(10000 * 0.2 * 20 / 88888 / 0.0001) = 4500

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