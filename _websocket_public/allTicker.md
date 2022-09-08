---
title: All ticker(Push per 3 seconds)
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
        code_block: "{\r\n    \"topic\": \"tickers\", \r\n    \"event\": \"tickers\", \r\n    \"data\": [ ]  // refer to ticker(real-time push)\r\n}"
        title: Response
        language: json
---
