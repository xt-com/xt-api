---
title: Get leader setting
position_number: 12
type: get
description: /v1/copy-trade-account/copy-trade/leader-settings
parameters:

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
                     "result": {
                       "displayEquity": true,      //Display total assets or not
                       "displayQuantity": true,    //Display buy quantity or not
                       "labelIds": "string",       //Label ids, separated by commas
                       "leaderIntro": "string",    //Leader introduction
                       "leaderSymbol": [           //Selected copy trade symbols
                            "btc_usdt"
                       ],
                       "openLeader": true,        //Open leader or not
                       "symbolConfig": [          //All copy trade symbols
                            "btc_usdt"
                       ],
                       "tagsConfig": [            //tag config, label list
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
