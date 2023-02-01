---
title: 获取所有交易对的配置信息
position_number: 3
type: get
description: /future/market/v1/public/symbol/list
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
              "baseCoin": "", //标的资产
              "baseCoinDisplayPrecision": 0, //标的币种显示精度
              "baseCoinPrecision": 0, //标的币种精度
              "contractSize": 0, //合约乘数（面值）
              "contractType": "", //合约类型，永续，交割
              "depthPrecisionMerge": 0, //盘口精度合并
              "initLeverage": 0, //初始杠杆倍数
              "labels": [], //标签
              "liquidationFee": 0, //强平手续费
              "makerFee": 0, //maker手续费
              "maxEntrusts": 0, //最多open条件单
              "maxOpenOrders": 0, //最多open订单
              "minNotional": 0, //最小名义价值
              "minPrice": 0, //最小价格
              "minQty": 0, //最小数量
              "multiplierDown": 0, //限价卖单下限百分比
              "multiplierUp": 0, //限价买单价格上限百分比
              "onboardDate": 0, //上线时间
              "pricePrecision": 0, //价格精度
              "quantityPrecision": 0, //数量精度
              "quoteCoin": "", //报价资产
              "quoteCoinDisplayPrecision": 0, //报价币种显示精度
              "quoteCoinPrecision": 0, //报价币种精度
              "state": 0, //状态
              "supportEntrustType": "", //支持计划委托类型
              "supportOrderType": "", //支持订单类型
              "supportTimeInForce": "", //支持有效方式
              "symbol": "", //交易对
              "takerFee": 0, //taker手续费
              "tradeSwitch": false, //交易对开关
              "underlyingType": "" //标的类型，币本位，u本位
            }
          ],
          "returnCode": 0
        }
      title: Response
      language: json
---