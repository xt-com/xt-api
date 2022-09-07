---
title: 接口的基本信息
position_number: 2
parameters:
- name:
content:
content_markdown: >-
    鉴于延迟高和稳定性差等原因，不建议通过代理的方式访问API。


    GET请求参数放入query Params中，POST请求参数放入request body中


    请求头信息请设置为：Content-Type=application/x-www-form-urlencoded


    除了接口本身所需的参数外，还需要在request header 中传递 signature,
    即签名参数，所有请求路径中含有public的接口不需要签名参数。
left_code_blocks:
- code_block:
  title:
  language:
right_code_blocks:
- code_block:
  title:
  language:
---


