---
title: 获取k线数据
position_number: 4
type: get
split: -------------------------------------
description: /v4/public/kline
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default:
        description: 交易对  eg:btc_usdt
        ranges:
    -
        name: interval
        type: string
        mandatory: true
        default:
        description: |-
            K线类型 ,1m;3m;5m;15m;30m;1h;2h;4h;6h;8h;12h;1d;3d;1w;1M
            eg:1m
        ranges: '[1m;3m;5m;15m;30m;1h;2h;4h;6h;8h;12h;1d;3d;1w;1M]'
    -
        name: startTime
        type: number
        mandatory: false
        default:
        description: 起始时间戳
        ranges:
    -
        name: endTime
        type: number
        mandatory: false
        default:
        description: 结束时间戳
        ranges:
    -
        name: limit
        type: number
        mandatory: false
        default: '100'
        description: 限制数量
        ranges: 1~1000
content_markdown: >-
    #### **限流规则**

    100/s/ip


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
                  "mc": "string",
                  "ma": [
                    {}
                  ],
                  "result": [
                    {
                      "t": 1662601014832,   //开盘时间(time)
                      "o": "30000",         //开盘价(open)
                      "c": "32000",         //收盘价(close)
                      "h": "35000",         //最高价(high)
                      "l": "25000",         //最低价(low)
                      "q": "512",           //成交量(quantity)
                      "v": "15360000"       //成交额(volume)
                    }
                  ]
                }
        title: Response
        language: json
---
