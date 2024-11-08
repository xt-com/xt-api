---
title: 获取用户账务流水
position_number: 5
type: get
description: /future/user/v1/balance/bills
parameters:
    -
        name: symbol
        type: string
        mandatory: true
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
    -
        code_block: "public void getMarketConfig() {\r\n\tString text = HttpUtil.get(URL + \"/data/api/user/v1/getMarketConfig\");\r\n\tSystem.out.println(text);\r\n}"
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
                "afterAmount": 0, //变动后余额
                "amount": 0, //数量
                "coin": "", //币种
                "createdTime": 0, //时间
                "id": 0, //id
                "side": "", //ADD:划入;SUB:转出
                "symbol": "", //交易对
                "type": "" //EXCHANGE:划转;CLOSE_POSITION:平仓盈亏;TAKE_OVER:仓位接管;QIANG_PING_MANAGER:强平管理费（手续费）;FUND:资金费用;FEE:手续费 (开仓、平仓、强平);ADL:自动减仓;TAKE_OVER:仓位接管MERGE:仓位合并
              }
            ]
          },
          "returnCode": 0
        }
      title: Response
      language: json
---