/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require("./bootstrap");

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// require('./components/Example');

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Example from './components/Example';
import About from "./About";
import ArticleCreate from "./article/ArticleCreate";
import ArticleList from "./article/ArticleList";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/article/create" element={<ArticleCreate />} />
                <Route path="/article/index" element={<ArticleList />} />
            </Routes>
        </BrowserRouter>
    );
};

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
export default App;
