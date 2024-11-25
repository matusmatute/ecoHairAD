import React from 'react';

export default function Footer() {
  return (
    <footer className="p-4 mt-10 text-white bg-gray-800" style={{ marginTop: 1 }}>
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My App. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
