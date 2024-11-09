---
title: Get my lead trades
position_number: 21
type: get
description: /v1/copy-trade-account/copy-trade/my-leaders
parameters:
    -
        name: type
        type: number
        mandatory: true
        default:
        description: the type of lead trade
        ranges: <a href="#leaderTypeCn">leader type</a>, 1：current lead trades; 2：historical lead trades
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
                           "accountId": 0,        //account id
                           "avatar": "string",    //avatar
                           "followMargin": 0,     //follow amount
                           "followProfit": 0,     //follow profit
                           "id": 0,               //the id used for pagination query
                           "leaderName": "string" //nickname of lead trader
                         }
                       ]
                     }
                   }
        title: Response
        language: json
---
