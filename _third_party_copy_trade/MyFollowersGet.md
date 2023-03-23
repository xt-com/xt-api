---
title: My followers
position_number: 5
type: get
description: /public/futures/user/v1/public/copy-trade/leader-follower-page
parameters:
    -
        name: leaderAccountId
        type: number
        mandatory: true
        default:
        description: leader account id
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
            public String myFollowersGet(){


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
                                    "days": 0,                
                                    "followMarginU": 0,       
                                    "followProfitRate": 0,    
                                    "followProfitU": 0,      
                                    "followerName": "",      
                                    "id": 0                    
                                 }] 
                      }
                    }
        title: Response
        language: json
---
