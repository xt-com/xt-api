---
title: 余额变动
position_number: 5
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
    param

    语法: balance

    示例: balance
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: "{\r\n    \"topic\": \"balance\", \r\n    \"event\": \"balance\", \r\n    \"data\": {\r\n        \"t\": 1656043204763,   // time 发⽣时间\r\n        \"c\": \"btc\",           // currency 币种\r\n        \"b\": \"123\",           // balance 可⽤资产\r\n        \"z\": \"SPOT\"           // bizType 业务类型[SPOT,LEVER]\r\n    }\r\n}"
        title: 推送
        language: json
---
