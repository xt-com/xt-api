---
title: 聚合行情（Ticker）
position_number: 8
type:
description:
parameters:
    -
        name: market
        type: string
        mandatory: true
        default: N/A
        description: 交易市场
        ranges: btc_usdt, eth_usdt...
content_markdown: >-
    订阅：


    \{"channel":"ex\_single\_market","market":\{Market\},"event":"addChannel"\}


    退订：


    \{"channel":"ex\_single\_market","market":\{Market\},"event":"removeChannel"\}
left_code_blocks:
-
    code_block:
    title:
    language:
right_code_blocks:
-
    code_block: "// [市场名称，市场分组，当前价格，涨跌幅，最高价，最低价，成交量，成交额]\r\n{\r\n    \"code\":200,\r\n    \"data\":{\r\n        \"market\":\"eth_usdt\",\r\n        \"records\":[[\"eth_usdt\",1,101.00,1.98,101.00,101.00,4.0000,404.000000]],\r\n        \"channel\":\"ex_single_market\"\r\n    },\r\n    \"info\":\"success\"\r\n}"
    title: Response
    language: json
---
