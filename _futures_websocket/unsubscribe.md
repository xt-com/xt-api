---
title: Unsubscribe
position_number: 6
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
    The format of unsubscribing is as follows：

    ```js
    
    {"channel":"ex_single_market","market":{Market},"event":"removeChannel"}
    
    {"channel":"ex_group_market","group":{Group},"event":"removeChannel"}
    
    {"channel":"ex_depth_data","market":{Market},"event":"removeChannel"}
    
    {"channel":"ex_last_trade","market":{Market},"event":"removeChannel"}
    
    {"channel":"ex_chart_update","market":{Market},"interval":{Interval},"event":"removeChannel"}
    
    ```

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
