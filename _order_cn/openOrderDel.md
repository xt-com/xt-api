---
title: 当前挂单撤销
position_number: 8
type: delete
description: /sapi/v4/order/open-order
parameters:
    -
        name: symbol
        type: string
        mandatory: false
        default:
        description: 交易对，不传代表所有
        ranges:
    -
        name: bizType
        type: string
        mandatory: false
        default:
        description: "业务类型 \_SPOT-现货, LEVER-杠杆, FINANCE-理财, FUTURES_U-合约U本位, FUTURES_C-合约币本位, FUTURES_ALL-全币种合约"
        ranges:
    -
        name: side
        type: string
        mandatory: false
        default:
        description: BUY-买,SELL-卖
        ranges:
content_markdown:
left_code_blocks:
    -
        code_block:
        title: Java
        language: java
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"string\",\r\n  \"ma\": [\r\n    {}\r\n  ],\r\n  \"result\": {}\r\n}"
        title: Response
        language: json
---
