---
title: Get copy trade symbols
position_number: 1
type: get
display: 0
split: -------------------------------------
description: /v4/public/copy-trade/symbol
parameters:
 
content_markdown: >-

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
