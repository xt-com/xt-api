---
title: 交易员的带单历史
position_number: 7
type: get
description: /public/futures/trade/v1/public/copy-trade/leader-order-history
parameters:
    -
        name: leaderAccountId
        type: number
        mandatory: true
        default:
        description: 交易员帐号
        ranges:
    -
        name: symbol
        type: String
        mandatory: false
        default:
        description: 交易对，不传表示查询所有的交易对
        ranges:
    -
        name: id
        type: number
        mandatory: false
        default:
        description: 分页标识id
        ranges:
    - 
        name: direction
        type: String
        mandatory: true
        default: NEXT
        description: 分页方向
        ranges: NEXT/PREV
    -
        name: limit
        type: number
        mandatory: true
        default: 10
        description: 分页大小
        ranges:
content_markdown:
left_code_blocks:
    -
        code_block: |-
            public String leaderOrderHistoryGet(){


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
                          "hasPrev": false,   //上一页
                          "hasNext": false,   //下一页
                          "items": [{
                                    "closePrice": 0,      //平仓均价
                                    "closeSize":0         //
                                    "closeTime": 0,       //平仓时间
                                    "id": 0,            
                                    "openLeverage": 0,    //杠杆
                                    "openMargin": 0,      //开仓初始保证金
                                    "openPrice": 0,       //开仓均价
                                    "openSize": 0,        //开仓仓位数量
                                    "openTime": 0,        //开仓时间
                                    "orderId": 0,         //订单id
                                    "positionSide": "",   //持仓方向:LONG多;SHORT空
                                    "positionType": "",   //仓位类型:CROSSED(全仓);ISOLATED(逐仓)
                                    "profitRate": 0,      //收益率
                                    "realizedPnl": 0,     //已实现盈亏
                                    "symbolName": "",     //交易对
                                    "trackNo": 0,         //跟单trackNo
                                 }] 
                      }
                    }
        title: Response
        language: json
---
