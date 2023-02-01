---
title: 市场深度
position_number: 10
type:
description:
parameters:
    -
        name: market
        type: string
        mandatory: false
        default: N/A
        description: 交易市场
        ranges: btc_usdt, eth_usdt...
content_markdown: >-
    订阅：


    \{"channel":"ex\_depth\_data","market":\{Market\},"event":"addChannel"\}


    退订：


    \{"channel":"ex\_depth\_data","market":\{Market\},"event":"removeChannel"\}


    说明：用户订阅成功之后，会返回一次全量数据，并且在data里会有一个isFull为true的字段做为标识，之后,
    一旦有更新将以增量方式返回。增量数据每个价格档位都是最新的数据，如果数量为0表示这个价格档位已经被成交或取消。
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
