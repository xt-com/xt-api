---
title: K线数据
position_number: 7
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
    name: interval
    type: string
    mandatory: true
    default: N/A
    description: K线类型
    ranges: 1min,5min,15min,30min,1hour,6hour,1day,7day,30day
-
    name: since
    type: integer
    mandatory: true
    default: '0'
    description: 时间条件
    ranges: 0或需要的时间节点的时间戳，10位秒级
content_markdown: >-
    订阅：


    \{"channel":"ex\_chart\_update","market":\{Market\},"since":\{Since\},"interval":\{Interval\},"event":"addChannel"\}


    退订：


    \{"channel":"ex\_chart\_update","market":\{Market\},"interval":\{Interval\},"event":"removeChannel"\}


    说明：用户订阅成功之后，会返回一次根据since过滤的全量数据，并且在data里有一个isFull为true的字段做为标识，之后,
    一旦有更新，Websocket客户端将收到服务器推送的增量消息。
left_code_blocks:
-
    code_block:
    title:
    language:
right_code_blocks:
-
    code_block: "//[时间戳，开盘价，最高价，最低价，收盘价，成交量，成交额]\r\n{\r\n    \"code\":200,\r\n    \"data\":{\r\n        \"market\":\"eth_usdt\",\r\n        \"records\":[[1562987700,101.0,101.0,101.0,101.0,4.0,404.0]], \r\n        \"channel\":\"ex_chart_update\",\r\n        \"interval\":\"15min\",\r\n        \"isFull\":true,\r\n        \"since\":1562987700\r\n    },\r\n    \"info\":\"success\"\r\n}"
    title: Response
    language: json
---


