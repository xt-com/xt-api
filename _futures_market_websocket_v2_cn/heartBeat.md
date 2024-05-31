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
content_markdown: 客户端每个链接需要定期发送"ping"字符串，服务端会回复"pong"，服务端在30秒内没有收到客户端的ping消息，会主动断开链接
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
