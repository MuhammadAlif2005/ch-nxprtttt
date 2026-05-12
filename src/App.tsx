/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import ExporterDashboard from './pages/ExporterDashboard';
import AddProductWizard from './pages/AddProductWizard';
import Auth from './pages/Auth';
import ExporterProfile from './pages/ExporterProfile';
import Chat from './pages/Chat';
import Transactions from './pages/Transactions';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/chat') || location.pathname === '/add-product';
  const isAuth = location.pathname === '/login' || location.pathname === '/register' || location.pathname.startsWith('/auth');

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      {(!isDashboard && !isAuth) && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/register-buyer" element={<Auth />} />
          <Route path="/register-exporter" element={<Auth />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/exporter/:id" element={<ExporterProfile />} />
          <Route path="/dashboard" element={<ExporterDashboard />} />
          <Route path="/add-product" element={<AddProductWizard />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </main>
      {(!isDashboard && !isAuth) && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
