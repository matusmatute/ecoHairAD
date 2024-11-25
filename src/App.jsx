
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Sidebar from './componets/Sidebar';
import Footer from './componets/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AddProductForm from './componets/AddProductForm';

export default function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <main className="p-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/add-product" element={<AddProductForm />} />
              <Route path="/about" element={<h1>About Page</h1>} />
              <Route path="/contact" element={<h1>Contact Page</h1>} />
              <Route path="/dashboard" element={<h1>Dashboard Page</h1>} />
              <Route path="/settings" element={<h1>Settings Page</h1>} />
              <Route path="/profile" element={<h1>Profile Page</h1>} />
            </Routes>
          </main>
        </div>
      </div>
      <Footer />
    </Router>
  );
}
