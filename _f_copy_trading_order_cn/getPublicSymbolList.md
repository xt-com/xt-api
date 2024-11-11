---
title: 获取跟单合约所有交易对列表
position_number: 19
type: get
description: /future/copytrade/public/user/v1/public/copy-trade/symbol-list
parameters:
    
content_markdown: >-
    #### **限流规则**

    2/s/ip
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
        code_block: |-
                        {
                        "returnCode": 0,
                        "msgInfo": "success",
                        "error": null,
                        "result": [string,string] // 交易对名称
                        }
        title: Response
        language: json
---
