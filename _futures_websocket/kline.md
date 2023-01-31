---
title: Kline/Candlestick Status
position_number: 7
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
    name: interval
    type: string
    mandatory: true
    default: N/A
    description: Kline/candlestick type
    ranges: 1min,5min,15min,30min,1hour,6hour,1day,7day,30day
-
    name: since
    type: integer
    mandatory: true
    default: '0'
    description: Time condition
    ranges: 0 or required timestamp, 10-bit seconds level
content_markdown: >-
    Subscribe：


    \{"channel":"ex\_chart\_update","market":\{Market\},"since":\{Since\},"interval":\{Interval\},"event":"addChannel"\}


    Unsubscribe：


    \{"channel":"ex\_chart\_update","market":\{Market\},"interval":\{Interval\},"event":"removeChannel"\}


    Note: After the user has subscribed successfully , all data filtered by
    "since" will be returned, and there is a field with isFull as true in the
    data is an identifier. Once there is an update, the Websocket client will
    receive the incremental message send by the server.
left_code_blocks:
-
    code_block:
    title:
    language:
right_code_blocks:
-
  code_block: "//[ Timestamp, Open price, Highest price, Lowest Price, Close price, Volume, Turnover]\r\n{\r\n    \"code\":200,\r\n    \"data\":{\r\n        \"market\":\"eth_usdt\",\r\n        \"records\":[[1562987700,101.0,101.0,101.0,101.0,4.0,404.0]], \r\n        \"channel\":\"ex_chart_update\",\r\n        \"interval\":\"15min\",\r\n        \"isFull\":true,\r\n        \"since\":1562987700\r\n    },\r\n    \"info\":\"success\"\r\n}"
  title: Response
  language: json
---
