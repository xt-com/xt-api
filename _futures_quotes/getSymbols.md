---
title: Get Configuration Information for All Trading Pairs
position_number: 3
type: get
description: /future/market/v1/public/symbol/list
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
              "baseCoin": "", //Target Assets
              "baseCoinDisplayPrecision": 0, //Displayed target currency precision
              "baseCoinPrecision": 0, //Target currency precision
              "contractSize": 0, //Contract multiplier(face value)
              "contractType": "", //Contract type, perpetual, delivery
              "depthPrecisionMerge": 0, //Handicap Precision Consolidation
              "initLeverage": 0, //Initial leverage
              "labels": [], //Label
              "liquidationFee": 0, //Forced liquidation fee
              "makerFee": 0, //Maker fee
              "maxEntrusts": 0, //Maximum active orders
              "maxOpenOrders": 0, //Maximum open orders
              "minNotional": 0, //Minimum notional value
              "minPrice": 0, //Minimum price
              "minQty": 0, //Minimum quantity
              "multiplierDown": 0, //Floor percentage of sell limit order
              "multiplierUp": 0, //Cap percentage of buy limit order
              "onboardDate": 0, //List time
              "pricePrecision": 0, //Price precision
              "quantityPrecision": 0, //Quantity precision
              "quoteCoin": "", //Quote currency
              "quoteCoinDisplayPrecision": 0, //Displayed quote currency precision
              "quoteCoinPrecision": 0, //Quote currency precision
              "state": 0, //Status
              "supportEntrustType": "", //Trigger order type supported
              "supportOrderType": "", //Order type supported
              "supportTimeInForce": "", //Valid ways supported
              "symbol": "", //Trading pair
              "takerFee": 0, //Taker fee
              "tradeSwitch": false, //Trading pair switch
              "underlyingType": "" //Target type, Coin-M,USDT-M
            }
          ],
          "returnCode": 0
        }
      title: Response
      language: json
---