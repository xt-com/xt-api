---
title: Get single 
position_number: 1
type: get
description: /v4/order/{orderId}
parameters:
    -
        name: orderId
        type: number
        mandatory: true
        default:
        description: 
        ranges:
content_markdown: >-
    #### **Limit Flow Rules**

    100/s/apikey
left_code_blocks:
    -
        code_block: |-
            public String orderGet(){


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
                        "symbol": "BTC_USDT",   
                        "orderId": "6216559590087220004",  
                        "clientOrderId": "16559590087220001",  
                        "baseCurrency": "string",   
                        "quoteCurrency": "string",   
                        "side": "BUY",                          //order side:BUY,SELL
                        "type": "LIMIT",                        //order type  LIMIT,MARKET 
                        "timeInForce": "GTC",                   //effective way:GTC,IOC,FOK,GTX
                        "price": "40000",   
                        "origQty": "2",                         //original quantity
                        "origQuoteQty": "48000",                //original amount
                        "executedQty": "1.2",                   //executed quantity
                        "leavingQty": "string",                 //The quantity to be executed (if the order is cancelled or the order is rejected, the value is 0)
                        "tradeBase": "2",                       //transaction quantity
                        "tradeQuote": "48000",                  //transaction amount
                        "avgPrice": "42350",                    //average transaction price
                        "fee": "string",                        //handling fee
                        "feeCurrency": "string",   
                        "state": "NEW",                         //order stat NEW,PARTIALLY_FILLED,FILLED,CANCELED,REJECTED,EXPIRED
                        "time": 1655958915583,                  //order time
                        "updatedTime": 1655958915583  
                      }
                    }
        title: Response
        language: json
---
