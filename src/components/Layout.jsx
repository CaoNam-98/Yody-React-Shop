import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Cart from '../pages/Cart';
import Product from '../pages/Product';

const Layout = () => {
  return (
    <Router>
      <div className="container-fluid">
        <Header />
        <main className="py-3">
          <div>
            <Route path='/' exact component={Home} />
            <Route path='/catalog/:slug' component={Product} />
            <Route path='/catalog' component={Catalog} />
            <Route path='/cart' component={Cart} />
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default Layout;
