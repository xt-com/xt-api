---
title: Prompt Message
position_number: 3
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
    When the user's client Websocket connected to the XT Websocket server, the server will periodically send a ping message to user (currently set as 5 seconds) and include a timestamp. After receiving this prompt message, the user should promptly return the pong message and include the same timestamp in the following format:


    \{"ping": 1562979600\}


    \{"pong": 1562979600\}


    If the Websocket server continuously sent ping messages for three times without receiving any “pong” messages, the server will automatically disconnect with the client. However, after connecting to the server, the user can also send a message “ping” to the server. When the server received the information of ping , it will reply a “pong” message.
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
