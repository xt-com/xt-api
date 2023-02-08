---
title: 心跳
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
content_markdown: 客户端每个链接需要定期发送ping消息，服务端会回复pong的消息，服务端在1分钟内没有收到客户端的ping消息，会主动断开链接
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
