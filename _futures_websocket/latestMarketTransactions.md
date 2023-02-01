---
title: Latest Market Transactions
position_number: 11
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
-
    name: since
    type: integer
    mandatory: true
    default: '0'
    description: Time Condition
    ranges: 0 or required a timestamp, 13-bit milliseconds level
content_markdown: >-
    Subscribe：


    \{"channel":"ex\_last\_trade","market":\{Market\},"since":0,"event":"addChannel"\}


    Unsubscribe：


    \{"channel":"ex\_last\_trade","market":\{Market\},"event":"removeChannel"\}


    Note: After the user has subscribed successfully , all data filtered by
    “since” will be returned at once, and there is a field with isFull as true
    in the data is an identifier. Once there is an update, the Websocket client
    will receive the incremental message send by the server.
left_code_blocks:
-
    code_block:
    title:
    language:
right_code_blocks:
-
    code_block: "// [Timestamp, Strike Price, volume, transaction type, Record ID]\r\n{\r\n    \"code\":200,\r\n    \"data\":{\r\n        \"market\":\"eth_usdt\",\r\n        \"records\":[[1561697199380,301.22,0.1407,\"bid\",156169718700197],[1561697198572,301.18,4.0000,\"bid\",156169718600146],[1561697198302,301.18,0.9883,\"ask\",156169718400145]],\r\n        \"channel\":\"ex_last_trade\",\r\n        \"isFull\":true\r\n    },\r\n    \"info\":\"success\"\r\n}"
    title: Response
    language: json
---
