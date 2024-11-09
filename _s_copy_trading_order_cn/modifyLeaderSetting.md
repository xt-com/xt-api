---
title: 修改带单设置
position_number: 13
type: post
description: /v1/copy-trade-account/copy-trade/leader-settings
parameters:
    -
        name: leaderIntro
        type: string
        mandatory: false
        default:
        description: 带单简介
        ranges:
    -
        name: labelIds
        type: string
        mandatory: false
        default:
        description: 标签id,逗号分割;例:1,2,3,4
        ranges:
    -
        name: displayEquity
        type: bool
        mandatory: false
        default:
        description: 是否展示总资产
        ranges:
    -
        name: displayQuantity
        type: bool
        mandatory: false
        default:
        description: 是否展示买入数量
        ranges:
    -
        name: symbols
        type: string
        mandatory: true
        default:
        description: 带单市场，逗号分割；例：btc_usdt,eth_usdt
        ranges:
    -
        name: openLeader
        type: bool
        mandatory: false
        default:
        description: 是否开启现货带单
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
