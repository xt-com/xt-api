---
title: Get unrealized profit sharing detail
position_number: 17
type: get
description: /v1/copy-trade-balance/copy-trade/share-profit/expected-detail
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
                           "amount": 0,        //profit sharing amount.
                           "avatar": "string", //avatar of copy trader.
                           "id": 0,            //the id used for pagination query.
                           "name": "string"    //nickname of copy trader.
                         }
                       ]
                     }
                   }
        title: Response
        language: json
---
