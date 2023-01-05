
import Comics from '../Comics/comics'
import "./App.css"

class App {
    async render() {
       await Comics.render();
    }
}

export default new App();