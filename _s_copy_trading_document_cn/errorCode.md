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
    | SYMBOL_001 | 交易对不存在 |
    | SYMBOL_002 | 交易对未开盘 |
    | SYMBOL_003 | 交易对暂停交易 |
    | SYMBOL_004 | 此交易对不支持您所在的国家 |
    | SYMBOL_005 | 该市场不支持通过API进行交易 |
    | ORDER_001 | 平台拒单 |
    | ORDER_002 | 资金不足 |
    | ORDER_003 | 交易对暂停交易 |
    | ORDER_004 | 禁止交易 |
    | ORDER_005 | 订单不存在 |
    | ORDER_006 | 过多的未完成订单 |
    | ORDER_007 | 子账户暂无交易权限 |
    | ORDER_008 | 当前下单价格或数量精度异常 |
    | ORDER_F0101 | 触发价格过滤器-最小值 |
    | ORDER_F0102 | 触发价格过滤器-最大值 |
    | ORDER_F0103 | 触发价格过滤器-步进值 |
    | ORDER_F0201 | 触发数量过滤器-最小值 |
    | ORDER_F0202 | 触发数量过滤器-最大值 |
    | ORDER_F0203 | 触发数量过滤器-步进值 |
    | ORDER_F0301 | 触发金额过滤器-最小值 |
    | ORDER_F0401 | 触发开盘保护滤器或限价保护过滤器 |
    | ORDER_F0501 | 触发限价保护滤器-买单最大偏离度 |
    | ORDER_F0502 | 触发限价保护滤器-卖单最大偏离度 |
    | ORDER_F0503 | 触发限价保护滤器-买单限制系数 |
    | ORDER_F0504 | 触发限价保护滤器-卖单限制系数 |
    | ORDER_F0601 | 触发市价保护滤器 |
    | COMMON_001  | 用户不存在 |
    | COMMON_002  | 系统繁忙，请稍后再试 |
    | COMMON_003  | 操作失败，请稍后再试 |
    | CURRENCY_001  | 币种信息异常 |
    | SYMBOL_001  | 交易对不存在  |
    | GATEWAY_0001  | 触发风控  |
    | GATEWAY_0002  | 触发风控  |
    | GATEWAY_0003  | 触发风控  |
    | GATEWAY_0004  | 触发风控  |
    | COPY_TRADE_SPOT_000  | 系统繁忙，请稍后再试  |
    | COPY_TRADE_SPOT_001  | 您已经是交易员  |
    | COPY_TRADE_SPOT_002  | 您有跟随的交易员  |
    | COPY_TRADE_SPOT_003  | 您已提交交易员申请，无须重复申请  |
    | COPY_TRADE_SPOT_004  | 您未实名认证或实名认证等级不满足申请规则  |
    | COPY_TRADE_SPOT_005  | 您的账户总资产不满足申请规则  |
    | COPY_TRADE_SPOT_006  | 带单员不存在  |
    | COPY_TRADE_SPOT_007  | 您已提交带单员申请，不支持跟单  |
    | COPY_TRADE_SPOT_008  | 跟单保证金超出限制范围  |
    | COPY_TRADE_SPOT_009  | 跟单比例超出限制范围  |
    | COPY_TRADE_SPOT_010  | 带单员跟随者已满员  |
    | COPY_TRADE_SPOT_011  | 超过最大可跟随人数  |
    | COPY_TRADE_SPOT_012  | 止盈价格精度异常  |
    | COPY_TRADE_SPOT_013  | 止损价格精度异常  |
    | COPY_TRADE_SPOT_014  | 止盈触发价需大于最新成交价  |
    | COPY_TRADE_SPOT_015  | 止损触发价需小于最新成交价  |
    | COPY_TRADE_SPOT_016  | 当前带单员存在现货带单订单，不允许解约  |

left_code_blocks:
- code_block:
  title:
  language:
  right_code_blocks:
- code_block:
  title:
  language:
---


