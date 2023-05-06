---
title: Public module
position_number: 10
parameters:
- name:
content:
content_markdown: >-
  #### **<span id="orderStatus">Order state</span>**


    | State | Description |
    | --- | --- |
    | NEW | The order has been accepted by the engine. |
    | PARTIALLY_FILLED | A part of the order has been filled. |
    | FILLED | The order has been completed. |
    | CANCELED | The order has been canceled by the user. |
    | REJECTED | The order was not accepted by the engine and not processed. |
    | EXPIRED | The order has expired (e.g. Order canceled due to timeout or canceled due to premium) |  

  #### **<span id="orderType">Order type</span>**

    | Type | Description |
    | --- | --- |
    | LIMIT | Limit price order |
    | MARKET | Market price order |

  #### **<span id="symbolStatuCn">Symbol state</span>**

    | State | Description |
    | --- | --- |
    | ONLINE | The symbol is online |
    | OFFLINE | The symbol is offline |
    | DELISTED | The symbol has been delisted |

  #### **<span id="timeInForces">Time in force</span>**
    This sets how long an order will be active before expiration.

    | TimeInForces | Description |
    | --- | --- |
    | GTC | It remains valid until the transaction is concluded. |
    | IOC | ancel the part that cannot be transacted immediately (taking orders) |
    | FOK | Cancellation if all transactions cannot be completed immediately |
    | GTX | Revoke if unable to become a pending party |

  #### **<span id="depositWithdrawStatus">Deposit/Withdraw status</span>**


    | Status | Description |
    | --- | --- |
    | SUBMIT | The withdrawal amount is not frozen. |
    | REVIEW | The withdrawal amount has been frozen and is pending review. |
    | AUDITED | The withdraw has been reviewed and is ready to on-chaining. |
    | AUDITED_AGAIN | Reexamine |
    | PENDING | The deposit or withdraw is already on-chaining.  |
    | SUCCESS | The deposit or withdraw is success. |
    | FAIL | The deposit or withdraw failed. |
    | CANCEL | The deposit or withdraw has been canceled by the user. |

  #### **<span id="bizType">BizType</span>**


    | Status | Description |
    | --- | --- |
    | SPOT | spot account |
    | LEVER | Leverage account |
    | FINANCE | Financial account |
    | FUTURES_U | USDT-M futures account  |
    | FUTURES_C | COIN-M futures account |
  

left_code_blocks:
- code_block:
  title:
  language:
  right_code_blocks:
- code_block:
  title:
  language:
---


