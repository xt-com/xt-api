---
title: Get Configuration Information for Listed And Tradeable Symbols
position_number: 4
type: get
description: /future/market/v3/public/symbol/list
parameters:
content_markdown: Note：This method does not require a signature.
left_code_blocks:
    -
        code_block: "public void getKLine() {\r\n\tString text = HttpUtil.get(URL + \"/data/api/future/market/v1/getKLine?market=btc_usdt&type=1min&since=0\");\r\n\tSystem.out.println(text);\r\n}"
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
                 "baseCoin": "",      //Target Assets
                 "baseCoinDisplayPrecision": 0,  //Displayed target currency precision
                 "cnDesc": "",  //Chinese description of the contract
                 "cnName": "",  //Contract Chinese name
                 "cnRemark": "",  //Contract Remarks (Chinese)
                 "contractSize": 0,  //Contract multiplier(face value)
                 "contractType": "",  //Contract type, perpetual, delivery
                 "deliveryCompletion": false, //Whether the delivery is completed
                 "deliveryDate": 0,  //delivery time
                 "deliveryPrice": 0,  //delivery price
                 "depthPrecisionMerge": 0,  //Handicap Precision Consolidation
                 "enDesc": "",      //English description of the contract
                 "enName": "",      //Contract English name
                 "enRemark": "",    //Contract Remarks (English)
                 "initLeverage": 0,  //Initial leverage
                 "initPositionType": "",  //Initial position type
                 "isDisplay": false,      //whether to display
                 "isOpenApi": false,      //Whether to support OpenApi
                 "labels": [],            //Label
                 "liquidationFee": 0,     //Forced liquidation fee
                 "makerFee": 0,           //Maker fee
                 "marketTakeBound": 0,    //Market order maximum price deviation
                 "maxEntrusts": 0,        //Maximum active orders
                 "maxNotional": 0,        //Maximum Notional Value
                 "maxOpenOrders": 0,      //Maximum open orders
                 "maxPrice": 0,           //Maximum price
                 "minNotional": 0,        //Minimum notional value
                 "minPrice": 0,           //Minimum price
                 "minQty": 0,             //Minimum quantity
                 "minStepPrice": 0,       //Smallest tick
                 "multiplierDown": 0,     //Floor percentage of sell limit order
                 "multiplierUp": 0,       //Cap percentage of buy limit order
                 "onboardDate": 0,        //List time
                 "pair": "",              //Target trading pair
                 "plates": [],
                 "predictEventParam": "",   //Event Correlation Parameters
                 "predictEventSort": "",    //Event Correlation Sorting: WIN wins, FLAT draws, NEGATIVE loses
                 "predictEventType": "",    //Forecast event type: PERPETUAL perpetual event, ONCE single event
                 "pricePrecision": 0,       //Price precision
                 "productType": "",         //Contract type, perpetual, futures, regardless of delivery interval
                 "quantityPrecision": 0,     //Quantity precision (Deprecated)
                 "quoteCoin": "",            //Quote currency
                 "quoteCoinDisplayPrecision": 0,  //Displayed quote currency precision
                 "quoteCoinPrecision": 0,         //Quote currency precision
                 "baseCoinPrecision": 0,          //Target currency precision
                 "state": 0,                    //Status
                 "supportEntrustType": "",      //Trigger order type supported
                 "supportOrderType": "",        //Order type supported
                 "supportPositionType": "",     //Support position type
                 "supportTimeInForce": "",      //Valid ways supported
                 "symbol": "",                  //Trading pair
                 "symbolGroupId": 0,
                 "takerFee": 0,                  //Taker fee
                 "tradeSwitch": false,           //Trading pair switch
                 "underlyingType": ""            //Target type, Coin-M,USDT-M
           }
          ],
          "returnCode": 0
        }
      title: Response
      language: json
---