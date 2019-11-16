var http = require("http");
var fs = require("fs");
var url = require("url");
var port = process.argv[2];

if (!port) {
    console.log("请指定端口号好不啦？\nnode server.js 8888 这样不会吗？");
    process.exit(1);
}

var server = http.createServer(function (request, response) {
    var parsedUrl = url.parse(request.url, true);
    var pathWithQuery = request.url;
    var queryString = "";
    if (pathWithQuery.indexOf("?") >= 0) {
        queryString = pathWithQuery.substring(pathWithQuery.indexOf("?"));
    }
    var path = parsedUrl.pathname;
    var query = parsedUrl.query;
    var method = request.method;

    /******** 从这里开始看，上面不要看 ************/

    response.statusCode = 200;
    const filePath = path === `/` ? `/index.html` : path//如果是/，就默认为index.html，否则是path（默认首页）
    let content
    const index = filePath.lastIndexOf(`.`)
    const suffix = filePath.substring(index)//后缀的意思
    const fileTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpeg'
    }
    response.setHeader("Content-Type",
        `${fileTypes[suffix] || `index.html`};charset=utf-8`);
    try {
        content = fs.readFileSync(`./public${filePath}`)
    } catch (error) {
        content = `文件不存在`
        response.statusCode = 404
    }

    response.write(content);
    response.end();

    /******** 代码结束，下面不要看 ************/
});

server.listen(port);
console.log("监听 " + port + " 成功\n打开 http://localhost:" + port);