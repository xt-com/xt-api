---
title: 订阅主题
position_number: 5
type:
description:
parameters:
    -
        name:
        type:
        mandatory: false
        default:
        description:
        ranges:
content_markdown: >-
    成功建立与Websocket服务器的连接后，Websocket客户端应发送如下请求以订阅特定主题：

    ```js
    
    {"channel":"ex_single_market","market":{Market},"event":"addChannel"}
    
    {"channel":"ex_group_market","group":{Group},"event":"addChannel"}
    
    {"channel":"ex_last_trade","market":{Market},"since":{Since},"event":"addChannel"}
    
    {"channel":"ex_depth_data","market":{Market},"event":"addChannel"}
    
    {"channel":"ex_chart_update","market":{Market},"since":{Since},"interval":{Interval},"event":"addChannel"}
    
    ```

    成功订阅后，Websocket客户端将收到对应主题返回的全量数据，

    之后, 一旦所订阅的主题有更新，Websocket客户端将收到服务器推送的更新消息（push）：
left_code_blocks:
-
    code_block:
    title:
    language:
right_code_blocks:
-
    code_block:
    title:
    language:
---


