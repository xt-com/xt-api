---
title: Common error code
position_number: 10
parameters:
- name:
content:
content_markdown: |-
    1.AUTH_ 105: The server verifies the request header parameters xt-validate-timestamp (validTimeStamp) and xt-validate-recvwindow (recvwindow)
    The following rules must be followed: dealTimeStamp (server time when the request is processed, in milliseconds) - validTimeStamp < recvwindow, otherwise AUTH_105 will be returned.
    To avoid this error, xt-validate-timestamp recommends using the time when the request was issued, and it is measured in milliseconds. The xt-validate-recvwindow is set a little larger
    



left_code_blocks:
- code_block:
  title:
  language:
right_code_blocks:
- code_block:
  title:
  language:
---
