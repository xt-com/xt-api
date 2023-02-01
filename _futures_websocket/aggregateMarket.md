---
title: Aggregate Market
position_number: 8
type:
description:
parameters:
    -
        name: market
        type: string
        mandatory: true
        default: N/A
        description: Trading markets
        ranges: btc_usdt, eth_usdt...
content_markdown: >-
    Subscribe：


    \{"channel":"ex\_single\_market","market":\{Market\},"event":"addChannel"\}


    Unsubscribe：


    \{"channel":"ex\_single\_market","market":\{Market\},"event":"removeChannel"\}
left_code_blocks:
-
    code_block:
    title:
    language:
right_code_blocks:
-
    code_block: "// [Market name, Market Group, Market price, Price Fluctuation Limit, Highest Price, Lowest Price, Volume, Turnover]\r\n{\r\n    \"code\":200,\r\n    \"data\":{\r\n        \"market\":\"eth_usdt\",\r\n        \"records\":[[\"eth_usdt\",1,101.00,1.98,101.00,101.00,4.0000,404.000000]],\r\n        \"channel\":\"ex_single_market\"\r\n    },\r\n    \"info\":\"success\"\r\n}"
    title: Response
    language: json
---
