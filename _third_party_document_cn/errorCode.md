---
title: 错误代码
position_number: 9
parameters:
- name:
content:
content_markdown: |-
  | httpStatus | 描述 |
  | --- | --- |
  | 200 | 请求成功，请进一步查看rc、mc部分 |
  | 404 | 接口不存在 |
  | 429 | 请求过于频繁，请按照限速要求，控制请求速率 |
  | 500 | 服务异常 |
  | 502 | 网关异常 |
  | 503 | 服务不可用，请稍后重试 |


    | rc | return Code |
    | --- | --- |
    | 0 | 业务成功 |
    | 1 | 业务失败 |
    
    
    | mc | message code |
    | --- | --- |
    | SUCCESS | 成功 |
    | FAILURE | 失败 |
    | AUTH_001 | 缺少请求头 validate-appkey |
    | AUTH_002 | 缺少请求头 validate-timestamp |
    | AUTH_003 | 缺少请求头 validate-recvwindow |
    | AUTH_004 | 错误的请求头 validate-recvwindow |
    | AUTH_005 | 缺少请求头 validate-algorithms |
    | AUTH_006 | 错误的请求头 validate-algorithms |
    | AUTH_007 | 缺少请求头 validate-signature |
    | AUTH_101 | ApiKey不存在 |
    | AUTH_102 | ApiKey未激活 |
    | AUTH_103 | 签名错误 |
    | AUTH_104 | 非绑定IP请求 |
    | AUTH_105 | 报文过时 |
    | AUTH_106 | 超出apikey权限 |
    
left_code_blocks:
- code_block:
  title:
  language:
  right_code_blocks:
- code_block:
  title:
  language:
---


