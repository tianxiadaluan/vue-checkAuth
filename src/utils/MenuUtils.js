import lazyLoading from './lazyLoading'
export default (routers,data) => {
  generaMenu(routers,data)
}
function generaMenu(routers,data){
  // 这里是直接参考别人的写法，但是在浏览器里面forEach报错，所以我用了Forin的方式改了一下
  // data.forEach((item)=>{
  //   let menu = Object.assign({},item)
  //   menu.component = lazyLoading(menu.component)
  //   if(!item.leaf){
  //     menu.children = []
  //     generaMenu(menu.children,item.children)
  //   }
  //   routers.push(menu)
  // })
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      var element = data[key];
      let menu = Object.assign({},element);
      menu.component = lazyLoading(menu.name)
      routers.push(menu);
    }
  }
}