---
title: 获取杠杆单个资产
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
    description: 市场  例如：BTC_USDT
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
                      "btcLoanAmount": 0,               //折算BTC借贷资产
                      "btcNetAmount": 0,                //折算BTD总资产
                      "symbol": "string",               //市场
                      "symbolId": 0,                    //市场 id
                      "usdtLoanAmount": 0,              //折算USDT借贷资产
                      "usdtNetAmount": 0                //折算USDT总资产
                      "base":{
                         "availableAmount": "string",   //可用数量
                         "capitalAmount": "string",     //本金数量
                         "currency": "string",          //币种
                         "currencyId": 0,               //币种 id
                         "frozenAmount": "string",      //冻结数量
                         "interestAmount": "string",    //未还利息数量
                         "loanAmount": "string",        //借款数量
                         "totalAmount": "string",       //总数量
                         "updatedTime": 0               //更新时间
                      },
                      "quote":{
                          "availableAmount": "string",  //可用数量
                          "capitalAmount": "string",    //本金数量
                          "currency": "string",         //币种
                          "currencyId": 0,              //币种 id
                          "frozenAmount": "string",     //冻结数量
                          "interestAmount": "string",   //未还利息数量
                          "loanAmount": "string",       //借款数量
                          "totalAmount": "string",      //总数量
                          "updatedTime": 0              //更新时间
                      }
                  }
                }
        title: Response
        language: json
---
