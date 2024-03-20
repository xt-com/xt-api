---
title: See Leverage Stratification of All Trading Pairs
position_number: 6
type: get
description: /future/market/v1/public/leverage/bracket/list
parameters:
content_markdown: Note：This method does not require a signature.
left_code_blocks:
    -
        code_block: "public void getKLine() {\r\n\tString text = HttpUtil.get(URL + \"/data/api/future/market/v1/getKLine?market=btc_usdt&type=1min&since=0\");\r\n\tSystem.out.println(text);\r\n}"
        title: Java
        language: java
right_code_blocks:
    - code_block: |-
        {
          "error": {
            "code": "",
            "msg": ""
          },
          "msgInfo": "",
          "result": [
            {
              "leverageBrackets": [
                {
                  "bracket": 0, //Level
                  "maintMarginRate": 0, //Maintain margin rate
                  "maxLeverage": 0, //Maximum leverage
                  "maxNominalValue": 0, //Maximum notional value
                  "maxStartMarginRate": 0, //Maximum initial margin rate
                  "minLeverage": 0, //Minimum leverage
                  "startMarginRate": 0, //Initial margin rate
                  "symbol": "" //Trading pair
                }
              ],
              "symbol": ""
            }
          ],
          "returnCode": 0
        }
      title: Response
      language: json
---