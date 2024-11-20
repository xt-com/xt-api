---
title: Get Funding Rate Information
position_number: 18
type: get
description: /future/market/v1/public/q/funding-rate
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default: N/A
        description: Trading pair
        ranges:
content_markdown: >-
  
    #### **Limit Flow Rules**

    1/s/ip
    <br>
    Note：This method does not require a signature.
  

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
                "collectionInternal": 0, //Billing Cycle (hour)
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