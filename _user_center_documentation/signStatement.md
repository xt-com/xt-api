---
title: Signature Instructions
position_number: 4
parameters:
- name:
content:
content_markdown: >-
    Since XT needs to provide some open interfaces for third-party platforms，therefore, the issue of data security needs to be considered. Such as whether the data has been tampered with, whether the data is outdated, whether the data can be submitted repeatedly, and the access frequency of the interface, and whether data has been tampered with is the most important issue.


    1. Please apply for appkey and secretkey in the user center first, each user's appkey and secretkey are different.
    

    2. Add timestamp, its value should be the unix timestamp (milliseconds) of the time when the request is sent, and the time of the data is calculated based on this value.
    

    3. Add signature, its value is obtained by a certain rule of signature algorithm.
    

    4. Add recvwindow (defining the valid time of the request), the valid time is currently relatively simple and uniformly fixed at a certain value.
    

      When a request is received by the server, the timestamp in the request is checked to ensure it falls between 2 to 60 seconds. Any request with a timestamp older than 5,000 milliseconds is considered invalid. 
      The time window value can be set using the optional parameter: "recvWindow". Additionally, if the server determines that the client's timestamp is more than one second ahead of the server, the request will also be invalid. 
      Online conditions are not always 100% reliable in terms of the timeliness of trades, resulting in varying levels of latency between your local program and the XT server. This is why we provide the "recvWindow" parameter - if you engage in high-frequency trading and require stricter transaction timeliness, you can adjust the "recvWindow" parameter to better meet your needs.
      
      Recvwindow longer than 5 seconds is not recommended.
      

    5、Added algorithm (signature method/algorithm), the user calculates the signature according to the protocol of the hash, and HmacSHA256 is recommended. For those protocols that are supported, see the table below.

        HmacMD5、HmacSHA1、HmacSHA224、HmacSHA256(recommended)、HmacSHA384、HmacSHA512
examples:
  -
    name: validate-appkey
    mandatory: true
    example: dbefbc809e3e83c283a984c3a1459732ea7db1360ca80c5c2c8867408d28cc83
    description:
  -
    name: validate-timestamp
    mandatory: true
    example: 1641446237201
    description:
  -
    name: validate-signature
    mandatory: true
    example: 0a7d0b5e802eb5e52ac0cfcd6311b0faba6e2503a9a8d1e2364b38617877574d
    description:
  -
    name: validate-recvwindow
    mandatory: true
    example: 5000(millisecond)
    description:
  -
    name: validate-algorithms
    mandatory: true
    example: HmacSHA256
    description: HmacMD5、HmacSHA1、HmacSHA224、HmacSHA256、HmacSHA384、HmacSHA512，The default is：HmacSHA256
  -
    name: validate-signversion
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


