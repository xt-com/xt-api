---
title: 推送报文格式
position_number: 4
type:
description: |+

parameters:
    -
        name:
        type: string
        mandatory: false
        default:
        description:
        ranges:
content_markdown:
left_code_blocks:
    -
        code_block: "{\r\n    \"topic\": \"trade\",             //事件\r\n    \"event\": \"trade@btc_usdt\",    //主题\r\n    \"data\": { }                   //数据\r\n}"
        title: 格式
        language: javascript
right_code_blocks:
    -
        code_block: "{\r\n    \"topic\": \"trade\", \r\n    \"event\": \"trade@btc_usdt\", \r\n    \"data\": {\r\n        \"s\": \"btc_usdt\", \r\n        \"i\": 6316559590087222000, \r\n        \"t\": 1655992403617, \r\n        \"p\": \"43000\", \r\n        \"q\": \"0.21\", \r\n        \"b\": true\r\n    }\r\n}"
        title: 成交记录(实时推送报文)样例
        language: json
---
