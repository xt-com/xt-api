---
title: 获取交易对信息
position_number: 2
type: get
split: '-------------------------------------'
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
        description: '交易对集合，优先级高于symbol。 eg: btc_usdt,eth_usdt'
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
content_markdown: >-
    #### **限流规则**


    1\.获取单个交易对：100/s/ip


    2\.获取多个交易对：10/s/ip


    ---


    #### **过滤器**


    过滤器，即Filter，定义了一系列交易规则。针对不同的领域或者实体有不同的过滤器，这里主要介绍针对symbol这个实体的过滤器。
    对于symbol来说，有两种过滤器，一种是全局过滤器，一种是针对某个交易对定制的过滤器。


    ---


    ##### **价格过滤器 PRICE FILTER**


    价格过滤器 用于检测订单中 price 参数的合法性。包含以下三个部分:


    1\.min 定义了订单中price允许的最小值


    2\.max 定义了订单中price允许的最大值


    3\.tickSize 定义了订单中price的步进间隔，即price必须等于minPrice+(tickSize的整数倍)


    以上每一项均可为null，为null时代表这一项不再做限制


    逻辑伪代码如下:


    * price &gt;= min

    * price &lt;= max

    * (price-minPrice) % tickSize == 0


    ---


    ##### **数量过滤器&nbsp; QUANTITY FILTER**


    其逻辑和**PRICE FILTER** 类似，不过针对的是订单数量。


    其内部包含三个部分


    1\.min 允许的最小值


    2\.max 允许的最大值


    3\.tickSize &nbsp;步进间隔，即quantity必须等于minQuantity+(tickSize的整数倍)


    以上每一项均可为null，为null时代表这一项不再做限制


    逻辑伪代码如下:


    * quantity&gt;= min

    * quantity&lt;= max

    * (quantity-minQuantity)% tickSize == 0


    ---


    ##### **金额过滤器 QUOTE\_QTY FILTER**


    对于订单的金额做限制


    其内部定义了min允许的最小值


    当min为null时，订单不做限制


    否则限制规则如下：


    1\.对于现价LIMIT类型的订单，需满足 price\*quantity&gt;=min


    2\.对于市价MARKET类型并且是购买类型(orderSide=BUY)订单，需满足quoteQty&gt;=min,(quoteQty,市价按金额下单时必填的金额)


    ---


    ##### **开盘保护过滤器 PROTECTION\_ONLINE FILTER**


    对处于开盘之后指定的时间范围内，对于现价类型的订单的价格进行限制


    该过滤器内部定义了最大价格倍数(maxPriceMultiple)，持续时间(durationSeconds)。


    限制逻辑:当处于交易对开盘后durationSeconds时间范围内，订单类型为现价类（LIMIT）的订单


    须满足订单价格price&lt;=openPrice\*maxPriceMultiple,才会通过（openPrice为开盘价）。


    其他类型的订单或者不在开盘时间范围内的订单不做限制。


    对于maxPriceMultiple,durationSeconds均可为null,为null时，不做开盘保护限制。


    ---


    ##### **现价保护过滤器 PROTECTION\_LIMIT FILTER**


    对于订单类型(orderType)为LIMIT(现价) 类型的订单具有价格保护限制，包含以下两个部分


    1\.buyMaxDeviation 买单最大偏离度，限制了买单价格与最新成交价之间的差值


    2\.sellMaxDeviation 卖单最大偏离度，限制了卖单价格与最新成交价之间的差值


    若没有最新成交价则不做限制，或者以上参数为null,则对应方向类型订单不做限制


    为了通过限价保护，订单price必须满足以下条件(latestPrice为最新成交价)


    买单: price &gt;= latestPrice-latestPrice\*buyMaxDeviation&nbsp;


    卖单: price &lt;= latestPrice+latestPrice\*sellMaxDeviation


    ---


    ##### **市价保护过滤器 PROTECTION\_MARKET FILTER**


    对于订单类型为MARKET的订单具有价格限制保护机制，其内部规定了maxDeviation最大偏差率。


    对于市价类型订单，市场价格须满足以下条件，订单才会通过(sellBestPrice&nbsp; 卖一价格，buyBestPrice
    买一价格，latestPrice 最新成交价,这些数据均通过历史成交数据获得)


    买单: latestPrice + latestPrice\* maxDeviation &gt;= sellBestPrice&nbsp;


    卖单: latestPrice - latestPrice\* maxDeviation &lt;= buyBestPrice


    对于以上情况maxDeviation，latestPrice，sellBestPrice ，buyBestPrice


    均有可能为空或者没有最新成交价，买一价格，卖一价格，则不做限制


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
                  "mc": "SUCCESS",
                  "ma": [],
                  "result": {
                    "time": 1662444177871,                          //时间
                    "version": "7cd2cfab0dc979339f1de904bd90c9cb",  //内容版本
                    "symbols": [                                    //交易对清单
                      {
                        "id": 614,                                  //ID
                        "symbol": "btc_usdt",                       //交易对
                        "state": "ONLINE",                          //交易对状态[ONLINE=上线的;OFFLINE=下线的,DELISTED=退市]
                        "tradingEnabled": true,                     //启用交易
                        "openapiEnabled": true,                     //启用OPENAPI
                        "nextStateTime": null,                      //下一个状态时间
                        "nextState": null,                          //下一个状态
                        "depthMergePrecision": 5,                   //深度合并精度
                        "baseCurrency": "btc",                      //标的资产
                        "baseCurrencyPrecision": 5,                 //标的资产精度
                        "baseCurrencyId": 2,                        //标的资产ID
                        "quoteCurrency": "usdt",                    //报价资产
                        "quoteCurrencyPrecision": 6,                //报价资产精度
                        "quoteCurrencyId": 11,                      //报价资产ID
                        "pricePrecision": 4,                        //交易价格精度
                        "quantityPrecision": 6,                     //交易数量精度
                        "orderTypes": [                             //订单类型[LIMIT=限价单;MARKET=市价单]
                          "LIMIT",
                          "MARKET"
                        ],
                        "timeInForces": [                           //有效方式[GTC=成交为止,一直有效; IOC=无法立即成交(吃单)的部分就撤销; FOK=无法全部立即成交就撤销; GTX=无法成为挂单方就撤销]
                          "GTC",
                          "FOK",
                          "IOC",
                          "GTX"
                        ],
                        "displayWeight": 1,                         //展示权重，越大越靠前
                        "displayLevel": "FULL",                     //展示级别,[FULL=完全展示,SEARCH=搜索展示,DIRECT=直达展示,NONE=不展示]
                        "plates": [],                               //所属板块  eg:22,23,24
                        "filters": [                                //过滤器
                          {
                            "filter": "PROTECTION_LIMIT",
                            "buyMaxDeviation": "0.8"
                            "sellMaxDeviation": "0.8"
                          },
                          {
                            "filter": "PROTECTION_MARKET",
                            "maxDeviation": "0.1"
                          },
                          {
                            "filter": "PROTECTION_ONLINE",
                            "durationSeconds": "300",
                            "maxPriceMultiple": "5"
                          },
                          {
                            "filter": "PRICE",
                            "min": null,
                            "max": null,
                            "tickSize": null
                          },
                          {
                            "filter": "QUANTITY",
                            "min": null,
                            "max": null,
                            "tickSize": null
                          },
                          {
                            "filter": "QUOTE_QTY",
                            "min": null
                          },
                       ]
                      }
                    ]
                  }
                }            
        title: Response
        language: json
---
