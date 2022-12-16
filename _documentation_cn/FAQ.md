---
title: FAQ
position_number: 10
parameters:
- name:
content:
content_markdown: |-
    1.AUTH_105：服务器在校验请求头参数xt-validate-timestamp(validTimeStamp)、xt-validate-recvwindow（recvwindow）时，
    需要符合以下规则：dealTimeStamp（请求被处理时服务器时间）- validTimeStamp < recvwindow ，否则就会返回AUTH_105，为了避免此错误，建议xt-validate-timestamp 设置为请求发出的时间，xt-validate-recvwindow设置的大一点
    



left_code_blocks:
- code_block:
  title:
  language:
right_code_blocks:
- code_block:
  title:
  language:
---
