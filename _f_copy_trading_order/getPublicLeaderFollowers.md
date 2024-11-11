---
title: Public get leader's followers
position_number: 28
type: get
description: /future/copytrade/public/user/v1/public/copy-trade/leader-follower-page
parameters:
    -
        name: type
        type: number
        mandatory: false
        default:
        description: type(1:detail,2:total)
        ranges: 1,2
    -
        name: symbol
        type: string
        mandatory: false
        default:
        description: symbol
        ranges:
    -
        name: leaderAccountId
        type: number
        mandatory: true
        default:
        description: leader accountId
        ranges:
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

    2/s/ip
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
                        "result": [
                                {
                                "accountId": 0, // leader accountId
                                "followerName": "string", // follower nickname
                                "avatar": "string", // avatar
                                "id": 0, // id
                                "pageId": 0, // pageId
                                "followMarginU": 0, // follower total margin
                                "followProfitU": 0, // follower total profit
                                "followProfitRate": 0, // follower profit rate
                                "days": 0 // days
                                }
                        ]
                        }
        title: Response
        language: json
---
