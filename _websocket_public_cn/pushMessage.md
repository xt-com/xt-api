---
title: 推送报文格式
position_number: 4
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
content_markdown:
left_code_blocks:
    -
        code_block: |-
            {
                "topic": "trade",             //事件
                "event": "trade@btc_usdt",    //主题
                "data": { }                   //数据
            }
        title: 格式
        language: javascript
right_code_blocks:
    -
        code_block: |-
                {
                    "topic": "trade", 
                    "event": "trade@btc_usdt", 
                    "data": {
                        "s": "btc_usdt",           //symbol
                        "i": 6316559590087222000,  //成交id
                        "t": 1655992403617,        //时间
                        "oi": 6616559590087222666, //订单id
                        "p": "43000",              //价格
                        "q": "0.21",               //数量
                        "v": "9030"                //金额
                        "b": true                  //是否是buyerMaker
                    }
                }
        title: 成交记录(实时推送报文)样例
        language: json
---
