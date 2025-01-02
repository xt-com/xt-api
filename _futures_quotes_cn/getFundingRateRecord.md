---
title: 获取资金费率记录
position_number: 19
type: get
description: /future/market/v1/public/q/funding-rate-record
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
content_markdown: 注：**此方法不需要签名**
left_code_blocks:
    -
        code_block: "public void getKLine() {\r\n\tString text = HttpUtil.get(URL + \"/data/api/future/market/v1/getKLine?market=btc_usdt&type=1min&since=0\");\r\n\tSystem.out.println(text);\r\n}"
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
                "collectionInternal": 0, //收取时间间隔（秒）
                "createdTime": 0, //时间
                "fundingRate": 0, //最新资金费率
                "id": 0, //id
                "symbol": "" //交易对
              }
            ]
          },
          "returnCode": 0
        }
      title: Response
      language: json
---