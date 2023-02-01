---
title: 心跳消息
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
    当用户的Websocket客户端连接到XT
    Websocket服务器后，服务器会定期（当前设为5秒）向其发送ping消息并包含一个时间戳，当用户接收到此心跳消息后，应及时返回pong消息并包含同一时间戳，格式如：


    \{"ping": 1562979600\}


    \{"pong": 1562979600\}


    当Websocket服务器连续三次发送了ping消息却没有收到任何一次pong消息返回后，服务器将主动断开与此客户端的连接。


    当然，用户连接到服务器后，也可以主动向服务器发送消息ping，当服务器接到信息为ping字符串后主动返回一个pong的字符串。
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
