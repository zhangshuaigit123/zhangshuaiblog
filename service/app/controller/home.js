'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // 获取用户表的数据

    const result = await this.app.mysql.get('react', {});
    console.log(result);
    this.ctx.body = result;
  }
  async list() {
    const { ctx } = this;
    ctx.body = '<h1>zs blog list</h1>';
  }
}

module.exports = HomeController;
