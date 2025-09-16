---
title: 公告推送
position_number: 7
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
    **request**
    
    用户可通过WebSocket订阅功能，实时接收英文公告，帮助您在最新动态、活动信息及重要资讯发布的第一时间掌握相关内容。

    &nbsp;

    format: com_announcement_en

    eg: com_announcement_en
    

    &nbsp;
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
                {
                    "topic": "com_announcement_en", 
                    "event": "com_announcement_en", 
                    "data": {
                                "id": 10304809153689                  // --公告ID
                                "catalogId": 10304809153689,           //--栏目ID https://xtsupport.zendesk.com/api/v2/help_center/en-us/categories
                                "catalogName": "Latest Promotions",    //--栏目名称 
                                "sectionId": 10304809153689,           //--子栏目ID
                                "sectionName": "Trading Contest",     // --子栏目名称 https://xtsupport.zendesk.com/api/v2/help_center/en-us/sections
                                "publishDate": 1753257631403,         //--发布时间戳
                                "title": "Notice of...",              //--公告标题 
                                "content": "This is...",               // --公告内容 
                                "disclaimer": "Trade on-the-go...",    //--免责申明 
                                "url":"",                              //--公告链接
                                "htmlUrl":""                           //--公告html链接
                            }
                }
        title: Response
        language: json
---
