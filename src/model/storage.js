/**
 * @author suwenguang
 * @email suveng@163.com
 * since 2019/2/14
 * description: 操作localStorage的方法；模块化的文件
 **/

var storage={
  set(key,value){
    localStorage.setItem(key,JSON.stringify(value));
  },
  get(key){
    return JSON.parse(localStorage.getItem(key));
  },
  remove(key){
    localStorage.removeItem(key);
  },

};
// 暴露出去
export default storage;
