---
title: Get complete ticker
position_number: 6
type: get
description: /v4/public/ticker/full
parameters:
    -
        name: symbol
        type: string
        mandatory: false
        default:
        description: trading pair  eg:btc_usdt
        ranges:
    -
        name: symbols
        type: array
        mandatory: false
        default:
        description: 'Collection of trading pairs. Priority is higher than symbol. eg: btc_usdt,eth_usdt'
        ranges:
content_markdown:
left_code_blocks:
    -
        code_block: |-
            public String full(){


            }
        title: Java
        language: java
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"SUCCESS\",\r\n  \"ma\": [],\r\n  \"result\": [\r\n    {\r\n      \"s\": \"btc_usdt\",     //symbol\r\n      \"t\": 1661856036925,  //time\r\n      \"cv\": \"0.0000\",      //change value\r\n      \"cr\": \"0.00\",        //change rate\r\n      \"o\": \"9000.0000\",    //open price\r\n      \"l\": \"9000.0000\",    //low\r\n      \"h\": \"9000.0000\",    //high\r\n      \"c\": \"9000.0000\",    //close price\r\n      \"q\": \"0.0136\",       //quantity\r\n      \"v\": \"122.9940\",     //volume\r\n      \"ap\": null,          //asks price(sell one price)\r\n      \"aq\": null,          //asks qty(sell one quantity)\r\n      \"bp\": null,           //bids price(buy one price)\r\n      \"bq\": null           //bids qty(buy one quantity)\r\n    }\r\n  ]\r\n}"
        title: Response
        language: json
---
