---
title: 获取交易对信息
position_number: 2
type: get
split: -------------------------------------
description: /v4/public/symbol
parameters:
    -
        name: symbol
        type: string
        mandatory: false
        default:
        description: 交易对  eg:btc_usdt
        ranges:
    -
        name: symbols
        type: string
        mandatory: false
        default:
        description: '交易对集合 eg: ["BTC_USDT", "ETH_USDT"]'
        ranges:
    -
        name: version
        type: string
        mandatory: false
        default:
        description: |-
            版本号,当请求版本号与响应内容版本一致时，不返回清单，减少IO
            eg: 2e14d2cd5czcb2c2af2c1db65078d075
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
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"SUCCESS\",\r\n  \"ma\": [],\r\n  \"result\": {\r\n    \"time\": 1662444177871,   //时间\r\n    \"version\": \"7cd2cfab0dc979339f1de904bd90c9cb\",  //内容版本\r\n    \"symbols\": [                         //交易对清单\r\n      {\r\n        \"id\": 614,                        //ID\r\n        \"symbol\": \"btc_usdt\",             //交易对\r\n        \"state\": \"ONLINE\",                 //交易对状态[ONLINE=上线的;OFFLINE=下线的,DELISTED=退市]\r\n        \"tradingEnabled\": true,            //启用交易\r\n        \"nextStateTime\": null,               //下一个状态时间\r\n        \"nextState\": null,                    //下一个状态\r\n        \"depthMergePrecision\": 5,             //深度合并精度\r\n        \"baseCurrency\": \"btc\",                  //标的资产\r\n        \"baseCurrencyPrecision\": 5,              //标的资产精度\r\n        \"baseCurrencyId\": 2,                 //标的资产ID\r\n        \"quoteCurrency\": \"usdt\",              //报价资产\r\n        \"quoteCurrencyPrecision\": 6,        //报价资产精度\r\n        \"quoteCurrencyId\": 11,             //报价资产ID\r\n        \"pricePrecision\": 4,              //交易价格精度\r\n        \"quantityPrecision\": 6,           //交易数量精度\r\n        \"orderTypes\": [                   //订单类型[LIMIT=限价单;MARKET=市价单]\r\n          \"LIMIT\",\r\n          \"MARKET\"\r\n        ],\r\n        \"timeInForces\": [                  //有效方式[GTC=成交为止,一直有效; IOC=无法立即成交(吃单)的部分就撤销; FOK=无法全部立即成交就撤销; GTX=无法成为挂单方就撤销]\r\n          \"GTC\",\r\n          \"FOK\",\r\n          \"IOC\",\r\n          \"GTX\"\r\n        ],\r\n        \"displayWeight\": 1,             //展示权重，越大越靠前\r\n        \"displayLevel\": \"FULL\",           //展示级别,[FULL=完全展示,SEARCH=搜索展示,DIRECT=直达展示,NONE=不展示]\r\n        \"plates\": [],                     //所属板块  eg:22,23,24\r\n        \"filters\": [                       //过滤器\r\n          {\r\n            \"filter\": \"MARKET_PROTECTION\",\r\n            \"maxDeviation\": \"0.1\"\r\n          },\r\n          {\r\n            \"filter\": \"ONLINE_PROTECTION\",\r\n            \"durationSeconds\": \"300\",\r\n            \"maxPriceMultiple\": \"5\"\r\n          },\r\n          {\r\n            \"filter\": \"ORDERS\",\r\n            \"maxOpen\": \"300\"\r\n          },\r\n          {\r\n            \"filter\": \"PRICE\",\r\n            \"min\": null,\r\n            \"max\": null,\r\n            \"buyMaxDeviation\": \"0.2\",\r\n            \"sellMaxDeviation\": \"0.2\",\r\n            \"tickSize\": null\r\n          },\r\n          {\r\n            \"filter\": \"QUANTITY\",\r\n            \"min\": null,\r\n            \"max\": null,\r\n            \"tickSize\": null\r\n          },\r\n          {\r\n            \"filter\": \"QUOTE_QTY\",\r\n            \"min\": null\r\n          },\r\n          {\r\n            \"filter\": \"TRIGGERS\",\r\n            \"maxOpen\": \"100\"\r\n          }\r\n        ]\r\n      }\r\n    ]\r\n  }\r\n}"
        title: Response
        language: json
---
