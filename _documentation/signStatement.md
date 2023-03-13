---
title: Signature Instructions
position_number: 4
parameters:
- name:
content:
content_markdown: >-
    Since XT needs to provide some open interfaces for third-party platforms，therefore, the issue of data security needs to be considered. Such as whether the data has been tampered with, whether the data is outdated, whether the data can be submitted repeatedly, and the access frequency of the interface, and whether data has been tampered with is the most important issue.


    1. Please apply for appkey and secretkey in the user center first, each user's appkey and secretkey are different
    

    2. Add timestamp, its value should be the unix timestamp (milliseconds) of the time when the request is sent, and the time of the data is calculated based on this value.
    

    3. Add signature, its value is obtained by a certain rule of signature algorithm.
    

    4. Add recvwindow (defining the valid time of the request), the valid time is currently relatively simple and uniformly fixed at a certain value.
    

      When the server receives the request, it will judge the timestamp in the request, maximum 60 seconds, minimum 2 seconds. If sent before the time defined by recvwindow, the request will be considered invalid, the value of this recvWindow can be defined by the user. 
      In addition, if the server calculates that the request's timestamp is more than one second "in the future" of the server's time, the request will also be rejected. 
      Since internet conditions are not 100% reliable, the delay of your program from the client to the XT server will jitter, this is the purpose of setting recvwindow. If you are engaged in high-frequency transactions, you have higher requirements for transaction timeliness, you can flexibly set recvwindow to meet your requirements.
      
      Recvwindow longer than 5 seconds is not recommended.
      

    5、Added algorithm (signature method/algorithm), the user calculates the signature according to the protocol of the hash, and HmacSHA256 is recommended. For those protocols that are supported, see the table below.

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


