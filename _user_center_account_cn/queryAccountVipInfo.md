---
title: 查询账户手续费
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
                            "vipLevel": 0,  // vip等级
                            "vipName": "VIP0",  // vip名称
                            "makerFeeRate": 0.002000,  // Maker手续费
                            "takerFeeRate": 0.001000  // Taker手续费
                        }
                    }
        title: Response
        language: json
---
