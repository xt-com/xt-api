---
title: 获取持仓爆仓信息
position_number: 18
type: get
description: /future/user/v1/position/break-list
parameters:
    -
        name: symbol
        type: string
        mandatory: false
        default: N/A
        description: 交易对（不传时查询所有交易对的持仓爆仓信息）
        ranges:
content_markdown: |-

                #### **限流规则**

                200/s/apikey
left_code_blocks:
    -
        code_block: "public void getMarketConfig() {\r\n\tString text = HttpUtil.get(URL + \"/future/user/v1/position/break-list\");\r\n\tSystem.out.println(text);\r\n}"
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
          "result": [
            {
              "breakPrice": 0,    //爆仓价格,0代表不爆仓
              "calMarkPrice": 0,  //计算标记价格
              "contractType": "", //合约类型：PERPETUAL(永续合约)、PREDICT(预测合约)
              "entryPrice": 0,    //开仓均价
              "isolatedMargin": 0,//逐仓保证金
              "leverage": 0,      //杠杆倍数
              "positionSide": "", //持仓方向
              "positionSize": 0,  //持仓数量（张）
              "positionType": "", //仓位类型:CROSSED(全仓);ISOLATED(逐仓)
              "symbol": ""        //交易对
            }
          ],
          "returnCode": 0
        }
      title: Response
      language: json
---
