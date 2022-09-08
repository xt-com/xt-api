---
title: Get symbol information
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
        description: trading pair  eg:btc_usdt
        ranges:
    -
        name: symbols
        type: string
        mandatory: false
        default:
        description: 'Collection of trading pairs eg: ["BTC_USDT", "ETH_USDT"]'
        ranges:
    -
        name: version
        type: string
        mandatory: false
        default:
        description: |-
            Version number, when the request version number is consistent with the response content version, the list will not be returned, reducing IO
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
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"SUCCESS\",\r\n  \"ma\": [],\r\n  \"result\": {\r\n    \"time\": 1662444177871,  \r\n    \"version\": \"7cd2cfab0dc979339f1de904bd90c9cb\",  \r\n    \"symbols\": [                         //List of trading pairs\r\n      {\r\n        \"id\": 614,                        //ID\r\n        \"symbol\": \"btc_usdt\",             //trading pair\r\n        \"state\": \"ONLINE\",                 //trading pair status[ONLINE;OFFLINE,DELISTED]\r\n        \"tradingEnabled\": true,            //enable transactions\r\n        \"nextStateTime\": null,               \r\n        \"nextState\": null,                    \r\n        \"depthMergePrecision\": 5,             \r\n        \"baseCurrency\": \"btc\",                  \r\n        \"baseCurrencyPrecision\": 5,              \r\n        \"baseCurrencyId\": 2,                 \r\n        \"quoteCurrency\": \"usdt\",              \r\n        \"quoteCurrencyPrecision\": 6,        \r\n        \"quoteCurrencyId\": 11,             \r\n        \"pricePrecision\": 4,             //Trading price precision\r\n        \"quantityPrecision\": 6,           //Trading quantity precision\r\n        \"orderTypes\": [                   //[LIMIT;MARKET]\r\n          \"LIMIT\",\r\n          \"MARKET\"\r\n        ],\r\n        \"timeInForces\": [                  //effective way[GTC=Valid until sale; IOC=The part that cannot be filled immediately (takers) will be cancelled; FOK=Cancellation if all transactions cannot be made at once; GTX=Cancellation if unable to become a pending order]\r\n          \"GTC\",\r\n          \"FOK\",\r\n          \"IOC\",\r\n          \"GTX\"\r\n        ],\r\n        \"displayWeight\": 1,             //Display weight, the bigger the better\r\n        \"displayLevel\": \"FULL\",           //Impression level,[FULL=fully displayed,SEARCH=search display,DIRECT=direct show,NONE=do not show]\r\n        \"plates\": [],                     //The section belong to  eg:22,23,24\r\n        \"filters\": [                       \r\n          {\r\n            \"filter\": \"MARKET_PROTECTION\",\r\n            \"maxDeviation\": \"0.1\"\r\n          },\r\n          {\r\n            \"filter\": \"ONLINE_PROTECTION\",\r\n            \"durationSeconds\": \"300\",\r\n            \"maxPriceMultiple\": \"5\"\r\n          },\r\n          {\r\n            \"filter\": \"ORDERS\",\r\n            \"maxOpen\": \"300\"\r\n          },\r\n          {\r\n            \"filter\": \"PRICE\",\r\n            \"min\": null,\r\n            \"max\": null,\r\n            \"buyMaxDeviation\": \"0.2\",\r\n            \"sellMaxDeviation\": \"0.2\",\r\n            \"tickSize\": null\r\n          },\r\n          {\r\n            \"filter\": \"QUANTITY\",\r\n            \"min\": null,\r\n            \"max\": null,\r\n            \"tickSize\": null\r\n          },\r\n          {\r\n            \"filter\": \"QUOTE_QTY\",\r\n            \"min\": null\r\n          },\r\n          {\r\n            \"filter\": \"TRIGGERS\",\r\n            \"maxOpen\": \"100\"\r\n          }\r\n        ]\r\n      }\r\n    ]\r\n  }\r\n}"
        title: Response
        language: json
---
