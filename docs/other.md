### isUrl(str)

- 描述：
  判断路由是否合法

- 参数：

  - `{string} str`

- 返回值：`{boolean}`

- 示例：
  ```js
  f.isUrl("www.cnblogs.com"); // false
  ```

### getUrlParams(str)

- 描述：

  获得表示路由参数的对象

- 参数：

  - `{string} str`

- 返回值：`{Object}`

- 示例：
  ```js
  f.getUrlParams("http://localhost:8080/?a=12&b=hl==&c=243"); // {a: "12", b: "hl==", c: "243"}
  ```

### parseUrl(str)

- 描述：

  解析 url

- 参数：

  - `{string} str`

- 返回值：`{Object}` 包含路由信息的对象

- 示例：
  ```js
  f.parseUrl(
    "https://play.grafana.org:80/d/000000012/grafana-play-home?orgId=1#aa/bb"
  );
  /*
    {
      filename: 'grafana-play-home',
      hash: 'aa/bb',
      host: 'play.grafana.org',
      params: { orgId: 1 },
      path: '/d/000000012/grafana-play-home',
      port: '80',
      protocol: 'https',
      search: '?orgId=1'
    }
  */
  ```
