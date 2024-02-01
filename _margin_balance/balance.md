---
title: Get balance by symbol
position_number: 1
type: get
split: -------------------------------------
description: /v4/lever/balance
parameters:
  -
    name: symbol
    type: string
    mandatory: true
    default:
    description: symbol  eg:BTC_USDT
    ranges:
  
content_markdown: 

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
                  "rc": 0,
                  "mc": "SUCCESS",
                  "ma": [{}],
                  "result": {
                      "btcLoanAmount": 0,               //convert BTC loan assets
                      "btcNetAmount": 0,                //Convert BTC net assets
                      "symbol": "string",               //symbol
                      "symbolId": 0,                    //symbol id
                      "usdtLoanAmount": 0,              //convert USDT loan assets
                      "usdtNetAmount": 0                //convert USDT net assets
                      "base":{
                         "availableAmount": "string",   //available amount
                         "capitalAmount": "string",     //capital amount
                         "currency": "string",          //currency
                         "currencyId": 0,               //currency id
                         "frozenAmount": "string",      //frozen amount
                         "interestAmount": "string",    //interest amount outstanding
                         "loanAmount": "string",        //loan amount
                         "totalAmount": "string",       //total amount
                         "updatedTime": 0               //update time
                      },
                      "quote":{
                          "availableAmount": "string",  //available amount
                          "capitalAmount": "string",    //capital amount
                          "currency": "string",         //currency
                          "currencyId": 0,              //currency id
                          "frozenAmount": "string",     //frozen amount
                          "interestAmount": "string",   //interest amount outstanding
                          "loanAmount": "string",       //loan amount
                          "totalAmount": "string",      //total amount
                          "updatedTime": 0              //update time
                      }
                  }
                }
        title: Response
        language: json
---
