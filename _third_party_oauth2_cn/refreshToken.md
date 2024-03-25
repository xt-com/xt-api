---
title: 刷新Token
position_number: 2
type: get
description: /public/uaa/oauth2/token?client_id={client_id}&client_secret=${client_secret}&grant_type={grant_type}&refresh_token={refresh_token}
parameters:
    -
        name: client_id
        type: string
        mandatory: true
        default:
        description: 机构标识
        ranges:
    -
        name: client_secret
        type: string
        mandatory: true
        default:
        description: 机构Secret Key
        ranges:
    -
        name: grant_type
        type: string
        mandatory: true
        default:
        description: 授权类型，固定值
        ranges: refresh_token
    -
        name: refresh_token
        type: string
        mandatory: true
        default:
        description: 申请token时返回的refresh_token字段
ranges:
content_markdown:
left_code_blocks:
    -
        code_block:
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
                    "rc": 0,
                    "mc": "SUCCESS",
                    "ma": [],
                    "result": {
                        "user_id":"12345678",
                        "access_token": "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxIiwidXNlci1pZCI6MSwic2NvcGUiOiJ1c2VyaW5mbyIsImlzcyI6Inh0LmNvbSIsImV4cCI6MTY5MTU2MTA3NiwiY2xpZW50X2lkIjoiMzVMRjJGU0xIWDVJUlFBNCJ9.vkSTiFLcQuO0qJqdm21MfmoLKb38wwhsKPCJI3x1xmOxYouH5GtmcYglk0XRxPeOMVZ-6E6tM3HGn1yMQdqTgHOVeAbtLSBBIqyUh6y-8j_MF8GyBwcEaRK2hfWBNOHw06B-0jLO_mKEduUWZXYHjNiAN2jenbj7Ba6MX7rcENk",//用于访问授权接口的token
                        "refresh_token": "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxIiwidXNlci1pZCI6MSwic2NvcGUiOiJ1c2VyaW5mbyIsImlzcyI6Inh0LmNvbSIsImV4cCI6MTY5NDE1MzA3NiwiY2xpZW50X2lkIjoiMzVMRjJGU0xIWDVJUlFBNCJ9.UIeGGDiiybfEUEPFAteN3TtCxz5PyZxGDIULaNJjO3mCck7s28nRpXWSxONMGYMXG03XxJVUJs5WfdpNEmKUmmoQQuy-UOCuvV7zLdFmwUHd5e5tDMA7mgTCxbCeyxYE4L8Vr8StEEhxwWbDFxG_-2wdNEgEIvlgg9bI87Qcy9s",//用于刷新access token的token
                        "expires_in": 15551999,//access_token距离过期的毫秒数
                        "refresh_expires_in": 18143999,//refresh_token距离过期的毫秒数
                        "client_id": "35LF2FSLHX5IRQA4",//机构标识
                        "scope": "userinfo"//授权的scope
                    }
                }
        title: Response
        language: json
---

