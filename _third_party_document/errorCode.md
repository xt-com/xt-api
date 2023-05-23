---
title: Error Code
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
left_code_blocks:
- code_block:
  title:
  language:
  right_code_blocks:
- code_block:
  title:
  language:
---


