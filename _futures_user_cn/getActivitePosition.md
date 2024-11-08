---
title: 获取活跃持仓信息
position_number: 7
type: get
description: /future/user/v1/position
parameters:
  -
    name: symbol
    type: string
    mandatory: false
    default: N/A
    description: 交易对（不传时查询所有交易对的持仓信息）
    ranges:
content_markdown: |-

               #### **限流规则**

               200/s/apikey
left_code_blocks:
  -
    code_block: "public void getMarketConfig() {\r\n\tString text = HttpUtil.get(URL + \"/data/api/user/v1/getMarketConfig\");\r\n\tSystem.out.println(text);\r\n}"
    title: Java
    language: java
right_code_blocks:
  - code_block: |-
      {
        "error": {
          "args": [],
          "code": "",
          "msg": ""
        },
        "msgInfo": "",
        "result": [
          {
            "autoMargin": false, // 是否自动追加保证金
            "availableCloseSize": 0, // 可平仓数量（张）
            "breakPrice": 0, // 爆仓价格
            "calMarkPrice": 0, // 计算标记价格
            "closeOrderSize": 0, // 平仓挂单数量（张）
            "contractType": "", // 合约类型：PERPETUAL（永续合约）、PREDICT（预测合约）
            "entryPrice": 0, // 开仓均价
            "floatingPL": 0, // 未实现盈亏
            "isolatedMargin": 0, // 逐仓保证金
            "leverage": 0, // 杠杆倍数
            "openOrderMarginFrozen": 0, // 开仓订单保证金占用
            "openOrderSize": 0, // 开仓订单占用
            "positionSide": "", // 持仓方向
            "positionSize": 0, // 持仓数量（张）
            "positionType": "", // 仓位类型：CROSSED（全仓）；ISOLATED（逐仓）
            "profitId": 0, // 止盈止损id
            "realizedProfit": 0, // 已实现盈亏
            "symbol": "", // 交易对
            "triggerPriceType": "", // 触发价格类型 1、指数价格2：标记价格（合理价格）；3：最新价
            "triggerProfitPrice": 0, // 止盈触发价
            "triggerStopPrice": 0, // 止损触发价
            "welfareAccount": true
          }
        ],
        "returnCode": 0
      }
    title: Response
    language: json
---
