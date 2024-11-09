---
title: 获取带单设置
position_number: 12
type: get
description: /v1/copy-trade-account/copy-trade/leader-settings
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
                     "ma": [
                       {}
                     ],
                     "mc": "string",
                     "rc": 0,
                     "result": {
                       "displayEquity": true,      //是否展示总资产
                       "displayQuantity": true,    //是否展示买入数量
                       "labelIds": "string",       //带单员已选标签id,逗号分割;例:1,2,3,4
                       "leaderIntro": "string",    //带单简介
                       "leaderSymbol": [           //带单员已选市场
                            "btc_usdt"
                       ],
                       "openLeader": true,        //现货带单
                       "symbolConfig": [          //全部带单市场
                            "btc_usdt"
                       ],
                       "tagsConfig": [            //全部标签配置
                         {
                           "id": 0,
                           "label": "string"
                         }
                       ]
                     }
                   }
        title: Response
        language: json
---
