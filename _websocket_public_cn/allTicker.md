---
title: 所有ticker(每1秒推⼀次)
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
        code_block: "{\r\n    \"topic\": \"tickers\", \r\n    \"event\": \"tickers\", \r\n    \"data\": [ ]  // 同 ticker\r\n}"
        title: Response
        language: json
---
