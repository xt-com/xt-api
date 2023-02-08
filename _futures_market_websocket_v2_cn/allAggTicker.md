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

    语法: aggTickers
    
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
                "topic": "aggTickers", 
                "event": "aggTickers", 
                "data": [ ]  // 同 aggTicker
            }
        title: Response
        language: json
---
