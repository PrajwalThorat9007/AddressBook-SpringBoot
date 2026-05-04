import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AddressBookList from './components/AddressBookList';
import AddressBookForm from './components/AddressBookForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<AddressBookList />} />
            <Route path="/add" element={<AddressBookForm />} />
            <Route path="/edit/:id" element={<AddressBookForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
