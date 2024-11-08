---
title: 查询计划委托
position_number: 4
type: get
description: /future/trade/v1/entrust/plan-list
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default: N/A
        description: "交易对（不传时撤销所有交易对）\t"
        ranges:
    -
        name: page
        type: integer
        mandatory: false
        default: 1
        description: 页码
        ranges:
    -
        name: size
        type: integer
        mandatory: false
        default: 10
        description: 单页数
        ranges:
    -
        name: startTime
        type: integer
        mandatory: false
        default: N/A
        description: 开始时间
        ranges:
    -
        name: endTime
        type: integer
        mandatory: false
        default: N/A
        description: 结束时间
        ranges:
    -
        name: state
        type: string
        mandatory: true
        default: N/A
        description: >-
            委托状态
            NOT_TRIGGERED：新建委托（未触发）；TRIGGERING：触发中；TRIGGERED：已触发；USER_REVOCATION：用户撤销；PLATFORM_REVOCATION：平台撤销（拒绝）；EXPIRED：已过期；UNFINISHED：未完成；HISTORY：（历史）
        ranges: >-
            NOT_TRIGGERED;TRIGGERING;TRIGGERED;USER_REVOCATION;PLATFORM_REVOCATION;EXPIRED;UNFINISHED;HISTORY
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
                "clientOrderId": "", //自定义订单id
                "closePosition": false, //是否触发全平
                "createdTime": 0, //创建时间
                "entrustId": 0, //委托id
                "entrustType": "", //委托类型
                "marketOrderLevel": 0, //市价最优档
                "orderSide": "", //买卖方向
                "ordinary": true,
                "origQty": 0, //数量（张）
                "positionSide": "", //持仓方向
                "price": 0, //订单价格
                "state": "", //订单状态 NOT_TRIGGERED：新建委托（未触发）；TRIGGERING：触发中；TRIGGERED：已触发；USER_REVOCATION：用户撤销；PLATFORM_REVOCATION：平台撤销（拒绝）；EXPIRED：已过期
                "stopPrice": 0, //触发价格
                "symbol": "", //交易对
                "timeInForce": "", //有效方式
                "triggerPriceType": "" //触发价格类型
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