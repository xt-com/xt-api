---
title: 签名说明
position_number: 4
parameters:
- name:
content:
content_markdown: >-
    由于XT需要为第三方平台提供一些开放性的接口，所以需要接口的数据安全问题，比如数据是否被篡改，数据是否已过时，数据是否可以重复提交，接口在某个时间内访问频率等问题。其中数据是否被篡改是最重要的。


    1、先通过用户中心申请appkey和secretkey，针对不同的调用，提供不同的appkey和secretkey
    

    2、加入timestamp(时间戳)，其值应当是请求发送时刻的unix时间戳(毫秒)，数据的有郊时间根据此值来计算。
    

    3、加入signature(数据签名)，所有数据的签名信息。
    

    4、加入recvwindow(自定义请求有效时间)，有效时间目前相对简单统一固定为某个值。
    

      服务器收到请求时会判断请求中的时间戳，最长60秒，最小为2秒，如果是5000毫秒之前发出的，则请求会被认为无效。这个时间窗口值可以通过发送可选参数recvWindow来设置。
      另外，如果服务器计算得出客户端时间戳在服务器时间的‘未来’一秒以上，也会拒绝请求。
      关于交易时效性 互联网状况并不100%可靠，不可完全依赖,因此你的程序本地到XT服务器的时延会有抖动. 这是我们设置recvwindow的目的所在，如果你从事高频交易，对交易时效性有较高的要求，可以灵活设置recvwindow以达到你的要求。

      不推荐使用5秒以上的recvwindow
      

    5、加入algorithms (签名方法/算法)，用户计算签名是基于哈希的协议，推荐使用HmacSHA256。具体支持那些协议，请参见下面表格中所列出。

        HmacMD5、HmacSHA1、HmacSHA224、HmacSHA256(推荐)、HmacSHA384、HmacSHA512
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
    example: 5000(毫秒)
    description:
  -
    name: xt-validate-algorithms
    mandatory: true
    example: HmacSHA256
    description: HmacMD5、HmacSHA1、HmacSHA224、HmacSHA256、HmacSHA384、HmacSHA512，默认为：HmacSHA256
  -
    name: xt-validate-signversion
    mandatory: false
    example: 1.0
    description: 保留，签名版本号

left_code_blocks:
- code_block:
  title:
  language:
  right_code_blocks:
- code_block:
  title:
  language:
---


