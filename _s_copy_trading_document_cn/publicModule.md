---
title: 公共模块
position_number: 10
parameters:
- name:
content:
content_markdown: >-
  #### **<span id="orderStatusCn">订单状态码及含义</span>**


    | State | 说明 |
    | --- | --- |
    | NEW | 新建 |
    | PARTIALLY_FILLED | 部分成交 |
    | FILLED | 全部成交 |
    | CANCELED | 用户撤单 |
    | REJECTED | 下单失败 |
    | EXPIRED | 过期(time_in_force撤单或溢价撤单) |

  #### **<span id="orderTypeCn">订单类型及含义</span>**

    | Type | 说明 |
    | --- | --- |
    | LIMIT | 限价单 |
    | MARKET | 市价单 |

  #### **<span id="symbolStatuCn">交易对状态及含义</span>**

    | State | 说明 |
    | --- | --- |
    | ONLINE | 上线的 |
    | OFFLINE | 下线的 |
    | DELISTED | 退市的 |

  #### **<span id="timeInForcesCn">有效方式及含义</span>**
    这里定义了订单多久能够失效

    | TimeInForces | 说明 |
    | --- | --- |
    | GTC | 成交为止,一直有效 |
    | IOC | 无法立即成交(吃单)的部分就撤销 |
    | FOK | 无法全部立即成交就撤销 |
    | GTX | 无法成为挂单方就撤销 |

  #### **<span id="depositWithdrawStatusCn">充值/提现记录状态码及含义</span>**


    | Status | 说明 |
    | --- | --- |
    | SUBMIT | 提现: 未冻结 |
    | REVIEW | 提现: 已冻结,待审核 |
    | AUDITED | 提现: 已审核,发送钱包,待上链 |
    | AUDITED_AGAIN | 复审中 |
    | PENDING | 充值/提现: 已上链 |
    | SUCCESS | 完成 |
    | FAIL | 失败 |
    | CANCEL | 已取消 |

  #### **<span id="bizTypeCn">BizType</span>**


    | Status | Description |
    | --- | --- |
    | SPOT | 现货 |
    | LEVER | 杠杠 |
    | FINANCE | 理财 |
    | FUTURES_U | 合约u本位  |
    | FUTURES_C | 合约币本位 |
  

left_code_blocks:
- code_block:
  title:
  language:
  right_code_blocks:
- code_block:
  title:
  language:
---


