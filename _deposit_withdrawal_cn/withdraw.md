---
title: 提现
position_number: 4
type: post
description: /v4/withdraw
parameters:
    -
        name: 'currency'
        type: string
        mandatory: true
        default:
        description: >- 
                币种名称，可从'获取XT可充提的币种'接口中获取
        ranges:
    -
        name: 'chain'
        type: string
        mandatory: true
        default:
        description: >-
                转账网络名称，可从'获取XT可充提的币种'接口中获取
        ranges:
    -
        name: 'amount'
        type: number
        mandatory: true
        default:
        description: >-
                提现金额，包含手续费部分
        ranges: 
    -
        name: 'address'
        type: string
        mandatory: true
        default:
        description: >-
                提现地址
        ranges: 
    -
        name: 'memo'
        type: String
        mandatory: false
        default:
        description: >-
                memo，对于EOS类似的需要memo的链必传
        ranges:
content_markdown: |-
                注意：参数以json形式放在body中
                #### **限流规则**

                1/s/apikey
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
                    "currency":"zb",
                    "chain":"Ethereum",
                    "amount":1000,
                    "address":"0xfa3abfa50eb2006f5be7831658b17aca240d8526",
                    "memo":""
                }
        title: Request
        language: json
    -
        code_block: |-
                {
                    "rc": 0,
                    "mc": "SUCCESS",
                    "ma": [],
                    "result": {      
                        "id": 100    //Long  提现记录id，用于后期查询提现历史记录
                    }
                }
        title: Response
        language: json    
---
