---
title: Obtain Signature
position_number: 5
parameters:
- name:
content:
content_markdown: >-

    Example for http://fapi.xt.com/api/v1/public/symbol/detail?symbol=btc_usdt
    
    
    The following is an example of an order placed in a call interface using echo openssl and curl tools in a Linux bash environment. Appkey, secret for demonstration purposes only:
    
    
    appKey: 3976eb88-76d0-4f6e-a6b2-a57980770085
    

    secretKey: bc6630d0231fda5cd98794f52c4998659beda290
    


    Partial data of Header：
    
    
    xt-validate-appkey: 3976eb88-76d0-4f6e-a6b2-a57980770085


    xt-validate-timestamp: 1641446237201
    
    
    xt-validate-algorithms: HmacSHA256



    Request data：


    {
      type: 'LIMIT',
      timeInForce: 'GTC',
      side: 'BUY',
      symbol: 'btc_usdt',
      price: '39000',
      quantity: '2'
    }



    1、Data

    
      path: Concatenate all values in the order in path. The restful path in the form of /test/{var1}/{var2}/ will be spliced according to the actual parameters filled in, for example: /sign/test/bb/aa


      query: Sorted by lexicographic order of key, concatenate all key=value. Example: userName=dfdfdf&password=ggg


      body:   Json: Operate as JSON string is not converted or sorted.

              x-www-form-urlencoded: Sorted by lexicographic order of key, concatenate all key=value. Example: userName=dfdfdf&password=ggg　

              form-data：Not supported.

      If there are multiple data forms, re-concatenate in the order of path, query, and body to obtain the concatenate value of all data.



      Example of Path:

              /future/api/v1/public/symbol/detail

              The above concatenated value is recorded as path



      Example 1: All parameters sent via query string

                symbol=btc_usdt&side=BUY&type=LIMIT&timeInForce=GTC&quantity=1&price=0.1

                The above concatenate value is recorded as query

      Example 2: All parameters send X-www-form-urlencoded request body string via the request body

      Request body string of json
      
                symbol=btc_usdt&side=BUY&type=LIMIT&timeInForce=GTC&quantity=1&price=0.1

                The above concatenate value is recorded as body

      Request body string of www-form-urlencoded
      
                {"symbol" : "btc_usdt","side" : "BUY","type":"LIMIT","timeInForce":"GTC","quantity":2,"price":39000}

                The above concatenate value is recorded as body

      Example 3: Mix to use query string and request body (form and json format)

      queryString: symbol=btc_usdt&side=BUY&type=LIMIT&timeInForce=GTC
                上述拼接值记作query

      requestBody: {"quantity":2,"price":39000}
                The above concatenate value is recorded as query

            The final concatenate value of the entire data is # concatenated with path, query, and body and form #path, #query, and #body. The finalconcatenate value is recorded asY=#path#query#body。

            Note:

                query without data, body with data:Y=#path#body

                query with data, body without data:Y=#path#query

                query with data, body with data:Y=#path#query#body



      2:Request header
            X=”xt-validate-appkey=3976eb88-76d0-4f6e-a6b2-a57980770085&xt-validate-timestamp=1641446237201”



      3:Obtain Signature
      
      Finally, record the string that needs to be encrypted as sign=XY

      Finally, encrypt the final concatenated value according to the following method to obtain a signature.

      signature=org.apache.commons.codec.digest.HmacUtils.hmacSha256Hex(secretkey, sign);

      Put the generated signature in the request header, with xt-validate-signature as the key and singature as the value.
      
left_code_blocks:
- code_block:
  title:
  language:
right_code_blocks:
- code_block:
  title:
  language:
---
