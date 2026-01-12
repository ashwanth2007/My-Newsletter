import React from 'react';
import { NewsletterSection } from './components/NewsletterSection';

const App: React.FC = () => {
  return (
    <>
      <div 
        className="fixed top-0 left-0 w-full h-3 z-50 shadow-md"
        style={{
          background: 'linear-gradient(90deg, #000000 80%, #DC2626 100%)'
        }}
      />
      <div className="min-h-screen w-full flex items-center justify-center bg-white p-4 sm:p-8">
        <NewsletterSection />
      </div>
    </>
  );
};

export default App;