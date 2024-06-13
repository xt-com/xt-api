---
title: 查看杠杆倍数
position_number: 31
type: get
description: /future/copytrade/order/v1/position/list
parameters:
    -
        name: symbol
        type: string
        mandatory: false
        default:
        description: 市场
        ranges:
    -
        name: welfareAccountVersion
        type: string
        mandatory: false
        default:
        description: 版本号
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
                        "returnCode": 0,
                        "msgInfo": "success",
                        "error": null,
                        "result": [
                                  {
                                    "symbol": "string", //市场
                                    "positionType": "string",//仓位类型:CROSSED(全仓);ISOLATED(逐仓)
                                    "positionSide": "string",//持仓方向
                                    "contractType": "string",//合约类型：PERPETUAL(永续合约)、PREDICT(预测合约)
                                    "positionSize": 0,// 持仓数量
                                    "closeOrderSize": 0,//平仓挂单数量
                                    "availableCloseSize": 0,//可平仓数量
                                    "entryPrice": 0,//开仓均价
                                    "openOrderSize": 0,//开仓订单占用
                                    "isolatedMargin": 0,// 逐仓保证金
                                    "openOrderMarginFrozen": 0,//开仓订单保证金占用
                                    "realizedProfit": 0,//已实现盈亏
                                    "autoMargin": false,//是否自动追加保证金
                                    "leverage": 0, // 杠杆倍数
                                    "profitId": 0,//止盈止损id
                                    "triggerPriceType": 0,//触发价格类型 1、指数价格 2：标记价格（合理价格）；3：最新价
                                    "triggerProfitPrice": 0,//止盈触发价
                                    "triggerStopPrice": 0,//止损触发价
                                    "welfareAccount": boolean //是否是体验金账户
                                   }
                          ]
                        }
        title: Response
        language: json
---
