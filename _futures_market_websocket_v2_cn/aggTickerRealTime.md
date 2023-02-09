---
title: agg ticker
position_number: 12
type:
description: 

parameters:
    -
        name:
        type: string
        mandatory: false
        default:
        description:
        ranges:
content_markdown: |-
    **请求**

    语法: agg_ticker@\{symbol\}

    示例: agg_ticker@btc\_usdt
    
    速率: 1000ms
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
                {
                    "topic": "agg_ticker", 
                    "event": "agg_ticker@btc_usdt", 
                    "data": {
                        "s":"btc_index", //交易对
                        "o":"49000",     // open 开盘价
                        "c":"50000",    //cloes 收盘价
                        "h":"0.1",      //high 最高价
                        "l":"0.1",       //low 最低价
                        "a":"0.1",      //amount 成交量
                        "v":"0.1",       //volume 成交额
                        "ch":"0.21",   //change 涨跌幅

                        "i":"0.21" ,   //index 指数价格

                        "m":"0.21",   //mark 标记价格

                        "bp":"0.21",   //bid price 买一价格

                        "ap":"0.21" ,  //ask price 卖一价格

                        "t":123124124   //时间戳
                    }
                }
        title: Response
        language: json
---
