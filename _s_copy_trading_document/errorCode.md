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
    | SYMBOL_001 | Symbol not exist |
    | SYMBOL_002 | Symbol offline |
    | SYMBOL_003 | Symbol suspend trading |
    | SYMBOL_004 | Symbol country disallow trading |
    | SYMBOL_005 | The symbol does not support trading via API |
    | ORDER_001 | Platform rejection |
    | ORDER_002 | insufficient funds |
    | ORDER_003 | Trading Pair Suspended |
    | ORDER_004 | no transaction |
    | ORDER_005 | Order not exist |
    | ORDER_006 | Too many open orders |
    | ORDER_007 | The sub-account has no transaction authority |
    | ORDER_008 | The order price or quantity precision is abnormal |
    | ORDER_F0101 | Trigger Price Filter - Min |
    | ORDER_F0102 | Trigger Price Filter - Max |
    | ORDER_F0103 | Trigger Price Filter - Step Value |
    | ORDER_F0201 | Trigger Quantity Filter - Min |
    | ORDER_F0202 | Trigger Quantity Filter - Max |
    | ORDER_F0203 | Trigger Quantity Filter - Step Value |
    | ORDER_F0301 | Trigger QUOTE_QTY Filter - Min Value |
    | ORDER_F0401 | Trigger PROTECTION_ONLINE Filter or PROTECTION_LIMIT Filter |
    | ORDER_F0501 | Trigger PROTECTION_LIMIT Filter - Buy Max Deviation |
    | ORDER_F0502 | Trigger PROTECTION_LIMIT Filter - Sell Max Deviation |
    | ORDER_F0503 | Trigger PROTECTION_LIMIT Filter - Buy Limit Coefficient |
    | ORDER_F0504 | Trigger PROTECTION_LIMIT Filter - Sell Limit Coefficient |
    | ORDER_F0601 | Trigger PROTECTION_MARKET Filter |
    | COMMON_001  | The user does not exist |
    | COMMON_002  | System busy, please try it later |
    | COMMON_003  | Operation failed, please try it later |
    | CURRENCY_001  | Information of currency is abnormal |
    | SYMBOL_001  | Symbol does not exist  |
    | GATEWAY_0001  | Trigger risk control  |
    | GATEWAY_0002  | Trigger risk control  |
    | GATEWAY_0003  | Trigger risk control  |
    | GATEWAY_0004  | Trigger risk control  |  
    | COPY_TRADE_SPOT_000  | The system is busy, please try again later  |
    | COPY_TRADE_SPOT_001  | You are already a leader  |
    | COPY_TRADE_SPOT_002  | You already have a leader  |
    | COPY_TRADE_SPOT_003  | You have already submitted your leader application  |
    | COPY_TRADE_SPOT_004  | You have not completed real-name authentication or your real-name authentication level does not meet the application requirements  |
    | COPY_TRADE_SPOT_005  | Your account total assets do not meet the application requirements  |
    | COPY_TRADE_SPOT_006  | The leader does not exist  |
    | COPY_TRADE_SPOT_007  | You have already submitted your leader application, follow order is not supported  |
    | COPY_TRADE_SPOT_008  | The copy margin exceeds the limit  |
    | COPY_TRADE_SPOT_009  | The copy order ratio exceeds the limit  |
    | COPY_TRADE_SPOT_010  | The number of followers is full  |
    | COPY_TRADE_SPOT_011  | Exceeded the maximum number of followers  |
    | COPY_TRADE_SPOT_012  | The precision of the take-profit price is abnormal  |
    | COPY_TRADE_SPOT_013  | The precision of the stop-loss price is abnormal  |
    | COPY_TRADE_SPOT_014  | The take-profit trigger price must be greater than the latest transaction price  |
    | COPY_TRADE_SPOT_015  | The stop-loss trigger price must be less than the latest transaction price  |
    | COPY_TRADE_SPOT_016  | The leader has spot orders and is not allowed to cancel the termination  |

left_code_blocks:
- code_block:
  title:
  language:
  right_code_blocks:
- code_block:
  title:
  language:
---


