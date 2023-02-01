---
title: Get currency information
position_number: 1
type: get
description: /v4/public/currencies
parameters:
    -
        name:
        type: string
        mandatory: false
        default:
        description:
        ranges:
content_markdown:
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
              "result": [
                {
                   "id": 11,                //currency id
                  "currency": "usdt",       //currency name
                  "fullName": "usdt",       //currency full name
                  "logo": null,             //currency logo
                  "cmcLink": null,          //cmc link
                  "weight": 100,    
                  "maxPrecision": 6,  
                  "depositStatus": 1,       //Recharge status(0 close 1 open)
                  "withdrawStatus": 1,      //Withdrawal status(0 close 1 open)
                  "convertEnabled": 1,      //Small asset exchange switch[0=close;1=open]
                  "transferEnabled": 1      //swipe switch[0=close;1=open]
                }
              ]
            }
        title: Response
        language: json
---

