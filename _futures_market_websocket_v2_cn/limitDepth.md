---
title: 有限深度
position_number: 17
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
content_markdown: |-
    **请求**

    &nbsp;

    语法: depth@\{symbol\},\{levels\},\{interval\}

    levels: 5/10/20/50
  
    interval: 100/250/500/1000 默认速率1000ms

    示例: depth@btc\_usdt,50,1000ms
  
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
                {
                    "topic": "depth", 
                    "event": "depth@btc_usdt,50", 
                    "data": {
                        "id": "1234", //lastUpdateId
                        "s":"btc_index", //交易对
                        "a":[["50000","0.1"],["50001","0.2"]],    //ask 卖单队列， [价格，数量]
                        "b":[["49999","0.1"],["48888","0.2"]],   //bid 买单队列
                        "t": 123456789 // 时间戳
                    }
                }
        title: Response
        language: json
---
