---
title: 查询可以转换的小额资产
position_number: 1
type: get
description: /balance/convert/evaluate
parameters:
    
content_markdown: >-
    #### **限流规则**

    1/s/apikey
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
                  "mc": "string",
                  "ma": [
                    {}
                  ],
                  "result": {
                                "details": [
                                            {
                                                "currency": "ADA",             // 币种名称
                                                "amount": "6.21",              // 数量
                                                "toBtc": "0.00016848",         // BTC估值
                                                "convertAmount": "0.01777302", // 转换估值（未扣除手续费）
                                                "convertFee": "0.00035546"     // 转换估值手续费
                                            }
                                ],
                                "convertCurrency": "XT",                       // 转换币种
                                "totalToBtc": "0.00016848",                    // BTC总估值
                                "totalConvertAmount": "0.01777302",            // 转换总估值（未扣除手续费）
                                "totalConvertFee": "0.02"                      // 转换总估值手续费
                  }
                }
        title: Response
        language: json
---
