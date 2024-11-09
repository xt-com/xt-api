---
title: 查询带单员历史带单
position_number: 29
type: get
description: /v1/copy-trade-order/public/copy-trade/order/leader-order-history
parameters:
    -
        name: leaderAccountId
        type: number
        mandatory: true
        default:
        description: 带单员账号id
        ranges:
    -
        name: symbol
        type: string
        mandatory: false
        default:
        description: 交易对，不传表示查询所有的交易对
        ranges:
    -
        name: direction
        type: string
        mandatory: false
        default: NEXT
        description: 分页查询方向
        ranges: PREV-上一页,NEXT-下一页
    -
        name: limit
        type: number
        mandatory: false
        default: 10
        description:  每页的数量
        ranges: 1-100
    -
        name: id
        type: object
        mandatory: false
        default:
        description: 起始ID，例如 6216559590087220004
        ranges:    
content_markdown: >-
    #### **限流规则**

    2/s/ip
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
                    "result": [
                      {
                        "id": "string",           //id
                        "orderId": "string",      //订单id
                        "symbol": "string",       //市场
                        "buySize": 0,             //买入数量
                        "buyTime": 0,             //买入时间
                        "buyPrice": 0,            //买入价格
                        "sellSize": 0,            //卖出数量
                        "sellTime": 0,            //卖出时间
                        "sellPrice": 0,           //卖出价格
                        "profit": 0,              //收益
                        "profitRate": 0,          //收益率
                        "triggerProfitPrice": 0,  //止盈
                        "triggerStopPrice": 0,    //止损
                        "followCount": 0          //跟单人数
                      }
                    ]
                  }
        title: Response
        language: json
---
