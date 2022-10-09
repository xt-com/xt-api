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
    | AUTH_001 | 缺少请求头 xt-validate-appkey |
    | AUTH_002 | 缺少请求头 xt-validate-timestamp |
    | AUTH_003 | 缺少请求头 xt-validate-recvwindow |
    | AUTH_004 | 错误的请求头 xt-validate-recvwindow |
    | AUTH_005 | 缺少请求头 xt-validate-algorithms |
    | AUTH_006 | 错误的请求头 xt-validate-algorithms |
    | AUTH_007 | 缺少请求头 xt-validate-signature |
    | AUTH_101 | ApiKey不存在 |
    | AUTH_102 | ApiKey未激活 |
    | AUTH_103 | 签名错误 |
    | AUTH_104 | 非绑定IP请求 |
    | AUTH_105 | 报文过时 |
    | AUTH_106 | 超出apikey权限 |
    | SYMBOL_001 | 交易对不存在 |
    | SYMBOL_002 | 交易对未开盘 |
    | SYMBOL_003 | 交易对暂停交易 |
    | SYMBOL_004 | 此交易对不支持您所在的国家 |
    | ORDER_001 | 平台拒单 |
    | ORDER_002 | 资金不足 |
    | ORDER_003 | 交易对暂停交易 |
    | ORDER_004 | 禁止交易 |
    | ORDER_005 | 订单不存在 |
    | ORDER_006 | 过多的未完成订单 |
    | ORDER_F0101 | 触发价格过滤器-最小值 |
    | ORDER_F0102 | 触发价格过滤器-最大值 |
    | ORDER_F0103 | 触发价格过滤器-步进值 |
    | ORDER_F0201 | 触发数量过滤器-最小值 |
    | ORDER_F0202 | 触发数量过滤器-最大值 |
    | ORDER_F0203 | 触发数量过滤器-步进值 |
    | ORDER_F0301 | 触发金额过滤器-最小值 |
    | ORDER_F0401 | 触发开盘保护滤器 |
    | ORDER_F0501 | 触发限价保护滤器 |
    | ORDER_F0601 | 触发市价保护滤器 |

left_code_blocks:
- code_block:
  title:
  language:
  right_code_blocks:
- code_block:
  title:
  language:
---


