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
    | SYMBOL_005 | 该市场不支持通过API进行交易 |
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
    | ORDER_F0501 | 触发限价保护滤器-买单最大偏离度 |
    | ORDER_F0502 | 触发限价保护滤器-卖单最大偏离度 |
    | ORDER_F0601 | 触发市价保护滤器 |
    | COMMON_001  | 用户不存在 |
    | COMMON_002  | 系统繁忙，请稍后再试 |
    | COMMON_003  | 操作失败，请稍后再试 |
    | CURRENCY_001  | 币种信息异常 |
    | DEPOSIT_001  | 充值暂未开放 |
    | DEPOSIT_002  | 当前账号安全等级较低，请绑定手机/邮箱/谷歌身份验证器中的任意两种安全验证后再进行充值 |
    | DEPOSIT_003  | 地址格式不正确，请重新输入 |
    | DEPOSIT_004  | 地址已存在，请重新输入 |
    | DEPOSIT_005  | 冷钱包地址未找到 |
    | DEPOSIT_006  | 暂无充值地址，请稍后再试 |
    | DEPOSIT_007  | 地址生成中，请稍后再试 |
    | DEPOSIT_008  | 不支持充值 |
    | WITHDRAW_001  | 提现暂未开放 |
    | WITHDRAW_002  | 提币地址不合法 |
    | WITHDRAW_003  | 当前账号安全等级较低，请绑定手机/邮箱/谷歌身份验证器中的任意两种安全验证后再进行提现 |
    | WITHDRAW_004  | 未添加提币地址 |
    | WITHDRAW_005  | 提币地址不能为空 |
    | WITHDRAW_006  | Memo不能为空 |
    | WITHDRAW_008  | 触发风控，暂不支持该币提现 |
    | WITHDRAW_009  | 提现失败，本次提现中部分资产受T+1提币限制 |
    | WITHDRAW_010  | 提币精度不合法 |
    | WITHDRAW_011  | 可用余额不足 |
    | WITHDRAW_012  | 提现失败，您今日剩余提现额度不足 |
    | WITHDRAW_013  | 提现失败，您今日剩余提现额度不足，可通过完成更高等级的实名认证提高额度 |
    | WITHDRAW_014  | 该笔提现地址不能使用内部转账功能，请取消内部转账功能后再提交 |
    | WITHDRAW_015  | 提现金额不足以抵扣手续费 |
    | WITHDRAW_016  | 提币地址已经存在 |
    | WITHDRAW_017  | 本次提币已处理，无法取消 |
    | WITHDRAW_018  | Memo必须为数字 |
    | WITHDRAW_019  | Memo不正确，请重新输入 |
    | WITHDRAW_020  | 您今日提现额度已达上限，请明天再试 |
    | WITHDRAW_021  | 您今日提现额度已达上限，本次最多只能提现{0} |
    | WITHDRAW_022  | 提现金额必须大于{0} |
    | WITHDRAW_023  | 提现金额必须小于{0} |
    | WITHDRAW_024  | 不支持提现 |
    | WITHDRAW_025  | 请前往充值页面创建FIO地址 |

left_code_blocks:
- code_block:
  title:
  language:
  right_code_blocks:
- code_block:
  title:
  language:
---


