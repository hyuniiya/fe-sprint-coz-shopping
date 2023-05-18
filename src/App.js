import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import ProductsList from "./pages/ProductsList";
import Bookmark from "./pages/Bookmark";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/products/list" element={<ProductsList />} />
                    <Route path="/bookmark" element={<Bookmark />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;