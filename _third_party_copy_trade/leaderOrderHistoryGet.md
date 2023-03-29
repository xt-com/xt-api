---
title: Leader order history
position_number: 7
type: get
description: /public/futures/trade/v1/public/copy-trade/leader-order-history
parameters:
    -
        name: leaderAccountId
        type: number
        mandatory: true
        default:
        description: leader account id
        ranges:
    -
        name: symbol
        type: String
        mandatory: false
        default:
        description: symbol. If no symbol are passed, all transaction pairs are queried
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
            public String leaderOrderHistoryGet(){


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
                                    "closePrice": 0,      
                                    "closeSize":0         
                                    "closeTime": 0,       
                                    "id": 0,            
                                    "openLeverage": 0,    
                                    "openMargin": 0,      
                                    "openPrice": 0,       
                                    "openSize": 0,        
                                    "openTime": 0,        
                                    "orderId": 0,         
                                    "positionSide": "",   //side:LONG;SHORT
                                    "positionType": "",   //type:CROSSED;ISOLATED
                                    "profitRate": 0,      
                                    "realizedPnl": 0,     
                                    "symbolName": "",     
                                    "trackNo": 0,         
                                 }] 
                      }
                    }
        title: Response
        language: json
---
