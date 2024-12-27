---
title: Query Convertible Small Assets
position_number: 1
type: get
description: /balance/convert/evaluate
parameters:
    
content_markdown: >-
    #### **Limit Flow Rules**

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
                                                "currency": "ADA",             // currency
                                                "amount": "6.21",              // amount
                                                "toBtc": "0.00016848",         // BTC Valuation
                                                "convertAmount": "0.01777302", // Conversion Valuation (Before Fees Deduction)
                                                "convertFee": "0.00035546"     // Conversion Valuation Fee
                                            }
                                ],
                                "convertCurrency": "XT",                       // Converted Currency Received
                                "totalToBtc": "0.00016848",                    // Total BTC Valuation
                                "totalConvertAmount": "0.01777302",            // Total Conversion Valuation (Before Fees Deduction)
                                "totalConvertFee": "0.02"                      // Total Conversion Valuation Fee
                  }
                }
        title: Response
        language: json
---
