---
title: 所有ticker
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

    语法: tickers
    
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
                "topic": "tickers", 
                "event": "tickers", 
                "data": [ ]  // 同 ticker
            }
        title: Response
        language: json
---
