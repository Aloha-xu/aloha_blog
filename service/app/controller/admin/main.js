//使用严格模式
'use strict'

const Controller = require('egg').Controller;

class MainController extends Controller {
    async index() {
        this.ctx.body = 'hi houtai'
    }

    async checkLogin() {
        let userName = this.ctx.request.body.userName
        let password = this.ctx.request.body.password
        const sql = " SELECT userName FROM admin_user WHERE userName = '" + userName +
            "' AND password = '" + password + "'"
        const res = await this.app.mysql.query(sql)
        if (res.length > 0) {
            //登录成功,进行session缓存
            let openId = new Date().getTime()
            this.ctx.session.openId = { 'openId': openId }
            this.ctx.body = { 'data': '登录成功', 'openId': this.ctx.session }
        } else {
            this.ctx.body = { data: '登录失败' }
        }
    }

    async getTypeInfo() {
        const typeinfo = await this.app.mysql.select('type')
        this.ctx.body = { data: typeinfo }
    }

    async addArticle() {
        //临时的文章数据
        let tmpArticle = this.ctx.request.body
        const result = await this.app.mysql.insert('article', tmpArticle)
        //如果插入成功的话 返回插入行数等于1 否者就是false undefind
        const insertSuccess = result.affectedRows === 1
        //返回插入的id
        const insertId = result.insertId
        console.log("返回的id" + insertId)
        //给前端返回数据
        this.ctx.body = {
            isScuccess: insertSuccess,
            insertId: insertId
        }
    }

    //修改文章
    async updateArticle() {
        let tmpArticle = this.ctx.request.body
        const result = await this.app.mysql.update('article', tmpArticle);
        const updateSuccess = result.affectedRows === 1;
        console.log(updateSuccess)
        this.ctx.body = {
            isScuccess: updateSuccess
        }
    }


    //获得文章列表
    async getArticleList() {
        let sql = 'SELECT article.id as id,' +
            'article.title as title,' +
            'article.introduce as introduce,' +
            'article.view_count as view_count,' +
            "FROM_UNIXTIME(article.addTime,'%Y-%m-%d' ) as addTime," +
            'type.typeName as typeName ' +
            'FROM article LEFT JOIN type ON article.type_id = type.id ' +
            'ORDER BY article.id DESC '
        const resList = await this.app.mysql.query(sql)
        this.ctx.body = { list: resList }
    }

    //删除某一篇文章
    async delArticle() {
        let id = this.ctx.params.id
        const res = await this.app.mysql.delete('article', { 'id': id })
        this.ctx.body = {
            data: res
        }
    }

    //根据文章ID得到文章详情，用于修改文章
    async getArticleById() {
        let id = this.ctx.params.id

        let sql = 'SELECT article.id as id,' +
            'article.title as title,' +
            'article.introduce as introduce,' +
            'article.article_content as article_content,' +
            "FROM_UNIXTIME(article.addTime,'%Y-%m-%d' ) as addTime," +
            'article.view_count as view_count ,' +
            'type.typeName as typeName ,' +
            'type.id as typeId ' +
            'FROM article LEFT JOIN type ON article.type_id = type.id ' +
            'WHERE article.id=' + id
        const result = await this.app.mysql.query(sql)
        this.ctx.body = { data: result }
    }

}

module.exports = MainController;