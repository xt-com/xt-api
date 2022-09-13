---
title: Signature Instructions
position_number: 4
parameters:
- name:
content:
content_markdown: >-
    Since XT needs to provide some open interfaces for third-party platforms, it requires data security issues of the interface, such as whether the data has been tampered with, whether the data is outdated, whether the data can be submitted repeatedly, and the frequency of access to the interface within a certain period of time. Among them, whether the data has been tampered with is the most important.


    1. First apply for appkey and secretkey through the user center, and provide different appkey and secretkey for different calls
    

    2. Add timestamp (timestamp), its value should be the unix timestamp (milliseconds) of the time when the request is sent, and the suburban time of the data is calculated according to this value.
    

    3. Add signature (data signature), the signature information of all data.
    

    4. Add recvwindow (custom request valid time), the valid time is relatively simple and fixed to a certain value.
    

      When the server receives the request, it will judge the timestamp in the request. The longest is 60 seconds and the minimum is 2 seconds. If it was sent 5000 milliseconds ago, the request will be considered invalid. This time window value can be set by sending the optional parameter recvWindow.
      In addition, the server will also reject the request if it calculates that the client timestamp is more than one second 'in the future' of server time.
      Regarding the transaction timeliness, the Internet is not 100% reliable and cannot be completely relied upon. Therefore, the delay from your program to the XT server will be jittery. This is the purpose of setting recvwindow. If you are engaged in high-frequency trading, the transaction timeliness There are high requirements for sex, and you can flexibly set recvwindow to meet your requirements.

      Recvwindow longer than 5 seconds is not recommended
      

    5、Added algorithm (signature method/algorithm), the user's signature is a hash-based protocol, and HmacSHA256 is recommended. For those protocols that are supported, see the table below.

        HmacMD5、HmacSHA1、HmacSHA224、HmacSHA256(recommended)、HmacSHA384、HmacSHA512
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
    mandatory: true
    example: 5000(millisecond)
    description:
  -
    name: xt-validate-algorithms
    mandatory: true
    example: HmacSHA256
    description: HmacMD5、HmacSHA1、HmacSHA224、HmacSHA256、HmacSHA384、HmacSHA512，The default is：HmacSHA256
  -
    name: xt-validate-signversion
    mandatory: false
    example: 1.0
    description: reserved, signed version number

left_code_blocks:
- code_block:
  title:
  language:
  right_code_blocks:
- code_block:
  title:
  language:
---


