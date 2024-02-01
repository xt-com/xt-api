---
title: response code
position_number: 9
parameters:
- name:
content:
content_markdown: |-
    | httpStatus | description |
    | --- | --- |
    | 200 | The request is successful, please check the rc and mc sections further |
    | 404 | interface does not exist |
    | 429 | The request is too frequent, please control the request rate according to the speed limit requirement |
    | 500 | Service exception |
    | 502 | Gateway exception |
    | 503 | Service unavailable, please try again later |
    

    | rc | return Code |
    | --- | --- |
    | 0 | business success |
    | 1 | business failure |
    
    
    | mc | message code |
    | --- | --- |
    | SUCCESS | success |
    | FAILURE | fail |
    | AUTH_001 | missing request header validate-appkey |
    | AUTH_002 | missing request header validate-timestamp |
    | AUTH_003 | missing request header validate-recvwindow |
    | AUTH_004 | bad request header validate-recvwindow |
    | AUTH_005 | missing request header validate-algorithms |
    | AUTH_006 | bad request header validate-algorithms |
    | AUTH_007 | missing request header validate-signature |
    | AUTH_101 | ApiKey does not exist |
    | AUTH_102 | ApiKey is not activated |
    | AUTH_103 | Signature error |
    | AUTH_104 | Unbound IP request |
    | AUTH_105 | outdated message |
    | AUTH_106 | Exceeded apikey permission |
    | LEVER_ORDER_099 | Already order is being processed |
    | LEVER_ORDER_082 | The position is currently closed and the operation is not supported for the time being. |
    | LEVER_ORDER_081 | Currently, manual processing is not supported. |
    | LEVER_ORDER_080 | The liquidation is currently in progress and the operation is not supported for the time being. |
    | LEVER_ORDER_032 | There is currently no loan or manual repayments can't be made. Please try again. |
    | LEVER_ORDER_031 | Wrong repayment amount. |
    | LEVER_ORDER_006 | Insufficient leverage capital. |
    | LEVER_ORDER_005 | The current maximum loanable amount in the market is insufficient. |
    | LEVER_ORDER_004 | Insufficient loan amount. |
    | LEVER_ORDER_003 | Wrong loan amount. |
    | LEVER_ORDER_001 | Repeat request. |
    | LEVER_1004 | The current sub-account does not have this transaction permission. |
    | GATEWAY_0001  | Trigger risk control  |
    | GATEWAY_0002  | Trigger risk control  |
    | GATEWAY_0003  | Trigger risk control  |
    | GATEWAY_0004  | Trigger risk control  |  

left_code_blocks:
- code_block:
  title:
  language:
  right_code_blocks:
- code_block:
  title:
  language:
---


