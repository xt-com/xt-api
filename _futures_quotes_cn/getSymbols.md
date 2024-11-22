---
title: 获取上架和可交易的交易对配置信息
position_number: 4
type: get
description: /future/market/v3/public/symbol/list
parameters:
content_markdown: 注：**此方法不需要签名**
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
               "baseCoin": "",      //标的资产
               "baseCoinDisplayPrecision": 0,  //标的币种显示精度
               "cnDesc": "",  //合约中文描述
               "cnName": "",  //合约中文名称
               "cnRemark": "",  //合约备注(中文)
               "contractSize": 0,  //合约乘数（面值）
               "contractType": "",  //合约类型，永续，交割
               "deliveryCompletion": false, //交割是否完成
               "deliveryDate": 0,  //交割时间
               "deliveryPrice": 0,  //交割价格
               "depthPrecisionMerge": 0,  //盘口精度合并
               "enDesc": "",      //合约英文描述
               "enName": "",      //合约英文名称
               "enRemark": "",    //合约备注(英文)
               "initLeverage": 0,  //初始杠杆倍数
               "initPositionType": "",  //初始仓位类型
               "isDisplay": false,      //是否展示
               "isOpenApi": false,      //是否支持OpenApi|
               "labels": [],            //标签
               "liquidationFee": 0,     //强平手续费
               "makerFee": 0,           //maker手续费
               "marketTakeBound": 0,    //市价单最多价格偏离
               "maxEntrusts": 0,        //最多open条件单
               "maxNotional": 0,        //最大名义价值
               "maxOpenOrders": 0,      //最多open订单
               "maxPrice": 0,           //预测合约价格上限(原型指数价格上限)
               "minNotional": 0,        //最小名义价值
               "minPrice": 0,           //预测合约价格下限(原型指数价格下限)
               "minQty": 0,             //最小数量
               "minStepPrice": 0,       //最小价格变动单位
               "multiplierDown": 0,     //限价卖单下限百分比
               "multiplierUp": 0,       //限价买单价格上限百分比
               "onboardDate": 0,        //上线时间
               "pair": "",              //标的交易对
               "plates": [],
               "predictEventParam": "",   //事件关联参数
               "predictEventSort": "",    //事件关联排序:WIN 胜, FLAT 平, NEGATIVE 负
               "predictEventType": "",    //预测事件类型:PERPETUAL 永续事件，ONCE 单事件
               "pricePrecision": 0,       //价格精度
               "productType": "",         //合约类型，perpetual, futures，不区分交割间隔
               "quantityPrecision": 0,     //数量精度(废弃)
               "quoteCoin": "",            //报价资产
               "quoteCoinDisplayPrecision": 0,  //报价币种显示精度
               "quoteCoinPrecision": 0,         //报价币种精度
               "baseCoinPrecision": 0,          //标的币种精度
               "state": 0,                    //状态
               "supportEntrustType": "",      //支持计划委托类型
               "supportOrderType": "",        //支持订单类型
               "supportPositionType": "",     //支持仓位类型
               "supportTimeInForce": "",      //支持有效方式
               "symbol": "",                  //交易对
               "symbolGroupId": 0,
               "takerFee": 0,                  //手续费
               "tradeSwitch": false,           //交易对开关
               "underlyingType": ""            //标的类型，币本位，u本位
             } 

          ],
          "returnCode": 0
        }
      title: Response
      language: json
---