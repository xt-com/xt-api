---
title: Get leader account configuration
position_number: 20
type: get
description: /v1/copy-trade-account/public/copy-trade/leader-detail
parameters:
    -
        name: accountId
        type: number
        mandatory: true
        default:
        description: leader account id
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
                    "ma": [
                      {}
                    ],
                    "mc": "string",
                    "rc": 0,
                    "result": {
                      "avatar": "string",        //avatar
                      "currentFollowNumber": 0,  //current number of copy traders
                      "displayEquity": true,     //display total assets or not
                      "displayQuantity": true,   //display the purchase quantity or not
                      "fansNum": 0,             //fans number
                      "followNumber": 0,        //follow number
                      "label": [                //label
                        "string"
                      ],
                      "leadDays": 0,            //time to become a lead
                      "leaderIntro": "string",  //leader introduction
                      "level": 0,               //current level
                      "levelId": 0,             //current level id
                      "levelName": "string",    //current level name
                      "maxFollowerSize": 0,     //maximum number of copy traders
                      "nickName": "string",     //nickname
                      "profitRate": 0,          //profit sharing ratio.
                      "totalRights": 0          //total assets
                    }
                  }
        title: Response
        language: json
---
