---
title: Public module
position_number: 9
parameters:
- name:
content:
content_markdown: >-
  #### **<span id="depositWithdrawStatus">Deposit/Withdraw status</span>**


    | Status | Description |
    | --- | --- |
    | SUBMIT | The withdrawal amount is not frozen. |
    | REVIEW | The withdrawal amount has been frozen and is pending review. |
    | AUDITED | The withdraw has been reviewed and is ready to on-chaining. |
    | PENDING | The deposit or withdraw is already on-chaining.  |
    | SUCCESS | The deposit or withdraw is success. |
    | FAIL | The deposit or withdraw failed. |
    | CANCEL | The deposit or withdraw has been canceled by the user. |

  #### **<span id="orderStatus">Order state</span>**

    | State | Description |
    | --- | --- |
    | NEW | The order has been accepted by the engine. |
    | PARTIALLY_FILLED | A part of the order has been filled. |
    | FILLED | The order has been completed. |
    | CANCELED | The order has been canceled by the user. |
    | REJECTED | The order was not accepted by the engine and not processed. |
    | EXPIRED | The order has expired (e.g. Order canceled due to timeout or canceled due to premium) |   

  #### **<span id="symbolStatuCn">Symbol state</span>**

    | State | Description |
    | --- | --- |
    | ONLINE | The symbol is online |
    | OFFLINE | The symbol is offline |
    | DELISTED | The symbol has been delisted |
  

left_code_blocks:
- code_block:
  title:
  language:
  right_code_blocks:
- code_block:
  title:
  language:
---


