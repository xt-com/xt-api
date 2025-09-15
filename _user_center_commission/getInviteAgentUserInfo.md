---
title: Get Invite Agent User Info
position_number: 10
type: get
description: /v4/referal/invite/agent/user/info
parameters:
  -
    name: uidList
    type: String
    mandatory: true
    default:
    description: uid list, e.g：[6118530023996, 6118530023997]
    ranges:
  -
    name: startTime
    type: number
    mandatory: true
    default:
    description: start time， e.g：20250902
    ranges:
  -
    name: endTime
    type: number
    mandatory: true
    default:
    description: end time， e.g：20250905
    ranges:
  -
    name: fromId
    type: number
    mandatory: true
    default:
    description: from id，e.g：48739
    ranges:
  -
    name: direction
    type: String
    mandatory: true
    default:
    description: query direction: PREV, NEXT
    ranges: PREV、NEXT
  -
    name: limit
    type: int
    mandatory: true
    default:
    description: Limit number, max 100
    ranges: 1<=limit<=100

content_markdown: >-

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
