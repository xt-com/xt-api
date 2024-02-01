---
title: 响应代码
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
    | LEVER_ORDER_099 | 已有订单处理中 |
    | LEVER_ORDER_082 | 当前穿仓，暂不支持操作 |
    | LEVER_ORDER_081 | 当前人工处理，暂不支持操作 |
    | LEVER_ORDER_080 | 当前爆仓中，暂不支持操作 |
    | LEVER_ORDER_032 | 当前无借款或不能手动还款,请重试 |
    | LEVER_ORDER_031 | 还款数量错误 |
    | LEVER_ORDER_006 | 杠杠本金不足 |
    | LEVER_ORDER_005 | 当前市场最大可借数量不足 |
    | LEVER_ORDER_004 | 可借贷数量不足 |
    | LEVER_ORDER_003 | 借贷数量错误 |
    | LEVER_ORDER_001 | 重复请求 |
    | LEVER_1004 | 当前子账户暂无该交易权限 |
    | GATEWAY_0001  | 触发风控  |
    | GATEWAY_0002  | 触发风控  |
    | GATEWAY_0003  | 触发风控  |
    | GATEWAY_0004  | 触发风控  |

left_code_blocks:
- code_block:
  title:
  language:
  right_code_blocks:
- code_block:
  title:
  language:
---


