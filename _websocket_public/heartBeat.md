---
title: Heartbeat
position_number: 5
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
content_markdown: Each link of the client needs to send a ping message periodically, and the server will reply to the pong message. If the server does not receive a ping message from the client within 1 minute, it will actively disconnect the link.
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
