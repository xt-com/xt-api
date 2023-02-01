---
title: Subscribe the Topics
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
    After connected with Websocket server, the Websocket client should send the following request to subscribe the specific topic:

    ```js

    {"channel":"ex_single_market","market":{Market},"event":"addChannel"}

    {"channel":"ex_group_market","group":{Group},"event":"addChannel"}

    {"channel":"ex_last_trade","market":{Market},"since":{Since},"event":"addChannel"}

    {"channel":"ex_depth_data","market":{Market},"event":"addChannel"}

    {"channel":"ex_chart_update","market":{Market},"since":{Since},"interval":{Interval},"event":"addChannel"}

    ```

    After subscribed the topic, the Websocket client will receive all the data flow from the corresponding topic. Next, once the subscribed topic is updated, the Websocket client will receive an update message “push” by the server.
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
