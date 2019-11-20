const fs = require('fs')/*
require的作用：
1.运行时加载
2.拷贝到本页面
3.全部引入*/
const userString = fs.readFileSync(`./db/user.json`).toString()
const userArray = JSON.parse(userString)//反序列化
//读取数据库

const user3 = {
    "id": 3,
    "name": "jackeyLove",
    "password": "aabb"
}
userArray.push(user3)
const string = JSON.stringify(userArray)//序列化
fs.writeFileSync(`./db/user.json`, string)
//写数据库