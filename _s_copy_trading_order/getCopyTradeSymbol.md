---
title: Get copy trade symbols
position_number: 10
type: get
description: /v1/copy-trade-market/public/copy-trade/symbol
parameters:
 
content_markdown: >-
    #### **Limit Flow Rules**

    2/s/apikey
left_code_blocks:
    -
        code_block:
        title: Java
        language: java
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
                {
                  "rc": 0,
                  "mc": "SUCCESS",
                  "ma": [],
                  "result": [{
                     symbolId: 1,        //symbol id
                     symbol: "btc_usdt"  //symbol
                   }]
                }
        title: Response
        language: json
---
