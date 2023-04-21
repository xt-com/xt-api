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
        type: array
        mandatory: false
        default:
        description: 'Collection of trading pairs. Priority is higher than symbol. eg: btc_usdt,eth_usdt'
        ranges:
    -
        name: version
        type: string
        mandatory: false
        default:
        description: |-
            Version number, when the request version number is consistent with the response content version, the list will not be returned, reducing IO
            eg: 2e14d2cd5czcb2c2af2c1db6
        ranges:
content_markdown: >-
    #### **Limit Flow Rules**


    1\.single symbol：100/s/ip


    2\.multiple symbols：10/s/ip


    ---


    #### **FILTER**


    Filter, defines a series of trading rules. There are different filters for different fields or entities. Here we mainly introduce the filter for the entity symbol.
    For symbols, there are two kinds of filters, one is a global filter, and the other is a filter customized for a certain trading pair.


    ---


    ##### **PRICE FILTER**


    The price filter is used to check the validity of the price parameter in the order. Contains the following three parts:


    1\.min Defines the minimum allowable price in the order


    2\.max Defines the maximum price allowed in the order


    3\.tickSize Defines the step interval of price in the order, that is, price must be equal to minPrice+(integer multiple of tickSize)


    Each of the above items can be null, when it is null, it means that this item is no longer restricted


    The logical pseudocode is as follows:


    * price &gt;= min

    * price &lt;= max

    * (price-minPrice) % tickSize == 0


    ---


    ##### **QUANTITY FILTER**


    The logic is similar to **PRICE FILTER** ,but for the order quantity.


    It contains three parts:


    1\.min minimum allowed


    2\.max maximum allowed


    3\.tickSize &nbsp;Step interval, that is, quantity must be equal to minQuantity+(integer multiple of tickSize)


    Each of the above items can be null, when it is null, it means that this item is no longer restricted


    The logical pseudocode is as follows:


    * quantity&gt;= min

    * quantity&lt;= max

    * (quantity-minQuantity)% tickSize == 0


    ---


    ##### **QUOTE\_QTY FILTER**


    Limit the amount of the order


    It internally defines the minimum allowable value-min


    When min is null, the order is not limited


    Otherwise the restriction rules are as follows:


    1\.For orders of the LIMIT type,must meet the following conditions: price\*quantity&gt;=min


    2\.For orders of the MARKET type and BUY type,must meet the following conditions: quoteQty&gt;=min,(quoteQty,The required amount when placing an order of MARKET type by amount)


    ---


    ##### **PROTECTION\_LIMIT FILTER**


    There are price protection restrictions for orders whose order type (orderType) is LIMIT, including the following two parts：


    1\.buyMaxDeviation The maximum deviation of the buy order, which limits the difference between the buy order price and the latest transaction price


    2\.sellMaxDeviation The maximum deviation of the sell order, which limits the difference between the sell order price and the latest transaction price


    If there is no latest transaction price, there will be no restrictions, or if the above parameters are null, the corresponding direction type orders will not be restricted.


    In order to pass the limit price protection, the order price must meet the following conditions (latestPrice is the latest transaction price)


    buy order: price &gt;= latestPrice-latestPrice\*buyMaxDeviation&nbsp;


    sell order: price &lt;= latestPrice+latestPrice\*sellMaxDeviation


    ---


    ##### **PROTECTION\_MARKET FILTER**


    There is a price limit protection mechanism for orders of the order type MARKET, which internally specifies the maximum deviation rate(maxDeviation).


    For market type orders, the market price must meet the following conditions for the order to pass(sellBestPrice&nbsp; sell one price，buyBestPrice
    buy one price，latestPrice The latest transaction price, these data are obtained through historical transaction data)


    buy order: latestPrice + latestPrice\* maxDeviation &gt;= sellBestPrice&nbsp;


    sell order: latestPrice - latestPrice\* maxDeviation &lt;= buyBestPrice


    For the above situation maxDeviation,latestPrice,sellBestPrice,buyBestPrice


    All may be empty or there is no latest transaction price, buy one price, sell one price, there is no limit


    ---


    ##### **PROTECTION\_ONLINE FILTER**


    Limit the price of orders of the MARKET type within the specified time range after the opening


    The maximum price multiple is defined inside this filter(maxPriceMultiple)，duration(durationSeconds)。


    Limitation logic: when it is within the durationSeconds time range after the opening of the symbol, Orders with an order type of LIMIT must meet the following conditions to pass


    price&lt;=openPrice\*maxPriceMultiple,（openPrice is the opening price）.


    There are no restrictions on other types of orders or orders outside the opening time frame.


    For maxPriceMultiple, durationSeconds can be null, when they are null, no opening protection limit is applied.



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
                    "time": 1662444177871,  
                    "version": "7cd2cfab0dc979339f1de904bd90c9cb",  
                    "symbols": [                   
                      {
                        "id": 614,                   //ID
                        "symbol": "btc_usdt",         
                        "state": "ONLINE",           //symbol state [ONLINE;OFFLINE,DELISTED]
                        "tradingEnabled": true,
                        "openapiEnabled": true,      //Openapi transaction is available or not
                        "nextStateTime": null,              
                        "nextState": null,                 
                        "depthMergePrecision": 5,    //Depth Merge Accuracy
                        "baseCurrency": "btc",                  
                        "baseCurrencyPrecision": 5,              
                        "baseCurrencyId": 2,                 
                        "quoteCurrency": "usdt",             
                        "quoteCurrencyPrecision": 6,        
                        "quoteCurrencyId": 11,             
                        "pricePrecision": 4,         //Transaction price accuracy
                        "quantityPrecision": 6,           
                        "orderTypes": [              //Order Type [LIMIT;MARKET]
                          "LIMIT",
                          "MARKET"
                        ],
                        "timeInForces": [            //Effective ways [GTC=It remains valid until the transaction is concluded; IOC=Cancel the part that cannot be transacted immediately (taking orders); FOK=Cancellation if all transactions cannot be completed immediately; GTX=Revoke if unable to become a pending party]
                          "GTC",
                          "FOK",
                          "IOC",
                          "GTX"
                        ],
                        "displayWeight": 1,          //Show the weight, the greater the weight, the more forward
                        "displayLevel": "FULL",      //Presentation level, [FULL=Full display,SEARCH=Search display,DIRECT=Direct display,NONE=Don't show]
                        "plates": [],                //  eg:22,23,24
                        "filters": [                       
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
