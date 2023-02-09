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

    语法: fund_rate@\{symbol\}

    示例: fund_rate@btc\_usdt
    
    速率: 60s
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
                {
                    "topic": "fund_rate", 
                    "event": "fund_rate@btc_usdt", 
                    "data": {
                        "s":"btc_usdt", //交易对
                        "r":"0.01",    // 资金费率
                        "t":123124124   //时间戳
                    }
                }
        title: Response
        language: json
---
