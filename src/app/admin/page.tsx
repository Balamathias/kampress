"use client"

import { useEffect } from 'react';

const AdminPage = () => {
  useEffect(() => {
    window.location.href = 'https://da22.host-ww.net:2222/evo/login';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to admin panel...</p>
    </div>
  );
}

export default AdminPage