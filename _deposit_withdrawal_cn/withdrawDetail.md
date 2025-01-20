---
title: 提现详情
position_number: 5
type: get
description: /v4/withdraw
parameters:
    -
        name: 'recordId'
        type: string
        mandatory: false
        default:
        description: >-
          提现记录id，提现接口响应中获取，建议优先使用
        ranges:
    -
        name: 'clientOrderId'
        type: string
        mandatory: false
        default:
        description: >-
                客户端ID
        ranges:
content_markdown: |-
                #### **限流规则**

                1/s/apikey
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
                        "id": 100,                     //提现记录id，用于后期查询提现历史记录
                        "clientOrderId": 10,           //客户端ID
                        "type": 0,                     //提现类型 CHAIN_TRANSFER-区块链提现 INTERNAL_TRANSFER-内部提现
                        "currency": "btc",             //币种
                        "address": "xxxxx",            //提现目标地址
                        "status": "REVIEW",            //状态，含义见公共模块-充值/提现记录状态码及含义
                        "amount": 0.1,                 //提现数量
                        "fee": 0.0001,                 //提现手续费
                        "chain": "Tron",               //网络
                        "memo": "yyyyy",               //memo
                        "confirmations": 2,            //区块确认数
                        "transactionId": "490267492",  //交易hash
                        "createdTime": 1737093343000   //提现时间
                    }
                }
        title: Response
        language: json    
---
