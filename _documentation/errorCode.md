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
    | ORDER_F0401 | Trigger PROTECTION_ONLINE Filter |
    | ORDER_F0501 | Trigger PROTECTION_LIMIT Filter - Buy Max Deviation |
    | ORDER_F0502 | Trigger PROTECTION_LIMIT Filter - Sell Max Deviation |
    | ORDER_F0601 | Trigger PROTECTION_MARKET Filter |
    | COMMON_001  | The user does not exist |
    | COMMON_002  | System busy, please try it later |
    | COMMON_003  | Operation failed, please try it later |
    | CURRENCY_001  | Information of currency is abnormal |
    | DEPOSIT_001  | Deposit is not open |
    | DEPOSIT_002  | The current account security level is low, please bind any two security verifications in mobile phone/email/Google Authenticator before deposit |
    | DEPOSIT_003  | The format of address is incorrect, please enter again |
    | DEPOSIT_004  | The address is already exists, please enter again |
    | DEPOSIT_005  | Can not find the address of offline wallet |
    | DEPOSIT_006  | No deposit address, please try it later |
    | DEPOSIT_007  | Address is being generated, please try it later |
    | DEPOSIT_008  | Deposit is not available |
    | WITHDRAW_001  | Withdraw is not open |
    | WITHDRAW_002  | The withdrawal address is invalid |
    | WITHDRAW_003  | The current account security level is low, please bind any two security verifications in mobile phone/email/Google Authenticator before withdraw |
    | WITHDRAW_004  | The withdrawal address is not added |
    | WITHDRAW_005  | The withdrawal address cannot be empty |
    | WITHDRAW_006  | Memo cannot be empty |
    | WITHDRAW_008  | Risk control is triggered, withdraw of this currency is not currently supported |
    | WITHDRAW_009  | Withdraw failed, some assets in this withdraw are restricted by T+1 withdraw |
    | WITHDRAW_010  | The precision of withdrawal is invalid |
    | WITHDRAW_011  | free balance is not enough |
    | WITHDRAW_012  | Withdraw failed, your remaining withdrawal limit today is not enough |
    | WITHDRAW_013  | Withdraw failed, your remaining withdrawal limit today is not enough, the withdrawal amount can be increased by completing a higher level of real-name authentication |
    | WITHDRAW_014  | This withdrawal address cannot be used in the internal transfer function, please cancel the internal transfer function before submitting |
    | WITHDRAW_015  | The withdrawal amount is not enough to deduct the handling fee |
    | WITHDRAW_016  | This withdrawal address is already exists |
    | WITHDRAW_017  | This withdrawal has been processed and cannot be canceled |
    | WITHDRAW_018  | Memo must be a number |
    | WITHDRAW_019  | Memo is incorrect, please enter again |
    | WITHDRAW_020  | Your withdrawal amount has reached the upper limit for today, please try it tomorrow |
    | WITHDRAW_021  | Your withdrawal amount has reached the upper limit for today, you can only withdraw up to {0} this time |
    | WITHDRAW_022  | Withdrawal amount must be greater than {0} |
    | WITHDRAW_023  | Withdrawal amount must be less than {0} |
    | WITHDRAW_024  | Withdraw is not supported |
    | WITHDRAW_025  | Please create a FIO address in the deposit page  |
    | FUND_001  | Duplicate request (a bizId can only be requested once)  |
    | FUND_002  | Insufficient account balance  |
    | FUND_003  | Transfer operations are not supported (for example, sub-accounts do not support financial transfers)  |
    | FUND_004  | Unfreeze failed  |
    | FUND_005  | Transfer prohibited  |
    | FUND_014  | The transfer-in account id and transfer-out account ID cannot be the same  |
    | FUND_015  | From and to business types cannot be the same  |
    | FUND_016  | Leverage transfer, symbol cannot be empty  |
    | FUND_017  | Parameter error  |
    | FUND_018  | Invalid freeze record  |
    | FUND_019  | Freeze users not equal  |
    | FUND_020  | Freeze currency are not equal  |
    | FUND_021  | Operation not supported  |
    | FUND_022  | Freeze record does not exist  |
    | FUND_044  | The maximum length of the amount is 113 and cannot exceed the limit  |
    | SYMBOL_001  | Symbol does not exist  |
    | TRANSFER_001  | Duplicate request (a bizId can only be requested once)  |
    | TRANSFER_002  | Insufficient account balance  |
    | TRANSFER_003  | User not registered  |
    | TRANSFER_004  | The currency is not allowed to be transferred  |
    | TRANSFER_005  | The user's currency is not allowed to be transferred  |
    | TRANSFER_006  | Transfer prohibited  |
    | TRANSFER_007  | Request timed out  |
    | TRANSFER_008  | Transferring to a leveraged account is abnormal  |
    | TRANSFER_009  | Departing from a leveraged account is abnormal  |
    | TRANSFER_010  | Leverage cleared, transfer prohibited  |
    | TRANSFER_011  | Leverage with borrowing, transfer prohibited  |
    | TRANSFER_012  | Currency transfer prohibited  |
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


