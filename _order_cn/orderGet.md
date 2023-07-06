---
title: 单笔获取
position_number: 1
type: get
description: /v4/order/{orderId}
parameters:
    -
        name: orderId
        type: number
        mandatory: true
        default:
        description: 订单ID
        ranges:
content_markdown: >-
    #### **限流规则**

    100/s/apikey
left_code_blocks:
    -
        code_block: |-
            public String orderGet(){


            }
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
                    "symbol": "BTC_USDT",                   //交易对
                    "orderId": "6216559590087220004",       //订单号
                    "clientOrderId": "16559590087220001",   //客户端订单号
                    "baseCurrency": "string",               //标的币种
                    "quoteCurrency": "string",              //报价币种
                    "side": "BUY",                          //订单方向 BUY-买,SELL-卖
                    "type": "LIMIT",                        //订单类型  LIMIT-现价,MARKET-市价 
                    "timeInForce": "GTC",                   //有效方式  GTC,IOC,FOK,GTX
                    "price": "40000",                       //价格
                    "origQty": "2",                         //原始数量
                    "origQuoteQty": "48000",                //原始金额
                    "executedQty": "1.2",                   //已执行数量
                    "leavingQty": "string",                 //待执行数量（若撤单或下单拒绝，该值为0）
                    "tradeBase": "2",                       //成交标的(成交数量)
                    "tradeQuote": "48000",                  //成交报价(成交金额)
                    "avgPrice": "42350",                    //成交均价
                    "fee": "string",                        //手续费
                    "feeCurrency": "string",                //手续费币种
                    "state": "NEW",                         //订单状态 NEW-新建,PARTIALLY_FILLED-部分成交,FILLED-全部成交,CANCELED-用户撤单,REJECTED-下单失败,EXPIRED-过期(time_in_force撤单或溢价撤单)
                    "time": 1655958915583,                  //订单时间
                    "updatedTime": 1655958915583            //订单更新时间
                  }
                }
        title: Response
        language: json
---
