import { observable, action } from "mobx";

class Store {
    id = Math.random();
    @observable title = "飞飞";
    @observable lang = 'zh-CN';
    @action setLang = (lang) => {
        this.lang = lang
    }
}
export default new Store()