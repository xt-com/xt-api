---
title: 获取代理用户信息
position_number: 10
type: get
description: /v4/referal/invite/agent/user/info
parameters:
  -
    name: uidList
    type: List<Long>
    mandatory: true
    default:
    description: 用户ID集合, 示例：[6118530023996, 6118530023997]
    ranges:
  -
    name: startTime
    type: number
    mandatory: true
    default:
    description: 开始时间，示例：20250902
    ranges:
  -
    name: endTime
    type: number
    mandatory: true
    default:
    description: 结束时间，示例：20250905
    ranges:
  -
    name: fromId
    type: number
    mandatory: true
    default:
    description: 起始ID(用于分页)，示例：48739
    ranges:
  -
    name: direction
    type: String
    mandatory: true
    default:
    description: 查询方向: PREV(向前), NEXT(向后)
    ranges: PREV、NEXT
  -
    name: limit
    type: number
    mandatory: true
    default:
    description: 返回条数限制，示例：100
    ranges:
content_markdown: >-

left_code_blocks:
  -
    code_block: |-
      
    title: Java
    language: java
  -
    code_block:
    title: Python
    language: python
right_code_blocks:
  -
    code_block: |-
            [
                {
                    "id": 48739,  // 自增主键
                    "userId": 6118530023996,  // 用户ID
                    "agentId": 5951540495512,  // 代理id(上级代理)
                    "regDate": "2024-08-07",  // 注册日期
                    "agentLevel": 1,  // 代理层级
                    "lstLoginDeviceType": "web",  // 最近登录设备类型
                    "registerInviteCode": "BOAHBL",  // 注册邀请码
                    "totalAssetAmtU": 156.76358008000000000000,  // 所有账户余额折U
                    "depositAmtU1d": 0,  // 日充值金额
                    "depositAmtUCw": 0,  // 自然周充值金额
                    "depositAmtUCm": 0,  // 自然月充值金额
                    "withdrawAmtU1d": 0,  // 日提币金额
                    "withdrawAmtUCw": 0,  // 自然周提币金额
                    "withdrawAmtUCm": 0,  // 自然月提币金额
                    "fstDepositDate": "2025-06-13",  // 首充日期
                    "spotTradeAmtU1d": 0,  // 日现货交易金额
                    "spotTradeAmtUCw": 25.76560000000000000000,  // 自然周现货交易金额
                    "spotTradeAmtUCm": 25.76560000000000000000,  // 自然月现货交易金额
                    "spotTradeFeeU1d": 0,  // 日现货交易手续费
                    "spotTradeFeeUCw": 0.05041839999999999500,  // 自然周现货交易手续费
                    "spotTradeFeeUCm": 0.05041839999999999500,  // 自然月现货交易手续费
                    "contractTradeAmtU1d": 0,  // 日合约交易金额
                    "contractTradeAmtUCw": 0,  // 自然周合约交易金额
                    "contractTradeAmtUCm": 0,  // 自然月合约交易金额
                    "contractTradeFeeU1d": 0,  // 日合约交易手续费
                    "contractTradeFeeUCw": 0,  // 自然周合约交易手续费
                    "contractTradeFeeUCm": 0,  // 自然月合约交易手续费
                    "spotAffiliateDisburseU1d": 0,  // 日现货预估返佣
                    "spotAffiliateDisburseUCw": 0.03097008000000000000,  // 自然周现货预估返佣
                    "spotAffiliateDisburseUCm": 0.03097008000000000000,  // 自然月现货预估返佣
                    "contractAffiliateDisburseU1d": 0,  // 日合约预估返佣
                    "contractAffiliateDisburseUCw": 0,  // 自然周合约预估返佣
                    "contractAffiliateDisburseUCm": 0,  // 自然月合约预估返佣
                    "closeProfitU1d": 0,  // 日已平仓盈亏
                    "closeProfitUCw": 0,  // 自然周已平仓盈亏
                    "closeProfitUCm": 0,  // 自然月已平仓盈亏
                    "userTradesTimes1d": "0",  // 用户日成交时间跨度
                    "userTradesTimesCw": "0",  // 用户自然周成交时间跨度
                    "userTradesTimesCm": "0",  // 用户自然月成交时间跨度
                    "userTransactionHours1d": "0",  // 用户日成交小时数
                    "userTransactionHoursCw": "0.5",  // 用户自然周成交小时数
                    "userTransactionHoursCm": "0.5",  // 用户自然月成交小时数
                    "tradesNumber1d": "0",  // 日交易笔数
                    "tradesNumberCw": "0.3333333333333333",  // 自然周交易笔数
                    "tradesNumberCm": "0.3333333333333333",  // 自然月交易笔数
                    "contractAvgLeverage1d": "0.00000000000000000000",  // 日平均杠杆倍数
                    "contractAvgLeverageCw": "0.00000000000000000000",  // 自然周平均杠杆倍数
                    "contractAvgLeverageCm": "0.00000000000000000000",  // 自然月平均杠杆倍数
                    "bizDate": "20250902",  // 业务日期
                    "adsUserAllSymbolTradeRespDTOList": [  // 用户币对交易详情列表
                    {
                        "symbolId": 9605,  // 币对ID
                        "symbol": "fet_usdt",  // 币对名称
                        "spotTradeAmtU1d": 0,  // 日现货交易额
                        "contractTradeAmtU1d": 0,  // 日合约交易额
                        "bizDate": "20250902",  // 业务日期
                        "spotTradeAmtUCw": 25.76560000000000000000,  // 周现货交易额
                        "spotTradeAmtUCm": 25.76560000000000000000,  // 月现货交易额
                        "contractTradeAmtUCw": 0,  // 周合约交易额
                        "contractTradeAmtUCm": 0  // 月合约交易额
                    }
                    ]
                }
            ]
    title: Response
    language: json
---
