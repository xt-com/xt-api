---
title: Market Depth
position_number: 10
type:
description:
parameters:
    -
        name: market
        type: string
        mandatory: false
        default: N/A
        description: Trading markets
        ranges: btc_usdt, eth_usdt...
content_markdown: >-
    Subscribe：


    \{"channel":"ex\_depth\_data","market":\{Market\},"event":"addChannel"\}


    Unsubscribe：


    \{"channel":"ex\_depth\_data","market":\{Market\},"event":"removeChannel"\}


    Note: After the user has subscribed successfully, all data will be returned
    at once, and there will be a field with isFull as true in the data as an
    identifier. Once there is an update, it will be returned incrementally.
    Incremental data of each price range is the latest data. If the quantity is
    0, it means the price range has been traded or cancelled.
left_code_blocks:
-
    code_block:
    title:
    language:
right_code_blocks:
-
    code_block: "{\r\n    \"code\":200,\r\n    \"data\":{\r\n        \"market\":\"eth_usdt\",\r\n        \"depth\":\"0\",\r\n        \"last\":301.22,\r\n        \"asks\":[[101.00,2.0000],[102.00,1.0000],[103.00,1.0000]],\r\n        \"bids\":[[98.00,1.0000],[99.00,1.0000],[100.00,1.0000]],\r\n        \"channel\":\"ex_depth_data\",\r\n        \"isFull\":true\r\n    },\r\n    \"info\":\"success\"\r\n}"
    title: Response
    language: json
---
