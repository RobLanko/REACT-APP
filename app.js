import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";

function App() {
    return (
        <div className="App">
            <NavBar></NavBar>

            <Catalog></Catalog>

            <Footer></Footer>
        </div>
    );
}

export default App;
