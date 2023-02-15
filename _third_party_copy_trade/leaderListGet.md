---
title: Leader List 
position_number: 1
type: get
description: /public/futures/user/v1/public/copy-trade/third/leader-list
parameters:
    -
        name: appId
        type: String
        mandatory: true
        default:
        description: app id
        ranges:
    -
        name: id
        type: number
        mandatory: false
        default:
        description: page id
        ranges:
    - 
        name: direction
        type: String
        mandatory: true
        default: NEXT
        description: page direction
        ranges: NEXT/PREV
    -
        name: limit
        type: number
        mandatory: true
        default: 10
        description: page limit
        ranges:
content_markdown:
left_code_blocks:
    -
        code_block: |-
            public String leadersGet(){


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
                      "rc": 0,
                      "mc": "string",
                      "ma": [
                        {}
                      ],
                      "result": {
                          "hasPrev": false,   //has prev page
                          "hasNext": false,   //has next page
                          "items": [{
                                  "accountId": 1920361759199,       //leader account id
                                  "nickName": "qing",       //leader nick name
                                  "recentMonthWinRate": "0.3333",   // recent month win rate
                                  "followerCount": "2",             //follower count
                                  "maxFollowerSize": 6,             //max follower size
                                  "avatar": ""                     //avatar
                                 }] 
                      }
                    }
        title: Response
        language: json
---
