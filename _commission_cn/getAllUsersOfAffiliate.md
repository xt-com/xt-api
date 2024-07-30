---
title: 查询所有下级代理及子代理（含直客）
position_number: 1
type: get
description: /v4/referal/invite/users
parameters:
    -
        name: startTime
        type: number
        mandatory: false
        default:
        description: 开始时间
        ranges:
    -
        name: endTime
        type: number
        mandatory: false
        default:
        description: 结束时间
        ranges:
    -
        name: fromId
        type: number
        mandatory: false
        default:
        description: 分页查询开始id
        ranges:
    -
        name: direction
        type: string
        mandatory: false
        default: NEXT
        description: 上一页/下一页
        ranges: PREV, NEXT
    -
        name: limit
        type: int
        mandatory: false
        default: 10
        description: 每页数量，最大100
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
                        "regTime": 1721962593000, //注册时间
                        "role": "PARTNER",        //用户角色: CHANNEL/PARTNER/DIRECTOR
                        "userId": 123456789       //用户id
                        }
                    ]
                  }
                }
        title: Response
        language: json
---
