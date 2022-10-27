---
title: FAQ
position_number: 10
parameters:
- name:
content:
content_markdown: >-

    1.Internal Server Error
        
        原因可能是用户请求的参数与服务器要求的接口参数不一致，比如下单接口要求参数放在body中以json格式传送，但是请求的时候以query形式请求，会导致此类错误。所以对于POST类型的请求，如无特别要求，都以json形式放在body中。对于其他类请求，无特别说明都以query形式传送。请求头中的content-type推荐使用application/json。

    2.AUTH_103
        
        生成签名时Y=#method#path#query#body，Y中的query和body内容如果和请求中传送的内容不一致，会出现此类错误。大概错误分为以下几种：
        1.非post类请求，参数放在路径中时，如 Get  /v4/order/{orderId}，此时就不用在query加上orderId这个参数，
        
        
      
left_code_blocks:
- code_block:
  title:
  language:
right_code_blocks:
- code_block:
  title:
  language:
---