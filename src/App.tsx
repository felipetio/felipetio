/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contato" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
    </LanguageProvider>
  );
}

