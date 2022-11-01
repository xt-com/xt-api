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
    | AUTH_001 | missing request header xt-validate-appkey |
    | AUTH_002 | missing request header xt-validate-timestamp |
    | AUTH_003 | missing request header xt-validate-recvwindow |
    | AUTH_004 | bad request header xt-validate-recvwindow |
    | AUTH_005 | missing request header xt-validate-algorithms |
    | AUTH_006 | bad request header xt-validate-algorithms |
    | AUTH_007 | missing request header xt-validate-signature |
    | AUTH_101 | ApiKey does not exist |
    | AUTH_102 | ApiKey is not activated |
    | AUTH_103 | Signature error |
    | AUTH_104 | Unbound IP request |
    | AUTH_105 | outdated message |
    | AUTH_106 | Exceeded apikey permission |
    | SYMBOL_001 | Symbol not exist |
    | SYMBOL_002 | Symbol offline |
    | SYMBOL_003 | Symbol suspend trading |
    | SYMBOL_004 | Symbol country disallow trading |
    | ORDER_001 | Platform rejection |
    | ORDER_002 | insufficient funds |
    | ORDER_003 | Trading Pair Suspended |
    | ORDER_004 | no transaction |
    | ORDER_005 | Order not exist |
    | ORDER_006 | Too many open orders |
    | ORDER_F0101 | Trigger Price Filter - Min |
    | ORDER_F0102 | Trigger Price Filter - Max |
    | ORDER_F0103 | Trigger Price Filter - Step Value |
    | ORDER_F0201 | Trigger Quantity Filter - Min |
    | ORDER_F0202 | Trigger Quantity Filter - Max |
    | ORDER_F0203 | Trigger Quantity Filter - Step Value |
    | ORDER_F0301 | Trigger QUOTE_QTY Filter - Min Value |
    | ORDER_F0401 | Trigger PROTECTION_ONLINE Filter |
    | ORDER_F0501 | Trigger PROTECTION_LIMIT Filter |
    | ORDER_F0601 | Trigger PROTECTION_MARKET Filter |
left_code_blocks:
- code_block:
  title:
  language:
  right_code_blocks:
- code_block:
  title:
  language:
---


