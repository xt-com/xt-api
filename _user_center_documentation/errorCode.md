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
    | NO_OPERATION_PERMISSION | current account does not have permission to operate |
    | PERMISSION_LIMIT | it's not allowed to operate other user resources, such as: delete other user apiKey or sub-account |
    | ACCOUNT_HAVE_API | account has an apikey that cannot be deleted |
    | ACCOUNT_NAME_EXIST | account name already exists |
    | SUB_ACCOUNT_LIMIT | the number of sub-accounts exceeds the limit |
    | MASTER_ACCOUNT_REMOVE_LIMIT | deletion of master account is not allowed |
    
left_code_blocks:
- code_block:
  title:
  language:
  right_code_blocks:
- code_block:
  title:
  language:
---


