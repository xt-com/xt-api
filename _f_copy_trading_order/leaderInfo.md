---
title: Get leader info
position_number: 7
type: get
description: /future/copytrade/user/v1/copy-trade/leader-detail
parameters:

content_markdown: >-
    #### **Limit Flow Rules**

    2/s/apikey
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
                    "result": {
                            "nickName": "string", // nickName
                            "avatar": "string", // avatar
                            "intro": "string", // intro
                            "leadDays": 0, // begin time
                            "levelId": 0, // leader level id
                            "level": 0, // leader level
                            "levelName": "string", // leader level name
                            "label": ["string"], // labels
                            "followNumber": 0, // leader's follower count
                            "currentFollowNumber": 0, // leader's current follower count
                            "maxFollowerSize": 0, // leader's max follower count
                            "profitRate": 0, // leader profit rate
                            "platformProfitRate": 0, // platform profit rate
                            "totalRights": 0, // total amount
                            "displayEquity": Boolean, // is display amount
                            "displayPosition": Boolean // is display position
                     }
                    }
        title: Response
        language: json
---
