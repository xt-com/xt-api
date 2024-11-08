---
title: 查询止盈止损
position_number: 10
type: get
description: /future/trade/v1/entrust/profit-list
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
                "createdTime": 0, //时间
                "entryPrice": 0, //开仓均价
                "executedQty": 0, //实际成交
                "isolatedMargin": 0, //逐仓保证金
                "origQty": 0, //数量（张）
                "positionSide": "", //仓位方向
                "positionSize": 0, //持仓数量（张）
                "profitId": 0, //委托id
                "state": "", //订单状态 NOT_TRIGGERED：新建委托（未触发）；TRIGGERING：触发中；TRIGGERED：已触发；USER_REVOCATION：用户撤销；PLATFORM_REVOCATION：平台撤销（拒绝）；EXPIRED：已过期
                "symbol": "", //交易对
                "triggerProfitPrice": 0, //止盈价格
                "triggerStopPrice": 0 //止损价格
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