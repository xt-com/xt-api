---
title: 限频规则
position_number: 3
parameters:
- name:
content:
content_markdown: |-
  部分接口会有限流控制(对应接口下会有限流说明)，限流主要分为网关限流和WAF限流。

  若接口请求触发了网关限流则会返回429，表示警告访问频次超限，即将被封IP或者apiKey。

  网关限流分为针对IP和apiKey限流。

  IP限流示例说明：100/s/ip，表示每个IP每秒该接口请求次数限制。

  apiKey限流示例说明：50/s/apiKey，表示每个apiKey每秒该接口请求次数限制。
left_code_blocks:
- code_block:
  title:
  language:
  right_code_blocks:
- code_block:
  title: JQuery
  language: javascript
---