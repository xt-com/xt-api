---
title: Leader detail 
position_number: 4
type: get
description: /public/futures/user/v1/public/copy-trade/leader-detail-v2
parameters:
    -
        name: accountId
        type: number
        mandatory: true
        default:
        description: leader account id
        ranges:
content_markdown:
left_code_blocks:
    -
        code_block: |-
            public String leaderDetailGet(){


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
                           "avatar": "",                
                           "currentFollowNumber": 0,    
                           "displayEquity": false,      
                           "displayPosition": false,    
                           "followNumber": 0,           
                           "label": [],                 
                           "leadDays": 0,               //Check-in time (days)
                           "level": 0,                  
                           "levelName": "",             
                           "maxFollowerSize": 0,        
                           "nickName": "",              
                           "profitRate": 0,             
                           "totalRights": 0             
                      }
                    }
        title: Response
        language: json
---
