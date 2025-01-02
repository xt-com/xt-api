---
title: Get Funding Rate Records
position_number: 19
type: get
description: /future/market/v1/public/q/funding-rate-record
parameters:
    -
        name: symbol
        type: string
        mandatory: false
        default: N/A
        description: Trading pair
        ranges:
    -
        name: direction
        type: string
        mandatory: false
        default: NEXT
        description: "Direction（PREV:Previous page；NEXT:Next page）\t"
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
        description: "Limit\t"
        ranges:
content_markdown: Note：This method does not require a signature.
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
            "hasNext": false, //Is there a next page
            "hasPrev": false, //Is there a previous page
            "items": [ //Datasheets
              {
                "collectionInternal": 0, //Billing Cycle (second)
                "createdTime": 0, //Time
                "fundingRate": 0, //Latest funding rate
                "id": 0, //id
                "symbol": "" //Trading pair
              }
            ]
          },
          "returnCode": 0
        }
      title: Response
      language: json
---