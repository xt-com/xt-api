---
title: Signature generation
position_number: 5
parameters:
- name:
content:
content_markdown: >-

    Take https://sapi.xt-uat.com/v4/order as an example.
    
    
    The following is an example appkey and secret for placing an order using a call interface implemented by echo openssl and curl tools in the linux bash environment for demonstration purposes only:
    
    
    appKey: 3976eb88-76d0-4f6e-a6b2-a57980770085
    

    secretKey: bc6630d0231fda5cd98794f52c4998659beda290
    




    Header part data：

        xt-validate-algorithms: HmacSHA256
    
        xt-validate-appkey: 3976eb88-76d0-4f6e-a6b2-a57980770085
    
        xt-validate-recvwindow: 5000
    
        xt-validate-timestamp: 1641446237201
    
        xt-validate-signature: 2b5eb11e18796d12d88f13dc27dbbd02c2cc51ff7059765ed9821957d82bb4d9



    request data：

        {
          type: 'LIMIT',
          timeInForce: 'GTC',
          side: 'BUY',
          symbol: 'btc_usdt',
          price: '39000',
          quantity: '2'
        }



    1.data part

        method: UpperCase method. eg: GET, POST, DELETE, PUT
    
        path: Concatenate all values in the order in path. The restful path in the form of /test/{var1}/{var2}/ will be spliced according to the actual parameters filled in, for example: /sign/test/bb/aa
  
        query: Sort all key=value according to the lexicographical order of the key. Example: userName=dfdfdf&password=ggg
  
        body:   
            Json: Directly by JSON string without conversion or sorting.
  
            x-www-form-urlencoded: Sort all key=values according to the lexicographical order of keys, for example: userName=dfdfdf&password=ggg
    
            form-data：This format is not currently supported.
  
        If there are multiple data forms, re-splicing is performed in the order of path, query, and body to obtain the splicing value of all data.


    Method example:
        
        POST

    Path example:

        /v4/order

        The above concatenated value is recorded as path



    Parameters passed query example:

        symbol=btc_usdt

        The above concatenated value is recorded as query



    Parameters via body example

        x-www-form-urlencoded:
      
            symbol=btc_usdt&side=BUY&type=LIMIT&timeInForce=GTC&quantity=1&price=0.1

            The above concatenated value is recorded as body

        json:
  
            {"symbol":"btc_usdt","side":"BUY","type":"LIMIT","timeInForce":"GTC","quantity":2,"price":39000}

            The above concatenated value is recorded as body



    Mixed use of query and body (divided into form and json format)

        query: 
            symbol=btc_usdt&side=BUY&type=LIMIT
            The above concatenated value is recorded as query

        body: 
            {"symbol":"btc_usdt","side":BUY,"type":"LIMIT"}
            The above concatenated value is recorded as body



    The most concatenated value of the entire data is spliced with method, path, query, and body by the # symbol to form #method, #path, #query, and #body, and the final spliced value is recorded as Y=#method#path#query#body.

    Notice：

        The query has data, but the body has no data: Y=#method#path#query

        query has no data, body has data: Y=#method#path#body

        query has data, body has data: Y=#method#path#query#body





    2.request header part
        After the keys are in natural ascending alphabetical order, use & to join them together as X. like:

            xt-validate-algorithms=HmacSHA256&xt-validate-appkey=3976eb88-76d0-4f6e-a6b2-a57980770085&xt-validate-recvwindow=5000&xt-validate-timestamp=1641446237201



    3.generate signature
    
        Finally, the string that needs to be encrypted is recorded as original=XY
    
        Finally, encrypt the final concatenated value according to the following method to obtain a signature.
    
        signature=org.apache.commons.codec.digest.HmacUtils.hmacSha256Hex(secretkey, original);
    
        Put the generated signature singature in the request header, with xt-validate-signature as the key and singature as the value.

    4.example

        sample of original signature message:
          
            xt-validate-algorithms=HmacSHA256&xt-validate-appkey=2063495b-85ec-41b3-a810-be84ceb78751&xt-validate-recvwindow=60000&xt-validate-timestamp=1666026215729#POST#/v4/order#{"symbol":"XT_USDT","side":"BUY","type":"LIMIT","timeInForce":"GTC","bizType":"SPOT","price":3,"quantity":2}

        sample request message:
  
            curl --location --request POST 'https://sapi.xt.com/v4/order' 
            --header 'accept: */*' 
            --header 'Content-Type: application/json' 
            --header 'xt-validate-algorithms: HmacSHA256' 
            --header 'xt-validate-appkey: 10c172ca-d791-4da5-91cd-e74d202dac96' 
            --header 'xt-validate-recvwindow: 60000' 
            --header 'xt-validate-timestamp: 1666026215729' 
            --header 'xt-validate-signature: 4cb36e820f50d2e353e5e0a182dc4a955b1c26efcb4b513d81eec31dd36072ba' 
            --data-raw '{"symbol":"XT_USDT","side":"BUY","type":"LIMIT","timeInForce":"GTC","bizType":"SPOT","price":3,"quantity":2}'    

        matters needing attention:

            Pay attention to checking the parameter format of Content Type, signature original message and request message


left_code_blocks:
- code_block:
  title:
  language:
right_code_blocks:
- code_block:
  title:
  language:
---