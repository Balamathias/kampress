"use client"

import { useEffect } from 'react';

const InboxPage = () => {
  useEffect(() => {
    window.location.href = 'https://da22.host-ww.net/roundcube/';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to inbox...</p>
    </div>
  );
}

export default InboxPage