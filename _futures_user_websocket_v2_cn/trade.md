---
title: 用户成交
position_number: 9
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

    语法: trade@\{accountId\}
    
    示例: trade@123456
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
            {
                "topic": "trade", 
                "event": "trade@123456", 
                "data": {
                        "orderId":"12312312",  // 订单id
                        "price":"34244",  // 价格
                        "quantity":"123", // 数量
                        "marginUnfrozen":"123", // 保证金解冻数量
                        "timestamp":1731231231 // 时间戳
                   }
            }
        title: Response
        language: json
---
