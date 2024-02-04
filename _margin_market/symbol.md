---
title: Get symbol list
position_number: 1
type: get
split: -------------------------------------
description: /v4/public/lever/symbol
parameters:

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
                  "ma": [],
                  "result": [{
                       "symbolId": 123,          //Spot symbol id
                       "symbol": "btc_usdt",     //Spot symbol
                       "buyCurrencyId": 123,     //Buy currency id
                       "buyCurrency": "btc",     //Buy currency
                       "sellCurrencyId": 234,    //Sell currency id
                       "sellCurrency": "usdt",   //Sell currency
                       "maxLoanAmountBuy": "",   //The maximum amount of buy currency that can be borrowed
                       "maxLoanAmountSell": "",  //The maximum amount of sell currency that can be borrowed
                       "maxLeverage": "",        //Maximum loan multiple
                       "dailyInterestRate": "",  //Daily interest rate
                       "liquidationRate": "",    //Liquidation risk rate
                       "tipsRate": ""            //Reminder coefficient
                  }]
                }
        title: Response
        language: json
---
