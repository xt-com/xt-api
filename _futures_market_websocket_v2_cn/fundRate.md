---
title: 资金费率
position_number: 18
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

    语法: fundRate@\{symbol\}

    示例: fundRate@btc\_usdt
    
    速率: 1000ms
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
                {
                    "topic": "fundRate", 
                    "event": "fundRate@btc_usdt", 
                    "data": {
                        "s":"btc_usdt", //交易对
                        "r":"0.01",    // 资金费率
                        "t":123124124   //时间戳
                    }
                }
        title: Response
        language: json
---
