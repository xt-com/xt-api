---
title: 跳转说明
position_number: 1
parameters:
    - name:
      content:
content_markdown: >-

    当第三方平台需要XT.COM用户授权某些操作时，请从第三方平台页面跳转到`http(s)://{URL}/{language}/accounts/oauth2?response_type=code&client_id={clientId}&redirect_uri={redirectUri}&scope={scope}`<br>
    **参数说明**<br>
    **1. URL**<br>
    xt授权页面域名，正式环境为: www.xt.com<br>
    **2. language**<br> 
    授权页面语言，当前支持的内容如下：<br>
    en：英语<br>
    ja：日本语<br>
    hi：印地语<br>
    id：印尼语<br>
    ru：俄语<br>
    es：西班牙语<br>
    tr：土耳其语<br>
    zh-HK：繁体中文<br>
    zh-CN：简体中文<br>
    vi：越南语<br>
    th：泰语<br>
    **3. clientId**<br>
    机构唯一标识，请提前向XT.COM申请<br>
    **4. redirectUri** <br>
    授权成功后的跳转到的地址<br>
    **5. scope**<br>
    授权作用域，和clientId一同向XT.COM获取<br>
    **例如:**<br>
    http://www.xt.com/zh-CN/accounts/oauth2?response_type=code&client_id=DDJ7BLK49YUCL97S&redirect_uri=https%3A%2F%2Fwww.baidu.com&scope=userinfo

left_code_blocks:
- code_block:
  title:
  language:
  right_code_blocks:
- code_block:
  title:
  language:
---


