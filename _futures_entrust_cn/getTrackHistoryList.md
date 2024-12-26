---
title: 查询历史跟踪委托（非活跃）
position_number: 19
type: get
description: /future/trade/v1/entrust/track-list-history
parameters:
    -
        name: direction
        type: string
        mandatory: false
        default: NEXT
        description: 方向（PREV:上一页；NEXT:下一页）
        ranges: PREV;NEXT
    - 
        name: limit
        type: integer
        mandatory: false
        default: 10
        description: 条数
        ranges:
    -
        name: id
        type: integer
        mandatory: false
        default: N/A
        description:
        ranges:
    -
        name: endTime
        type: integer
        mandatory: false
        default: N/A
        description: 结束时间
        ranges:
    -
        name: startTime
        type: integer
        mandatory: false
        default: N/A
        description: 起始时间
        ranges: 
    - 
        name: symbol
        type: string
        mandatory: false
        default: N/A
        description: 交易对
        ranges:
content_markdown: |-

               #### **限流规则**

               200/s/apikey
left_code_blocks:
    -
        code_block: "public void getTrackDetail() {\r\n\tString text = HttpUtil.get(URL + \"/data/api/future/trade/v1/entrust/track-list-history\");\r\n\tSystem.out.println(text);\r\n}"
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
            hasNext: true,               //是否有下一页
            hasPre: true,                //是否有上一页
            items:[
              "activationPrice": 0,      //激活价格，如果没有配置，则用当前价格为激活价格
              "avgPrice": 0,             //实际成交均价
              "callback": "",            //回调幅度配置 1比例 2固定
              "callbackVal": 0,          //回调幅度配置值，大于0
              "configActivation": false, //是否配置激活价格
              "createdTime": 0,          //创建时间
              "currentPrice": 0,         //下单时对应类型的实时价格，激活价格和下单行情价格比较，判断激活价格的方向
              "desc": "",                //描述，撤销、委托失败等描述
              "executedQty": 0,          //实际成交数量
              "orderSide": "",           //买卖方向
              "ordinary": true,          //
              "origQty": 0,              //数量（张）
              "positionSide": "",        //持仓方向
              "price": 0,                //订单价格
              "state": "",               //订单状态 NOT_ACTIVATION: 未激活；NOT_TRIGGERED：新建委托（未触发）；TRIGGERING：触发中；TRIGGERED：已触发；USER_REVOCATION：用户撤销；PLATFORM_REVOCATION：平台撤销（拒绝）；EXPIRED：已过期;DELEGATION_FAILED: 委托失败
              "stopPrice": 0,            //触发价格
              "symbol": "",              //交易对
              "trackId": 0,              //跟踪委托id
              "triggerPriceType": "",    //触发价格类型
              "updatedTime": 0           //更新时间
            ]
          },
          "returnCode": 0
        }
      title: Response
      language: json
---