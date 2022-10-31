---
title: 所有ticker(有变化才推)
position_number: 12
type:
description: |+

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
