---
title: 所有agg ticker
position_number: 13
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

    语法: agg_tickers
    
    速率: 1000ms，(只推送有变化部分)
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
            {
                "topic": "agg_tickers", 
                "event": "agg_tickers", 
                "data": [ ]  // 同 agg_ticker
            }
        title: Response
        language: json
---
