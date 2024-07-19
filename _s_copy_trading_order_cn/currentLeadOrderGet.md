---
title: 获取当前带单
position_number: 1
type: get
description: /v1/copy-trade-order/copy-trade/order/cur-leader-order
parameters:
    -
        name: symbol
        type: string
        mandatory: false
        default:
        description: 交易对，不传表示查询所有的交易对
        ranges:
    -
        name: type
        type: number
        mandatory: false
        default: 2
        description: <a href="#leaderOrderRequestTypeCn">订单请求类型</a>， 1：明细；2：汇总
        ranges:
content_markdown: >-
    #### **限流规则**

    2/s/apikey
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
                        "id": "string",
                        "orderId": "string",        //订单id
                        "symbol": "string",         //市场
                        "buySize": 0,               //买入数量
                        "buyTime": 0,               //买入时间
                        "buyPrice": 0,              //买入价格
                        "sellSize": 0,              //卖出数量
                        "sellTime": 0,              //卖出时间
                        "sellPrice": 0,             //卖出价格
                        "profit": 0,                //收益
                        "profitRate": 0,            //收益率
                        "triggerProfitPrice": 0,    //止盈
                        "triggerStopPrice": 0,      //止损
                        "followCount": 0            //跟单人数
                      }
                    ]
                  }
        title: Response
        language: json
---
