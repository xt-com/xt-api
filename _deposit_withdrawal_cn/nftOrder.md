---
title: BTCsn充值提现历史
position_number: 7
type: get
description: /v4/nft/order/history
parameters:
    -
        name: 'type'
        type: number
        mandatory: false
        default: 2
        description: 类型：1-充值；2-提现
        ranges:
    -
        name: 'status'
        type: number
        mandatory: false
        default:
        description: 状态：0-已提交；1-审核中；2-已审核；3-已完成；4-拒绝；5-取消
        ranges:
    -
        name: 'currency'
        type: string
        mandatory: false
        default:
        description: 币种
        ranges: 
    -
        name: 'startTime'
        type: number
        mandatory: false
        default:
        description: 开始时间（时间戳）
        ranges:
    -
        name: 'endTime'
        type: number
        mandatory: false
        default:
        description: 结束时间（时间戳）
        ranges:
    -
        name: 'page'
        type: number
        mandatory: false
        default:
        description: 页码
        ranges:
    -
        name: 'size'
        type: number
        mandatory: false
        default:
        description: 页大小
        ranges:
content_markdown: |-
                
left_code_blocks:
    -
        code_block:
        title: Java
        language: java
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
                {
                    "rc": 0,
                    "mc": "SUCCESS",
                    "ma": [],
                    "result": {   
                       items:[
                          {
                              id: 123,
                              type: 2,
                              currencyId: 2280,
                              currencyName: "btcsn",
                              amount: 0.01,
                              fee: 0.7511888,
                              feeCurrencyId: 11, 
                              feeCurrencyName: "usdt",
                              serial: 123,
                              status: 3,
                              password: 123456,
                              createTime: 1730967448000
                          }
                       ]
                    }
                }
        title: Response
        language: json    
---
