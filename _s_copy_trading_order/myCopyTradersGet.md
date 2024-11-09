---
title: Get my copy trader list
position_number: 30
type: get
description: /v1/copy-trade-account/copy-trade/leader-followers
parameters:
    -
        name: direction
        type: string
        mandatory: false
        default: NEXT
        description: query direction
        ranges: PREV-previous page,NEXT-next page
    -
        name: limit
        type: number
        mandatory: false
        default: 10
        description:  number of pages
        ranges: 1-100
    -
        name: id
        type: object
        mandatory: false
        default:
        description: start ID，e.g. 6216559590087220004
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
                       "hasNext": true,
                       "hasPrev": true,
                       "items": [
                         {
                           "accountId": 0,            //copy trader account id
                           "avatar": "string",        //avatar of copy trader
                           "days": 0,                 //follow days
                           "followMargin": 0,         //follow margin
                           "followProfit": 0,         //follow profit
                           "followProfitRate": 0,     //follow profit rate
                           "followerName": "string",  //name of copy trader
                           "id": 0,                   //id
                           "pageId": 0                //the id used for pagination query
                         }
                       ]
                     }
                   }
        title: Response
        language: json
---
