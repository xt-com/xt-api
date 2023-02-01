---
title: 分组聚合行情（Tickers）
position_number: 9
type:
description:
parameters:
    -
        name: group
        type: string
        mandatory: false
        default: all
        description: 分组类型
        ranges: all或交易区(如：usdt)或交易对(如：btc_usdt)
content_markdown: |-
    订阅：

    \{"channel":"ex\_group\_market","group":\{Group\},"event":"addChannel"\}

    退订：

    \{"channel":"ex\_group\_market","group":\{Group\},"event":"removeChannel"\}
left_code_blocks:
-
    code_block:
    title:
    language:
right_code_blocks:
-
    code_block: "// [市场名称，市场分组，当前价格，涨跌幅，最高价，最低价，成交量，成交额]\r\n{\r\n    \"code\":200,\r\n    \"data\":{\r\n        \"records\":[[\"eth_usdt\",1,103.00,1.9800,103.00,101.00,7.0000,711.000000]],\r\n        \"channel\":\"ex_group_market\",\r\n        \"group\":\"usdt\"\r\n    },\r\n    \"info\":\"success\"\r\n}"
    title: Response
    language: json
---
