---
title: My leaders
position_number: 6
type: get
description: /futures/user/v1/copy-trade/follower-leaders-page
parameters:
    -
        name: type
        type: number
        mandatory: true
        default:
        description: Query type. 1：current Follow,2：historical follow
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
        description: page size
        ranges:
content_markdown:
left_code_blocks:
    -
        code_block: |-
            public String myLeadersGet(){


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
                          "hasPrev": false,   //prev
                          "hasNext": false,   //next
                          "items": [{
                                     "accountId": 0,           
                                     "avatar": "",             
                                     "cancel": false,          
                                     "followMarginU": 0,       
                                     "followProfitU": 0,       
                                     "id": 0,
                                     "leaderName": "",         
                                     "level": 0,               
                                     "levelName": ""           
                                 }] 
                      }
                    }
        title: Response
        language: json
---
