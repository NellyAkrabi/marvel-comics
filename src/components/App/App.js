
import { url, urlComics } from "../../constants/api";
import { getDataApi } from "../../utils/getDataApi";
import "./App.css"

class App {
    async render() {
        const data = await getDataApi.getData(url + urlComics);
        console.log("result", data);
    }
}

export default new App();