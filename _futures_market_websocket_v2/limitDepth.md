---
title: Limited depth
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
    **request**

    &nbsp;

    format: depth@\{symbol\},\{levels\},\{interval\}

    levels: 5/10/20/50
  
    interval: 100/250/500/1000 &nbsp; default rate 1000ms

    eg: depth@btc\_usdt,50,1000ms
    
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
                    "event": "depth@btc_usdt,20", 
                    "data": {
                        "id": "1234", //lastUpdateId
                        "s":"btc_index", //trading pair
                        "a":[["50000","0.1"],["50001","0.2"]],    //ask sell order queue,[price, quantity]
                        "b":[["49999","0.1"],["48888","0.2"]],   //bid buy queue
                        "t": 123456789 // time stamp
                    }
                }
        title: Response
        language: json
---
