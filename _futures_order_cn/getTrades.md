---
title: 查询成交明细
position_number: 1.1
type: get
description: /future/trade/v1/order/trade-list
parameters:
    -
        name: orderId
        type: integer
        mandatory: false
        default: N/A
        description: 订单id
        ranges:
    -
        name: symbol
        type: string
        mandatory: false
        default: N/A
        description: 交易对
        ranges:
    -
        name: page
        type: integer
        mandatory: false
        default: 1
        description: "页码\t"
        ranges:
    -
        name: size
        type: integer
        mandatory: false
        default: 10
        description: "单页数\t"
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
    -
        code_block: "public void getMarketConfig() {\r\n\tString text = HttpUtil.get(URL + \"/data/api/future/trade/v1/getMarketConfig\");\r\n\tSystem.out.println(text);\r\n}"
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
                "fee": 0,               //手续费
                "feeCoin": "",          //手续费币种
                "orderId": 0,           //订单id
                "execId": 0,            //成交id
                "price": 0,             //成交价格
                "quantity": 0,          //成交数量
                "symbol": "",           //交易对
                "timestamp": 0,         //时间
                "takerMaker": "TAKER"   
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