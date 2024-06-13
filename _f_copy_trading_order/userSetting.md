---
title: Get user setting
position_number: 9
type: get
description: /future/copytrade/user/v1/copy-trade/user-settings
parameters:

content_markdown: >-
    #### **Limit Flow Rules**

    10/s/apikey
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
                    "returnCode": 0,
                    "msgInfo": "success",
                    "error": null,
                    "result": {
                            "id": 0, // id
                            "intro": "string", // intro
                            "followCapitalMin": 0, // margin
                            "labelIds": 0, // label id
                            "label": [ // labels
                             {
                                "id": 0, // id
                                "label": "string", // remark
                              }
                            ], 
                            "autoUnfollow": Boolean, // is auto cancel follow
                            "displayEquity": Boolean, // is display total amount
                            "displayPosition": Boolean, // is display position
                            "openLeader": Boolean // is open lead trading
                     }
                    }
        title: Response
        language: json
---
