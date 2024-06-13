---
title: Get my history leaders
position_number: 18
type: get
description: /future/copytrade/user/v1/copy-trade/follower-leaders-page
parameters:
    -
        name: type
        type: number
        mandatory: false
        default:
        description: type(1:current follow,2:history follow)
        ranges: 1,2
    -
        name: direction
        type: string
        mandatory: false
        default:
        description: direction
        ranges: NEXT, PREV
    -
        name: limit
        type: number
        mandatory: false
        default:
        description: page size
        ranges: 10
    -
        name: id
        type: number
        mandatory: false
        default:
        description: id
        ranges:
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
                        "returnCode": 0,
                        "msgInfo": "success",
                        "error": null,
                        "result": {
                               "hasPrev": false,
                               "hasNext": false,
                                "items": [
                        {
                                "leaderName": "string", // leader nickname
                                "avatar": "string", // avatar
                                "accountId": 0, // leader accountId
                                "id": 0, // id
                                "level": 0, // level
                                "levelName": "string", // level name
                                "followMarginU": 0, // total follow margin
                                "followProfitU": 0, // total follow profit
                                "cancel": Boolean // status：0 following，1canceled
                        }
                        ]
                        }
        title: Response
        language: json
---
