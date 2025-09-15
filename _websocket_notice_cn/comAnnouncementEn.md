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

    format: com_announcement

    eg: com_announcement
    

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
                        "id": 10304809153689,                   // -- Announcement ID
                        "catalogId": 10304809153689,           // -- Category ID (see: https://xtsupport.zendesk.com/api/v2/help_center/en-us/categories)
                        "catalogName": "Latest Promotions",    // -- Category Name 
                        "sectionId": 10304809153689,           // -- Subcategory ID
                        "sectionName": "Trading Contest",      // -- Subcategory Name (see: https://xtsupport.zendesk.com/api/v2/help_center/en-us/sections)
                        "publishDate": 1753257631403,         // -- Publication Timestamp (in milliseconds)
                        "title": "Notice of...",              // -- Announcement Title
                        "content": "This is...",              // -- Announcement Content
                        "disclaimer": "Trade on-the-go...",    // -- Disclaimer
                        "url": "",                             // -- Announcement Link (plain text)
                        "htmlUrl": ""                          // -- Announcement HTML Link (for web access)
                    }
                }
        title: Response
        language: json
---
