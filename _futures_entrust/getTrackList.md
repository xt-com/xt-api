---
title: Get track list(all active)
position_number: 16
type: get
description: /future/trade/v1/entrust/track-list
parameters:
    - 
        name: page
        type: integer
        mandatory: false
        default: 1
        description: page
        ranges:
    -
        name: size
        type: integer
        mandatory: false
        default: 10
        description: Quantity of a single page
        ranges:
    -
        name: endTime
        type: integer
        mandatory: false
        default: N/A
        description:
        ranges:
    -
        name: startTime
        type: integer
        mandatory: false
        default: N/A
        description: start time
        ranges:
    - 
        name: symbol
        type: string
        mandatory: false
        default: N/A
        description: symbol
        ranges:
content_markdown: |-

                 #### **Limit Flow Rules**

                 200/s/apikey
left_code_blocks:
    -
        code_block: "public void getTrackDetail() {\r\n\tString text = HttpUtil.get(URL + \"/data/api/future/trade/v1/entrust/track-list\");\r\n\tSystem.out.println(text);\r\n}"
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
          "result": {
            items:[
              "activationPrice": 0,      //Activation price
              "avgPrice": 0,             //Average price
              "callback": "",            //Callback range configuration 1:PROPORTION 2:FIXED
              "callbackVal": 0,          //Callback value
              "configActivation": false, //Whether to configure activation price
              "createdTime": 0,          //Creat time
              "currentPrice": 0,         //Real-time price, compared with the activation price and order price, to determine the direction of the activation price
              "desc": "",                //Describe
              "executedQty": 0,          //Actual transaction quantity
              "orderSide": "",           //Order side
              "ordinary": true,          //
              "origQty": 0,              //Quantity (Cont)
              "positionSide": "",        //Position side
              "price": 0,                //Order price
              "state": "",               //Order state: NOT_ACTIVATION:inactivated;NOT_TRIGGERED:not triggered;TRIGGERING:triggering;TRIGGERED:triggered;USER_REVOCATION:user revocation;PLATFORM_REVOCATION:platform rejects;EXPIRED:expired;DELEGATION_FAILED:delegation failed
              "stopPrice": 0,            //Trigger price
              "symbol": "",              //Symbol
              "trackId": 0,              //Track id
              "triggerPriceType": "",    //Trigger price type
              "updatedTime": 0           //Update time
            ],
            page: 1,                     //Page
            ps: 10,                      //Page size
            total: 20                    //Total
          },
          "returnCode": 0
        }
      title: Response
      language: json
---