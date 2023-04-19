---
title: Change of entrust
position_number: 6
display: 0
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
    param

    format: trigger

    eg: trigger
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
            {
                "topic": "trigger", 
                "event": "trigger", 
                "data": {
                    "s": "btc_usdt",                // symbol
                    "t": 1656043204763,             // time happened time
                    "i": "6216559590087220004",     // triggerId
                    "st": "NEW"                     // state
                }
            }
        title: push
        language: json
---
