---
title: 响应代码
position_number: 9
parameters:
- name:
content:
content_markdown: |-
    | httpStatus | 描述 |
    | --- | --- |
    | 200 | 请求成功，请进一步查看rc、mc部分 |
    | 404 | 接口不存在 |
    | 429 | 请求过于频繁，请按照限速要求，控制请求速率 |
    | 500 | 服务异常 |
    | 502 | 网关异常 |
    | 503 | 服务不可用，请稍后重试 |
    

    | rc | return Code |
    | --- | --- |
    | 0 | 业务成功 |
    | 1 | 业务失败 |
    
    
    | mc | message code |
    | --- | --- |
    | SUCCESS | 成功 |
    | FAILURE | 失败 |
    | NO_OPERATION_PERMISSION | 当前账户无操作权限 |
    | PERMISSION_LIMIT | 不允许操作不属于自己的资源 如:删除别的用户apiKey 或者子账户 |
    | ACCOUNT_HAVE_API | 该账户存在apikey无法删除 |
    | ACCOUNT_NAME_EXIST | 账户名已存在 |
    | SUB_ACCOUNT_LIMIT | 子账户创建超过限制 |
    | MASTER_ACCOUNT_REMOVE_LIMIT | 不允许删除主账户 |

left_code_blocks:
- code_block:
  title:
  language:
  right_code_blocks:
- code_block:
  title:
  language:
---


