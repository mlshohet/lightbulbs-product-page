import React from 'react';

import Header from './components/header/header.component';
import ProductPage from './pages/product-page/product-page.component';
import Footer from './components/footer/footer.component';

import './App.scss';

function App() {
  return (
    <div>
 		<Header />
	    <ProductPage />
	    <Footer />
    </div>
  );
}

export default App;
