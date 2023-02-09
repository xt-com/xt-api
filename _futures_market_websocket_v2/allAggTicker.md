---
title: All agg ticker
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
    **request**

    format: agg_tickers
    
    rate: 1000ms, only when there are changes
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
                    "data": [ ]  // refer to agg_ticker(real-time push)
                }
        title: Response
        language: json
---
