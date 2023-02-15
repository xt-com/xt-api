---
title: Authorization Link
position_number: 1
parameters:
- name:
content:
content_markdown: >-

  When the third-party platform requires XT.COM users to authorize certain operations, please jump from the third-party platform page to `http(s)://{URL}/{language}/accounts/oauth2?response_type=code&client_id={clientId}&redirect_uri={redirectUri}&scope={scope}`<br>
    **Parameter**<br>
    **1. URL**<br>
  The domain name of the xt authorization page, the official environment is: www.xt.com，and the test environment is: www.xt-qa.com<br>
    **2. language**<br>
  Authorization page language, the currently supported content is as follows：<br>
    en：English<br>
    ja：Japanese<br>
    hi：Hindi<br>
    id：Indonesian<br>
    ru：Russian<br>
    es：spanish<br>
    tr：turkish<br>
    zh-HK：traditional Chinese<br>
    zh-CN：Simplified Chinese<br>
    vi：vietnamese<br>
    th：Thai<br>
    **3. clientId**<br>
  The unique identification of the organization, please apply to XT.COM in advance<br>
    **4. redirectUri** <br>
  The redirected address after successful authorization<br>
    **5. scope**<br>
  Authorization scope, obtained from XT.COM together with clientId<br>
    **For example:**<br>
    http://www.xt-qa.com/zh-CN/accounts/oauth2?response_type=code&client_id=DDJ7BLK49YUCL97S&redirect_uri=https%3A%2F%2Fwww.baidu.com&scope=userinfo

left_code_blocks:
- code_block:
  title:
  language:
  right_code_blocks:
- code_block:
  title:
  language:
---


