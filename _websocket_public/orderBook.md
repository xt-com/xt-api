---
title: Orderbook manage
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
        **How to manage a local order book correctly**
        

        1.Open a stream to wss://stream.xt.com/public , depth_update@btc_usdt


        2.Buffer the events you receive from the stream.


        3.Get a depth snapshot from https://sapi.xt.com/v4/public/depth?symbol=btc_usdt&limit=500


        4.Drop any event where i is <= lastUpdateId in the snapshot.


        5.The first processed event should have fi <= lastUpdateId+1 AND i >= lastUpdateId+1.


        6.While listening to the stream, each new event's fi should be equal to the previous event's i+1.


        7.The data in each event is the absolute quantity for a price level.


        8.If the quantity is 0, remove the price level.


        9.Receiving an event that removes a price level that is not in your local order book can happen and is normal.


        Note: Due to depth snapshots having a limit on the number of price levels, a price level outside of the initial snapshot that doesn't have a quantity change won't have an update in the Diff. 
        Depth Stream. Consequently, those price levels will not be visible in the local order book even when applying all updates from the Diff. 
        Depth Stream correctly and cause the local order book to have some slight differences with the real order book. However, 
        for most use cases the depth limit of 500 is enough to understand the market and trade effectively.
            
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
