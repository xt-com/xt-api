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
            eg: 2e14d2cd5czcb2c2af2c1db65078d075
        ranges:
content_markdown: >-
    #### **FILTER**


    Filter, defines a series of trading rules. There are different filters for different fields or entities. Here we mainly introduce the filter for the entity symbol.
    For symbols, there are two kinds of filters, one is a global filter, and the other is a filter customized for a certain trading pair.


    ##### **PRICE FILTER**


    The price filter is used to check the validity of the price parameter in the order. Contains the following three parts:


    1\.min Defines the minimum allowable price in the order


    2\.max Defines the maximum price allowed in the order


    3\.tickSize Defines the step interval of price in the order, that is, price must be equal to minPrice+(integer multiple of tickSize)


    Each of the above items can be null, when it is null, it means that this item is no longer restricted


    The logical pseudocode is as follows:


    * price &gt;= min

    * price &lt;= max

    * price % tickSize == 0


    ##### **Current Price Protection Filter(PROTECTION\_LIMIT FILTER)**


    There are price protection restrictions for orders whose order type (orderType) is LIMIT, including the following two parts：


    1\.buyMaxDeviation The maximum deviation of the buy order, which limits the difference between the buy order price and the latest transaction price


    2\.sellMaxDeviation The maximum deviation of the sell order, which limits the difference between the sell order price and the latest transaction price


    If there is no latest transaction price, there will be no restrictions, or if the above parameters are null, the corresponding direction type orders will not be restricted.


    In order to pass the limit price protection, the order price must meet the following conditions (latestPrice is the latest transaction price)


    buy order: price &gt;= latestPrice-latestPrice\*buyMaxDeviation&nbsp;


    sell order: price &lt;= latestPrice+latestPrice\*sellMaxDeviation


    ##### **Market price protection filter(PROTECTION\_MARKET FILTER)**


    There is a price limit protection mechanism for orders of the order type MARKET, which internally specifies the maximum deviation rate(maxDeviation).


    For market type orders, the market price must meet the following conditions for the order to pass(sellBestPrice&nbsp; sell one price，buyBestPrice
    buy one price，latestPrice The latest transaction price, these data are obtained through historical transaction data)


    buy order: latestPrice + latestPrice\* maxDeviation &gt;= sellBestPrice&nbsp;


    sell order: latestPrice - latestPrice\* maxDeviation &lt;= buyBestPrice


    For the above situation maxDeviation,latestPrice,sellBestPrice,buyBestPrice


    All may be empty or there is no latest transaction price, buy one price, sell one price, there is no limit


    ##### **Open protection filter(PROTECTION\_ONLINE FILTER)**


    Limit the price of orders of the MARKET type within the specified time range after the opening


    The maximum price multiple is defined inside this filter(maxPriceMultiple)，duration(durationSeconds)。


    Limitation logic: when it is within the durationSeconds time range after the opening of the symbol, Orders with an order type of LIMIT must meet the following conditions to pass


    price&lt;=openPrice\*maxPriceMultiple,（openPrice is the opening price）.


    There are no restrictions on other types of orders or orders outside the opening time frame.


    For maxPriceMultiple, durationSeconds can be null, when they are null, no opening protection limit is applied.


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

    * quantity% tickSize == 0


    ##### **Amount filter(QUOTE\_QTY FILTER)**


    Limit the amount of the order


    It internally defines the minimum allowable value-min


    When min is null, the order is not limited


    Otherwise the restriction rules are as follows:


    1\.For orders of the LIMIT type,must meet the following conditions: price\*quantity&gt;=min


    2\.For orders of the MARKET type and BUY type,must meet the following conditions: quoteQty&gt;=min,(quoteQty,The required amount when placing an order of MARKET type by amount)
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
