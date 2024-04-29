---
title: 充值历史
position_number: 3
type: get
description: /v4/deposit/history
parameters:
    -
        name: currency
        type: string
        mandatory: true
        default:
        description: 币种名称，可从“获取XT可充提的币种”接口中获取
        ranges:
    -
        name: chain
        type: string
        mandatory: true
        default:
        description: 转账网络名称，可从“获取XT可充提的币种”接口中获取
        ranges:
    -
        name: status
        type: string
        mandatory: false
        default:
        description: 充值记录的<a href="#depositWithdrawStatusCn">状态</a>
        ranges: SUBMIT、REVIEW、AUDITED、PENDING、SUCCESS、FAIL、CANCEL
    -
        name: fromId
        type: long
        mandatory: false
        default:
        description: 上次开始分页的Id，即记录的主键id
        ranges:
    -
        name: direction
        type: string
        mandatory: false
        default: NEXT
        description: 分页方向
        ranges: NEXT：下一页，PREV：上一页
    -
        name: limit
        type: int
        mandatory: false
        default: 10
        description: 每页记录数，最大不超过200
        ranges: 1<=limit<=200
    -
        name: startTime
        type: long
        mandatory: false
        default:
        description: 查询范围开始边界，毫秒级时间戳
        ranges:
    -
        name: endTime
        type: long
        mandatory: false
        default:
        description: 查询范围结束边界，毫秒级时间戳
        ranges:

content_markdown: 

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
                  "mc": "string",
                  "ma": [
                    {}
                  ],
                  "result": {
                    "hasPrev": true,            //是否有上一页
                    "hasNext": true,            //是否有下一页
                    "items": [
                      {
                         "id": 169669597,       //提现记录id
                         "currency": "xlm2",    //币种名称
                         "chain": "XLM",        //转账网络名称
                         "memo": "441824256",   //memo
                         "status": "SUCCESS",   //充值状态
                         "amount": "0.1",       //充值金额
                         "confirmations": 12,   //区块确认数
                         "transactionId": "28dd15b5c119e00886517f129e5e1f8283f0286b277bcd3cd1f95f7fd4a1f7fc",   //交易哈希
                         "address": "GBY6UIYEYLAAXRQXVO7X5I4BSSCS54EAHTUILXWMW6ONPM3PNEA3LWEC",     //充值目标地址
                         "fromAddr": "GBTISB3JK65DG6LEEYYFW33RMMDHBQ65AEUPE5VDBTCLYYFS533FTG6Q",    //来源地址
                         "createdTime": 1667260957000   //充值时间，毫秒级时间戳
                      }
                    ]
                  }
                }
        title: Response
        language: json
---
