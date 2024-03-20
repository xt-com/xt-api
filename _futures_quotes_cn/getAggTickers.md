---
title: 获取全交易对的聚合行情信息
position_number: 17
type: get
description: /future/market/v1/public/q/agg-tickers
parameters:
content_markdown: 注：**此方法不需要签名**
left_code_blocks:
    -
        code_block: "public void getKLine() {\r\n\tString text = HttpUtil.get(URL + \"/data/api/future/market/v1/getKLine?market=btc_usdt&type=1min&since=0\");\r\n\tSystem.out.println(text);\r\n}"
        title: Java
        language: java
right_code_blocks:
    - code_block: |-
        {
          "error": {
            "code": "",
            "msg": ""
          },
          "msgInfo": "",
          "result": [
            {
              "a": "", //24小时成交量
              "ap": "", //卖一价格
              "bp": "", //买一价格
              "c": "", //最新价
              "h": "", //24小时最高价
              "i": "", //指数价格
              "l": "", //24小时最低价
              "m": "", //标记价格
              "o": "", //24小时前第一笔成交价
              "r": "", //24小时涨跌幅
              "s": "", //交易对
              "t": 0, //时间
              "v": "" //24小时成交额
            }
          ],
          "returnCode": 0
        }
      title: Response
      language: json
---