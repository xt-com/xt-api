---
title: 查询所有交易对杠杆分层
position_number: 6
type: get
description: /future/market/v1/public/leverage/bracket/list
parameters:
content_markdown: 注：**此方法不需要签名**
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
                  "bracket": 0, //档位
                  "maintMarginRate": 0, //维持保证金率
                  "maxLeverage": 0, //最大杠杆倍数
                  "maxNominalValue": 0, //该层最大名义价值
                  "maxStartMarginRate": 0, //最大起始保证金率
                  "minLeverage": 0, //最小杠杆倍数
                  "startMarginRate": 0, //起始保证金率
                  "symbol": "" //交易对
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