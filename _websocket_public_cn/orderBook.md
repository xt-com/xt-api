---
title: Orderbook 维护
position_number: 7
split: -------------------------------------
type:
description: 

parameters:
    -
        name:
        type: string
        mandatory: false
        default:
        description:
        ranges:
content_markdown: |-
        **如何正确在本地维护一个orderbook副本**
        

        1.订阅 wss://stream.xt.com/public，depth_update@btc_usdt


        2.开始缓存收到的更新。同一个价位，后收到的更新覆盖前面的。


        3.访问Rest接口 https://sapi.xt.com/v4/public/depth?symbol=btc_usdt&limit=500 获得一个500档的深度快照


        4.将目前缓存到的信息中i <= 步骤3中获取到的快照中的lastUpdateId的部分丢弃(丢弃更早的信息，已经过期)。


        5.将深度快照中的内容更新到本地orderbook副本中，并从websocket接收到的第一个fi <= lastUpdateId+1 且 i >= lastUpdateId+1 的event开始继续更新本地副本。


        6.每一个新event的fi应该恰好等于上一个event的i+1，否则可能出现了丢包，请从step3重新进行初始化。


        7.每一个event中的挂单量代表这个价格目前的挂单量绝对值，而不是相对变化。


        8.如果某个价格对应的挂单量为0，表示该价位的挂单已经撤单或者被吃，应该移除这个价位。


        注意: 因为深度快照对价格档位数量有限制，初始快照之外的价格档位并且没有数量变化的价格档位不会出现在增量深度的更新信息内。因此，即使应用来自增量深度的所有更新，这些价格档位也不会在本地 order book 中可见，
        所以本地的 order book 与真实的 order book 可能会有一些差异。 不过对于大多数用例，500 的深度限制足以有效地了解市场和交易。
            
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block:
        title: Response
        language: json
---
