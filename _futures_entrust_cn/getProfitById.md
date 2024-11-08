---
title: 根据profitId查询止盈止损
position_number: 11
type: get
description: /future/trade/v1/entrust/profit-detail
parameters:
    -
        name: profitId
        type: integer
        mandatory: true
        default: N/A
        description: 止盈止损id
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
          },
          "returnCode": 0
        }
      title: Response
      language: json
---