---
title: 获取最优挂单ticker
position_number: 9
type: get
description: /v4/public/ticker/book
parameters:
    -
        name: symbol
        type: string
        mandatory: false
        default:
        description: 交易对  eg:btc_usdt
        ranges:
    -
        name: symbols
        type: array
        mandatory: false
        default:
        description: '交易对集合，优先级高于symbol。 eg: btc_usdt,eth_usdt'
        ranges:
    -
        name: tags
        type: string
        mandatory: false
        default:
        description: '标签集合,逗号分割，当前仅支持 spot'
        ranges:
content_markdown: >-
    #### **限流规则**


    1\.单个交易对：100/s/ip


    2\.多个交易对：10/s/ip


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
                  "result": [
                    {
                      "s": "btc_usdt",      //交易对(symbol)
                      "t": 1661856036925,   //最后更新时间(last updated time) 
                      "ap": null,           //asks price(卖一价)
                      "aq": null,           //asks qty(卖一量)
                      "bp": null,           //bids price(买一价)
                      "bq": null            //bids qty(买一量)
                    }
                  ]
                }
        title: Response
        language: json
---
