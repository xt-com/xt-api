---
title: Modify leader setting
position_number: 13
type: post
description: /v1/copy-trade-account/copy-trade/leader-settings
parameters:
    -
        name: leaderIntro
        type: string
        mandatory: false
        default:
        description: Leader introduction
        ranges:
    -
        name: labelIds
        type: string
        mandatory: false
        default:
        description: Label ids, separated by commas, e.g. 1,2,3,4
        ranges:
    -
        name: displayEquity
        type: bool
        mandatory: false
        default:
        description: Display total assets or not
        ranges:
    -
        name: displayQuantity
        type: bool
        mandatory: false
        default:
        description: Display buy quantity or not
        ranges:
    -
        name: symbols
        type: string
        mandatory: true
        default:
        description: Selected copy trade symbols, e.g. btc_usdt,eth_usdt
        ranges:
    -
        name: openLeader
        type: bool
        mandatory: false
        default:
        description: Open leader or not
        ranges:
content_markdown: >-
    #### **Limit Flow Rules**

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
                     "ma": [
                       {}
                     ],
                     "mc": "string",
                     "rc": 0,
                     "result": true
                   }
        title: Response
        language: json
---
