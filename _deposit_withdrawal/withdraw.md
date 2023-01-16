---
title: Withdraw
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
                Currency name, which can be obtained from the 'Get the supported currencies for deposit or withdrawal' interface
        ranges:
    -
        name: 'chain'
        type: string
        mandatory: true
        default:
        description: >-
                The name of the transfer network, which can be obtained from the interface of 'Get the supported currencies for deposit or withdrawal' interface
        ranges:
    -
        name: 'amount'
        type: number
        mandatory: true
        default:
        description: >-
                Withdrawal amount, including handling fee
        ranges: 
    -
        name: 'address'
        type: string
        mandatory: true
        default:
        description: >-
                Withdrawal address
        ranges: 
    -
        name: 'memo'
        type: String
        mandatory: false
        default:
        description: >-
                memo，For EOS similar chains that require memo must be transferred
        ranges:
content_markdown: |-
                Note: The parameters are placed in the body in the form of json
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
                        "id": 100    //Long  Withdrawal record id, used for querying withdrawal history later
                    }
                }
        title: Response
        language: json    
---
