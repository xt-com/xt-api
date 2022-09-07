---
title: 错误代码
position_number: 9
parameters:
- name:
content:
content_markdown: |-
    | httpStatus | 错误信息 |
    | --- | --- |
    | 200 | 成功，请进一步查看rc、mc部分 |
    | 404 | 接口不存在 |
    | 429 | 请求过于频繁，请控制请求速率 |
    | 500 | 服务异常 |
    | 502 | 网关异常 |
    | 503 | 服务不可用，请稍后再试 |
    

    | rc | 错误信息 |
    | --- | --- |
    | 0 | 成功 |
    | 1 | 失败 |
    
    
    | mc | 错误信息 |
    | --- | --- |
    | AUTH_P_01_0 | 缺少请求头 xt-validate-appkey |
    | AUTH_P_01_1 | 错误请求头 xt-validate-appkey |
    | AUTH_P_02_0 | 缺少请求头 xt-validate-timestamp |
    | AUTH_P_02_0 | 错误请求头 xt-validate-timestamp |
    | AUTH_P_03_0 | 缺少请求头 xt-validate-recvwindow |
    | AUTH_P_03_1 | 错误请求头 xt-validate-recvwindow |
    | AUTH_P_04_0 | 缺少请求头 xt-validate-algorithms |
    | AUTH_P_04_1 | 错误请求头 xt-validate-algorithms |
    | AUTH_P_05_0 | 缺少请求头 xt-validate-signature |
    | AUTH_P_05_1 | 错误请求头 xt-validate-signature |
    | AUTH_B_01 | ApiKey 未激活 |
    | AUTH_B_O2 | 不在IP白名单中 |
    | AUTH_B_03 | 越权操作 |
left_code_blocks:
- code_block:
  title:
  language:
  right_code_blocks:
- code_block:
  title:
  language:
---


