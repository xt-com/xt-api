---
title: query account vip fee info
position_number: 3
type: get
description: /v4/user/account/vip-info
parameters:
content_markdown: >-

left_code_blocks:
  -
    code_block: |-
      
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
                        "result": {
                            "vipLevel": 0,  // vip level
                            "vipName": "VIP0",  // vip name
                            "makerFeeRate": 0.002000,  // Maker fee rate
                            "takerFeeRate": 0.001000  // Taker fee rate
                        }
                    }
        title: Response
        language: json
---
