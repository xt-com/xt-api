---
title: Grouped Aggregate Market
position_number: 9
type:
description:
parameters:
    -
        name: group
        type: string
        mandatory: false
        default: all
        description: Group type
        ranges: 'all or Trading area（eg：USDT）or trading pair(eg: BTC, USDT)'
content_markdown: |-
    Subscribe：

    \{"channel":"ex\_group\_market","group":\{Group\},"event":"addChannel"\}

    Unsubscribe：

    \{"channel":"ex\_group\_market","group":\{Group\},"event":"removeChannel"\}
left_code_blocks:
-
    code_block:
    title:
    language:
right_code_blocks:
-
    code_block: "// [Market name, Market Group, Market price, Price Fluctuation Limit, Highest price, Lowest price, Volume, Turnover]\r\n{\r\n    \"code\":200,\r\n    \"data\":{\r\n        \"records\":[[\"eth_usdt\",1,103.00,1.9800,103.00,101.00,7.0000,711.000000]],\r\n        \"channel\":\"ex_group_market\",\r\n        \"group\":\"usdt\"\r\n    },\r\n    \"info\":\"success\"\r\n}"
    title: Response
    language: json
---
