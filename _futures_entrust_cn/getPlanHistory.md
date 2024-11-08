---
title: 查询历史计划委托
position_number: 6
type: get
description: /future/trade/v1/entrust/plan-list-history
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default: N/A
        description: "交易对（不传时撤销所有交易对）\t"
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
            "hasNext": false, //是否有下一页
            "hasPrev": false, //是否有上一页
            "items": [ //数据列表
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
            ]
          },
          "returnCode": 0
        }
      title: Response
      language: json
---