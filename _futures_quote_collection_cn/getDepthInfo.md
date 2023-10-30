---
title: 获取交易对深度信息
position_number: 2
type: get
description: /future/market/v1/public/cg/orderbook
remark: Content-Type = application/x-www-form-urlencoded
parameters:
  -
    name: symbol
    type: string
    mandatory: true
    default: N/A
    description: 交易对，例如BTC-USDT
    ranges:
  - 
    name: level
    type: int
    mandatory: false
    default: 50
    description: 
    ranges: 1-200
        
content_markdown: Note：这个方法不需要签名
left_code_blocks:
  - code_block: "public void getMarketConfig() {\r\n\tString text = HttpUtil.get(URL + \"/data/api/future/market/v1/public/cg/orderbook\");\r\n\tSystem.out.println(text);\r\n}"
    title: Java
    language: java
right_code_blocks:
  - code_block: |-
      {
                "ticker_id": "BTC-USDT", 
                "timestamp": 1698668957638,
                "bids": [[
                     "34794.6",
                     "97164"
                    ],[
                     "34794.5",
                     "9897"
                    ],...], 
                "asks": [[
                     "34794.7",
                     "168479"
                    ],[
                     "34794.8",
                     "4009"
                    ],...]
      }
    title: Response
    language: json
---