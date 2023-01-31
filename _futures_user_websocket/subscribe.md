---
title: Users subscription
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
content_markdown: |-
    WS user subscription address:wss://fstream.xt.com/ws/user
    
    Step 1: The user need to call the interface: /v1/user/listen-key to get the listenKey.
    
    Step 2: When subscribing to user-related websocket events, users need to send: {"req":"sub_user", "listenKey":"listenKey obtained in the previous step"}

    If you receive "invalid_listen_key", it means that the listenKey is expired or invalid, and you need to re-request to obtain the listenKey.

    ps: listenKey is obtained through the interface.

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
