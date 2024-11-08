---
title: 创建止盈止损
position_number: 7
type: post
description: /future/trade/v1/entrust/create-profit
remark: Content-Type = application/x-www-form-urlencoded && application/json
parameters:
    -
        name: symbol
        type: string
        mandatory: true
        default: N/A
        description: 交易对
        ranges:
    -
        name: origQty
        type: integer
        mandatory: true
        default:
        description: 数量（张）
        ranges:
    -
        name: triggerProfitPrice
        type: integer
        mandatory: true
        default:
        description: 止盈触发价
        ranges:
    -
        name: triggerStopPrice
        type: integer
        mandatory: true
        default:
        description: 止损触发价
        ranges:
    -
        name: expireTime
        type: integer
        mandatory: true
        default:
        description: 过期时间
        ranges:
    -
        name: positionSide
        type: string
        mandatory: true
        default:
        description: 仓位方向：LONG;SHORT
        ranges: LONG;SHORT
content_markdown: |-

                #### **限流规则**

                200/s/apikey
left_code_blocks:
    -
        code_block: "public void getKLine() {\r\n\tString text = HttpUtil.get(URL + \"/data/api/future/trade/v1/getKLine?market=btc_usdt&type=1min&since=0\");\r\n\tSystem.out.println(text);\r\n}"
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
            "result": {},
            "returnCode": 0
        }
        title: Response
        language: json
---