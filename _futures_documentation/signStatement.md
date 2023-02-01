---
title: Signature Statement
position_number: 4
parameters:
- name:
content:
content_markdown: >-
    Since XT needs to provide some open interfaces for third-party platforms, it requires data security issues of the interface, such as whether the data has been tampered with, whether the data is outdated, whether the data can be submitted repeatedly, and the frequency of access to the interface within a certain period of time. Among them, whether the data has been tampered with is most important.


    1. Offline distribution of appkey and secretkey, for different calls, provide different appkey and secretkey.
    

    2. Add timestamp, the value of which should be the unix timestamp (milliseconds) of the time when the request is sent, and the valid time of the data is calculated according to this value.
    

    3. Add signature information for all data.
    

    4. Add recvwindow, the valid time is relatively simple and fixed to a certain value. For example, the data is valid within 10 minutes under the same api and appid. Here, it can be further optimized to the valid time of a single api is different.
    

      The server determines the timestamp when it receives a request. Up to 60 seconds, and the default is 5 seconds. If it was sent 5000 milliseconds ago, the request will be considered invalid. This time window value can be customized by sending the optional parameter recvWindow. In addition, the server will also reject the request if it calculates that the client timestamp is more than one second 'in the future' of server time. Regarding the transaction timeliness, the Internet is not 100% reliable and cannot be completely relied upon, so your application's local time delay to the XT server may be jitter.This is the purpose of setting recvWindow. If you are engaged in high-frequency trading and have high requirements for trading timeliness, you can flexibly set recvWindow to meet your requirements.

      RecvWindow for more than 5 seconds is not recommended.
      

    5、5. Add algorithms (signature method/algorithm). User's signature calculation is a HSC-based protocol, where HmacSHA256 is used by default. See the specific supported protocols listed in the table below.
examples:
  -
    name: xt-validate-appkey
    mandatory: true
    example: dbefbc809e3e83c283a984c3a1459732ea7db1360ca80c5c2c8867408d28cc83
    description:
  -
    name: xt-validate-timestamp
    mandatory: true
    example: 1641446237201
    description:
  -
    name: xt-validate-signature
    mandatory: true
    example: 0a7d0b5e802eb5e52ac0cfcd6311b0faba6e2503a9a8d1e2364b38617877574d
    description:
  -
    name: xt-validate-recvwindow
    mandatory: false
    example: 5000(millisecond)
    description:
  -
    name: xt-validate-algorithms
    mandatory: false
    example: HmacSHA256
    description: HmacMD5、HmacSHA1、HmacSHA224、HmacSHA256、HmacSHA384、HmacSHA512，默认为：HmacSHA256
  -
    name: xt-api-version
    mandatory: false
    example: 1.0
    description: Reserved, API version number
  -
    name: xt-validate-signversion
    mandatory: false
    example: 1.0
    description: Reserved, signature version number

left_code_blocks:
- code_block:
  title:
  language:
  right_code_blocks:
- code_block:
  title:
  language:
---


