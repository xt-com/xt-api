---
title: 用户订阅
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
content_markdown: |-
    用户ws订阅地址:  https://xxx.xxx.xxx/ws/user
    
    第一步：用户要先调用接口:/v1/user/listen-key   获取listenKey
    
    第二步：订阅用户相关的websocket事件时需要发送：{"req":"sub_user", "listenKey":"上一步获取的listenKey"}

    如果收到"invalid_listen_key"表示listenKey过期或者无效，需要重新请求获取listenKey

    ps：listenKey通过接口获取

    订阅之后会推送用户相关数据
    

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
