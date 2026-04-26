import React, { useState } from 'react';
import { Search, Image as ImageIcon, ShoppingBag, MessageCircle } from 'lucide-react';

export default function Popup() {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      window.open(`http://localhost:3000/search?q=${encodeURIComponent(query)}`, '_blank');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#f8f9fa' }}>
      <header style={{ padding: '16px', backgroundColor: '#fff', borderBottom: '1px solid #e9ecef', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '32px', height: '32px', backgroundColor: '#FF6B35', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>A</div>
        <h1 style={{ margin: 0, fontSize: '16px', fontWeight: 600, color: '#343a40' }}>AmanaMart Assistant</h1>
      </header>

      <main style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <form onSubmit={handleSearch} style={{ position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#adb5bd' }} />
          <input 
            type="text" 
            placeholder="Search products, ads..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ width: '100%', padding: '12px 12px 12px 40px', border: '1px solid #ced4da', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }}
          />
        </form>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '16px', backgroundColor: '#fff', border: '1px solid #e9ecef', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.2s' }}>
            <ImageIcon size={24} color="#FF6B35" />
            <span style={{ fontSize: '12px', fontWeight: 500, color: '#495057' }}>Image Search</span>
          </button>
          <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '16px', backgroundColor: '#fff', border: '1px solid #e9ecef', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.2s' }}>
            <ShoppingBag size={24} color="#1aab50" />
            <span style={{ fontSize: '12px', fontWeight: 500, color: '#495057' }}>My Orders</span>
          </button>
          <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '16px', backgroundColor: '#fff', border: '1px solid #e9ecef', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.2s', gridColumn: 'span 2' }}>
            <MessageCircle size={24} color="#3b82f6" />
            <span style={{ fontSize: '12px', fontWeight: 500, color: '#495057' }}>Chat Support</span>
          </button>
        </div>
      </main>
      <footer style={{ padding: '12px', textAlign: 'center', fontSize: '11px', color: '#868e96', borderTop: '1px solid #e9ecef' }}>
        AmanaMart © 2026
      </footer>
    </div>
  );
}
