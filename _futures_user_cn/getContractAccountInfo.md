---
title: 获取合约账户资产
position_number: 1
type: get
description: /future/user/v1/compat/balance/list
parameters:
  -
    name: queryAccountId
    type: string
    mandatory: false
    default: N/A
    description: 账户id
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
            "code": "",
            "msg": ""
          },
          "msgInfo": "",
          "result": [
            {
                "accountId": 500000000000, // 账户id
                "userId": 500000000000, // 用户id
                "coin": "usdt", // 币种
                "underlyingType": 2, // 币本位，u本位
                "walletBalance": "2078.57264793", // 币种余额
                "openOrderMarginFrozen": "0", // 订单冻结
                "isolatedMargin": "0", // 保证金冻结
                "crossedMargin": "0", // 全仓保证金冻结
                "amount": "2078.57264793", // 净资产余额
                "totalAmount": "2078.57264793", // 保证金余额
                "convertBtcAmount": "0.03638940", // walletBalance钱包资产折算 BTC
                "convertUsdtAmount": "2078.5726", // walletBalance钱包资产折算 USDT
                "profit": "0", // 已盈亏
                "notProfit": "0", // 未实现盈亏
                "bonus": "0", // 体验金
                "coupon": "0" // 抵扣金
            }
         ],
          "returnCode": 0
      title: Response
      language: json
---