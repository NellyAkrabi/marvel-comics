import { url, urlComics } from "../../constants/api";
import { getDataApi } from "../../utils/getDataApi";
import { ROOT_INDEX } from "../../constants/root";

class Comics {
  async render() {
    const data = await getDataApi.getData(url + urlComics);

    data.forEach (({id, title,thumbnail: {extension,path}}) => {
        console.log(id, title, extension, path);
    })

    ROOT_INDEX.innerHTML = `
         <h1>Hi, functioniert</h1>
    
    `;
  }
}
export default new Comics();
