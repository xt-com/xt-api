---
title: 获取24h统计ticker
position_number: 10
type: get
description: /v4/public/ticker/24h
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
                      "s": "btc_usdt",     //交易对(symbol)
                      "t": 1661856036925,  //时间(time) 
                      "cv": "0.0000",      //价格变动(change value)
                      "cr": "0.00",        //价格变动百分比(change rate)
                      "o": "9000.0000",    //最早一笔(open)
                      "l": "9000.0000",    //最低(low)
                      "h": "9000.0000",    //最高(high)
                      "c": "9000.0000",    //最后一笔(close)
                      "q": "0.0136",       //成交量(quantity)
                      "v": "122.9940"      //成交额(volume)
                    }
                  ]
                }
        title: Response
        language: json
---
