---
title: Request message format
position_number: 2
type:
description:
parameters:
    -
        name:
        type: string
        mandatory: false
        default:
        description:
        ranges:
content_markdown: |-
        subscribe:
        ```js
          {
             "method": "SUBSCRIBE/UNSUBSCRIBE",
             "params": [
                 "{order}@{listenKey}",
                 "{trade}@{listenKey}",
                 "{balance}@{listenKey}",
                 "{position}@{listenKey}",
                 "{notify}@{listenKey}"
              ],
             "id": "{id}"    //user defined
          }
        ```
left_code_blocks:
    -
        code_block:
        title: subscribe
        language: javascript
    -
        code_block: 
        title: unsubscribe
        language: javascript
right_code_blocks:
    -
        code_block: |-
               {"method":"SUBSCRIBE",
                "params":["order@A246C3DF8EE532DC75007BC5D86698541678596355681"],
                "id":"test1"
                }
        title: subscribe
        language: json
---
