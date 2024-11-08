---
title: Alter Stop Limit
position_number: 12
type: post
description: /future/trade/v1/entrust/update-profit-stop
remark: Content-Type = application/x-www-form-urlencoded && application/json
parameters:
  - name: profitId
    type: integer
    mandatory: true
    default: N/A
    description: Stop limit ID
    ranges:
  - name: triggerProfitPrice
    type: number
    mandatory: false
    default: N/A
    description: TP trigger price
    ranges:
  - name: triggerStopPrice
    type: number
    mandatory: false
    default: N/A
    description: SL trigger price
    ranges:
content_markdown: |-

                 #### **Limit Flow Rules**

                 200/s/apikey
right_code_blocks:
  - code_block: |-
      {
        "error": {
          "code": "",
          "msg": ""
        },
        "msgInfo": "",
        "result": {},
        "returnCode": 0
      }
    title: Response
    language: json
---