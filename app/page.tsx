import React from 'react';

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif', background: '#f7f8fa', minHeight: '100vh', color: '#23272f' }}>
      <header style={{ background: '#fff', color: '#b91c1c', padding: '2.2rem 2.5rem 1.5rem 2.5rem', boxShadow: '0 2px 16px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', borderBottom: '1px solid #f0f1f3' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem' }}>
          <h1 style={{ margin: 0, fontSize: '2.6rem', fontWeight: 400, letterSpacing: '0.5px', color: '#23272f' }}>My Tasks</h1>
        </div>
      </header>
      <div style={{ maxWidth: 900, margin: '2.5rem auto 0 auto', display: 'flex', gap: '1.5rem', padding: '0 1.5rem' }}>
        <main style={{ flex: 1, background: '#fff', borderRadius: 18, boxShadow: '0 4px 32px rgba(0,0,0,0.07)', padding: '2.5rem 2rem 3.5rem 2rem', minHeight: 500, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
          <div style={{ color: '#bdbdbd', textAlign: 'center', marginTop: '3.5rem', fontSize: '1.2rem', letterSpacing: '0.2px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem' }}>
            <img src="https://img.icons8.com/fluency/96/000000/empty-box.png" alt="No tasks" style={{ width: 110, height: 110, margin: '0 auto', opacity: 0.7 }} />
            <div>No tasks in this section.<br />Get started by adding one!</div>
          </div>
        </main>
      </div>
    </div>
  );
} 