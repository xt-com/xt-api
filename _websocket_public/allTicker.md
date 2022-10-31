---
title: All ticker(Push for changes)
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
    **request**

    format: tickers
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
                    "data": [ ]  // refer to ticker(real-time push)
                }
        title: Response
        language: json
---
