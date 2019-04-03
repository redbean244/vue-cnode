# vue-cnode

> 一个 Vue 的**初/中级**练手项目：重构 CnodeJS 社区

[**预览**](https://redbean244.github.io/vue-cnode/cnode/dist/#/)



![vue](https://github.com/redbean244/vue-cnode/blob/master/cnode/dist/static/vue.png)



# Vue搭建cnode社区

项目介绍：该项目使用Vue还原cnode官方社区

项目内容：项目主要分为首页，文章详情页，个人页等页面信息
         抽象出来六个组件，分别是
         
​		     1)Header头部组件 2）Postlist列表组件 3）Article文章的详情页组件

  		   4）Userinfo用户个人信息组件 5）Slidebar侧边栏组件 6）Pagination分页组件

项目技术：项目调用cnode官方社区提供的API获取文章、用户头像等数据 

​		     项目使用Vue-cil创建项目模板，使用Axios获取数据

​   		 使用Vue-router进行前端路由的切换及传参

​        使用父子组件之间通信进行参数的传递

​        使用过滤器进行文本格式化

项目创新：原社区的分页组件缺少返回首页的功能，给大家操作带来极大不方便。

​    	    在进行项目需求分析的时候，加上此功能并实现。





### 本地运行：


```bash
git clone https://github.com/redbean244/vue-cnode.git
cd vue-cnode
npm install
npm run serve
```

PS: 默认用的是 8080 端口。

---

### 技术栈：

[Vue](https://cn.vuejs.org/)

[Vue-Router](https://router.vuejs.org/zh-cn/)

[Axios](https://github.com/axios/axios)

[ElementUI](http://element.eleme.io/)

[CnodeJS API](https://cnodejs.org/api)
