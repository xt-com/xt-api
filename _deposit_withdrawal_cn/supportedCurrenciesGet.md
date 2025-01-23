---
title: 获取XT可充提的币种
position_number: 1
type: get
description: /v4/public/wallet/support/currency
parameters:
    

content_markdown: >-
    #### **备注**

    currency  、chain 字段需要在后续充值/提现接口中使用
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
                  "mc": "string",
                  "ma": [
                    {}
                  ],
                  "result": [
                    {
                        "currency": "BTC",                  //币种
                        "supportChains": [
                            {
                                "chain": "Bitcon",             //支持的转账网络
                                "depositEnabled": true,        //是否支持充值，true:支持，false:不支持
                                "withdrawEnabled": true,       //是否支持提现，true:支持，false:不支持
                                "contract": "futureAddress",   //合约地址
                                "depositMinAmount": 1,         //最小充值数量
                                "depositFeeRate": 0.2,         //充值费率，百分比
                                "depositConfirmations": 2,     //充值确认块数
                                "withdrawMinAmount": 10,       //最小提现数量
                                "withdrawPrecision": 4,        //提币数量精度
                                "withdrawFeeAmount": 0.2,      //提现手续费
                                "withdrawFeeCurrency": "btc",  //提币手续费币种名称
                            }
                        ]           
                    },
                    {
                        "currency": "ETF",                  //币种
                        "supportChains": [
                            {
                                "chain": "Ethereum",           //支持的转账网络
                                "depositEnabled": true,        //是否支持充值，true:支持，false:不支持
                                "withdrawEnabled": true,       //是否支持提现，true:支持，false:不支持
                                "contract": "futureAddress",   //合约地址
                                "depositMinAmount": 1,         //最小充值数量
                                "depositFeeRate": 0.2,         //充值费率，百分比
                                "depositConfirmations": 2,     //充值确认块数
                                "withdrawMinAmount": 10,       //最小提现数量
                                "withdrawPrecision": 4,        //提币数量精度
                                "withdrawFeeAmount": 0.2,      //提现手续费
                                "withdrawFeeCurrency": "eth",  //提币手续费币种名称
                            }
                        ]
                    }
                  ]
                }
        title: Response
        language: json
---
