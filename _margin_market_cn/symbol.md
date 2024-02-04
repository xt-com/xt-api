---
title: 获取交易对列表
position_number: 1
type: get
split: '-------------------------------------'
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
                        "symbolId": 123,          //现货市场ID
                        "symbol": "btc_usdt",     //现货市场名称
                        "buyCurrencyId": 123,     //买方币种ID
                        "buyCurrency": "btc",     //买方币种名称
                        "sellCurrencyId": 234,    //卖方币种ID
                        "sellCurrency": "usdt",   //卖房币种名称
                        "maxLoanAmountBuy": "",   //买方币种最大可借数量
                        "maxLoanAmountSell": "",  //卖方币种最大可借数量
                        "maxLeverage": "",        //最大借贷倍数
                        "dailyInterestRate": "",  //日利率
                        "liquidationRate": "",    //爆仓风险率
                        "tipsRate": ""            //提醒系数
                   }]
                }           
        title: Response
        language: json
---
