---
title: 签名生成
position_number: 5
parameters:
- name:
content:
content_markdown: >-

    http://fapi.xt.com/future/api/v1/public/symbol/detail?symbol=btc_usdt的示例
    
    
    以下是在linux bash环境下使用 echo openssl 和curl工具实现的一个调用接口下单的示例 appkey、secret仅供示范：
    
    
    appKey: 3976eb88-76d0-4f6e-a6b2-a57980770085
    

    secretKey: bc6630d0231fda5cd98794f52c4998659beda290
    


    Header部分数据：
    
    
    xt-validate-appkey: 3976eb88-76d0-4f6e-a6b2-a57980770085


    xt-validate-timestamp: 2b5eb11e18796d12d88f13dc27dbbd02c2cc51ff7059765ed9821957d82bb4d9
    
    
    xt-validate-algorithms: HmacSHA256
    
    
    Authorization: bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxNjYyMTA1ODcyNyIsInNjb3BlIjoiYXV0aCIsImlzcyI6Inh0LmNvbSIsImxhc3RBdXRoVGltZSI6MTY0NDgwNjEyNjE0OSwidXNlck5hbWUiOiIxNjYyMTA1ODcyNyIsImV4cCI6MTY0NDg5MjUyNiwidXNlcklkIjoxMzEwNzN9.vi2Cvc1BlYOKTdR6OrK1d89K9Je6DVLkJXSd2QEN7c6N11AmeIymhoLccqz6vflkC-c7eoFswutonGom375pxVX3gjnYomMi5-IbxpTL0Bys2tQ2xI7rhrbMIADBXL0G2CpCYLyZdapn3RxNScgQyJhI5ulupdXTx7tspeYDHfA



    请求数据：


    {
      type: 'LIMIT',
      timeInForce: 'GTC',
      side: 'BUY',
      symbol: 'btc_usdt',
      price: '39000',
      quantity: '2'
    }



    1、数据部分

    
      path: 按照path中顺序将所有value进行拼接。形如/test/{var1}/{var2}/的restful路径将按填入的实际参数后路径拼接，示例：/sign/test/bb/aa


      query: 按照key的字典序排序，将所有key=value进行拼接。示例：userName=dfdfdf&password=ggg


      body:   Json: 直接按JSON字符串不做转换或排序操作。

                  x-www-form-urlencoded: 按照key的字典序排序，将所有key=value进行拼接，示例:userName=dfdfdf&password=ggg　

                  form-data：此格式暂不支持。

      如果存在多种数据形式，则按照path、query、body的顺序进行再拼接，得到所有数据的拼接值。



      路径Path示例：

              /future/api/v1/public/symbol/detail

              上述拼接值记作为path



      示例 1: 所有参数通过 query string 发送 

                symbol=btc_usdt&side=BUY&type=LIMIT&timeInForce=GTC&quantity=1&price=0.1

                上述值拼接记作query

      示例 2: 所有参数通过 request body 发送

      x-www-form-urlencoded的request  body string :
      
                symbol=btc_usdt&side=BUY&type=LIMIT&timeInForce=GTC&quantity=1&price=0.1

                上述值拼接记作body

      json的request body string :
      
                {"symbol" : "btc_usdt","side" : "BUY","type":"LIMIT","timeInForce":"GTC","quantity":2,"price":39000}

                上述值拼接记作body

      示例 3: 混合使用 query string 与 request body(分为表单与json两种格式)

      queryString: symbol=btc_usdt&side=BUY&type=LIMIT&timeInForce=GTC
                上述拼接值记作query

      requestBody: {"quantity":2,"price":39000}
                上述拼接值记作body

            整个数据最且拼接值由#符号分别与path、query、body进行拼接成#path、#query、#body，最终拼接值记作为Y=#path#query#body。

            注意：

                query无数据，body有数据：Y=#path#body

                query有数据，body无数据：Y=#path#query

                query有数据，body有数据：Y=#path#query#body



      2、请求头部分
            X=”xt-validate-appkey=3976eb88-76d0-4f6e-a6b2-a57980770085&xt-validate-timestamp=1641446237201”



      3、生成签名
      
      最终把需要进行加密的字符串，记作为sign=XY

      最后将最终拼接值按照如下方法进行加密得到签名。

      signature=org.apache.commons.codec.digest.HmacUtils.hmacSha256Hex(secretkey, sign);

      将生成的签名singature放到请求头中，以xt-validate-signature为Key，以singature为值。
      
left_code_blocks:
- code_block:
  title:
  language:
right_code_blocks:
- code_block:
  title:
  language:
---
