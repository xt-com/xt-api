---
title: Get All Users of Affiliate
position_number: 1
type: get
description: /v4/referal/invite/users
parameters:
    -
        name: startTime
        type: number
        mandatory: false
        default:
        description: start time
        ranges:
    -
        name: endTime
        type: number
        mandatory: false
        default:
        description: end time
        ranges:
    -
        name: fromId
        type: number
        mandatory: false
        default:
        description: Starting ID
        ranges:
    -
        name: direction
        type: string
        mandatory: false
        default: NEXT
        description: query direction
        ranges: PREV, NEXT
    -
        name: limit
        type: int
        mandatory: false
        default: 10
        description: Limit number, max 100
        ranges: 1<=limit<=100
content_markdown: >-

left_code_blocks:
    -
        code_block: |-
            public String getAllUsersOfAffiliate(){


            }
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
                  "ma": [],
                  "mc": "SUCCESS",
                  "rc": 0,
                  "result": {
                    "hasNext": true,
                    "hasPrev": true,
                    "items": [
                        {
                        "id": 123,
                        "regTime": 1721962593000, //Registration time
                        "role": "PARTNER",        //User roles: CHANNEL/PARTNER/DIRECTOR
                        "userId": 123456789       //User ID
                        }
                    ]
                  }
                }
        title: Response
        language: json
---
