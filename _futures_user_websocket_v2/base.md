---
title: General WSS information
position_number: 1
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
    #### **Base Address**

    ##### **wss://fstream.xt.com/ws/user**


    ---


    #### **Request Headers**

    The request header of the compression extension protocol must be added.

    <font color="#aa5500">Sec-Websocket-Extensions:permessage-deflate</font> 


    ---


    #### **Subscription Steps**

    Step 1: The user need to call the interface: /v1/user/listen-key to get the listenKey. <br/>
    
    Step 2: When subscribing to user-related websocket events, users need to send: {"method":"SUBSCRIBE","params":["order@{listenKey obtained in the previous step}"],"id":"test1"} <br/>

    If you receive "invalid_listen_key", it means that the listenKey is expired or invalid, and you need to re-request to obtain the listenKey. <br/>

    ps: listenKey is obtained through the interface. <br/>

    User-related data will be pushed after subscription.
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
