---
title: 获取代理用户信息
position_number: 10
type: get
description: /v4/referal/invite/agent/user/info
parameters:
    -
        name: uidList
        type: String
        mandatory: true
        default:
        description: 用户ID集合, 示例：[6118530023996, 6118530023997]
        ranges:
    -
        name: startTime
        type: number
        mandatory: true
        default:
        description: 开始时间，示例：20250902
        ranges:
    -
        name: endTime
        type: number
        mandatory: true
        default:
        description: 结束时间，示例：20250905
        ranges:
    -
        name: fromId
        type: number
        mandatory: true
        default:
        description: 起始ID(用于分页)，示例：48739
        ranges:
    -
        name: direction
        type: String
        mandatory: true
        default:
        description: 查询方向: PREV(向前), NEXT(向后)
        ranges: PREV、NEXT
    -
        name: limit
        type: number
        mandatory: true
        default:
        description: 返回条数限制，示例：100
        ranges:

content_markdown:
left_code_blocks:
    -
        code_block: |-
          
        title: Java
        language: java
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
      code_block: |-
        {
        }
      title: Response
      language: json
---
