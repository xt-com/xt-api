---
title: 市场最新成交
position_number: 11
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
-
    name: since
    type: integer
    mandatory: true
    default: '0'
    description: 时间条件
    ranges: 0或需要的时间节点的时间戳，13位毫秒级
content_markdown: >-
    订阅：


    \{"channel":"ex\_last\_trade","market":\{Market\},"since":0,"event":"addChannel"\}


    退订：


    \{"channel":"ex\_last\_trade","market":\{Market\},"event":"removeChannel"\}


    说明：用户订阅成功之后，会返回一次根据since过滤的全量数据，并且在data里有一个isFull为true的字段做为标识，之后,
    一旦有更新，Websocket客户端将收到服务器推送的增量消息。
left_code_blocks:
-
    code_block:
    title:
    language:
right_code_blocks:
-
    code_block: "// [时间戳，成交价，成交数量，交易类型，记录ID]\r\n{\r\n    \"code\":200,\r\n    \"data\":{\r\n        \"market\":\"eth_usdt\",\r\n        \"records\":[[1561697199380,301.22,0.1407,\"bid\",156169718700197],[1561697198572,301.18,4.0000,\"bid\",156169718600146],[1561697198302,301.18,0.9883,\"ask\",156169718400145]],\r\n        \"channel\":\"ex_last_trade\",\r\n        \"isFull\":true\r\n    },\r\n    \"info\":\"success\"\r\n}"
    title: Response
    language: json
---
