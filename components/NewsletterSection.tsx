import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';

export const NewsletterSection: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && firstName) {
      setIsLoading(true);
      try {
        await fetch('https://n8n.srv1021168.hstgr.cloud/webhook/d685699f-b890-4f73-91ea-8ba17e63828c', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            name: firstName,
          }),
        });
      } catch (error) {
        console.error('Submission error:', error);
      } finally {
        setIsLoading(false);
        setIsSubmitted(true);
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-4xl w-full mx-auto p-12 text-center animate-fade-in">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Thank you for subscribing.</h2>
        <p className="text-xl text-gray-600">Check your inbox for the first strategy guide.</p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-8 text-brand-red font-medium hover:underline"
        >
          Back to form
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-[1000px] w-full mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 lg:gap-16 pt-8 pb-16">
      {/* Left Column: Image - Smaller icon size per request */}
      <div className="flex-shrink-0 pt-2">
        <a 
          href="https://ashwanth.dev/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block relative w-36 h-36 rounded-[2rem] overflow-hidden shadow-image transform transition-transform duration-500 hover:scale-[1.02]"
        >
           <img 
            src="https://raw.githubusercontent.com/ashwanth2007/test/refs/heads/main/out-25.webp" 
            alt="AI Systems Engineer" 
            className="w-full h-full object-cover"
          />
        </a>
      </div>

      {/* Right Column: Content & Form */}
      <div className="flex-1 flex flex-col text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-[800] tracking-tight text-black leading-[1.1] mb-6">
          How To Build AI Systems<br />for Fortune 500 Companies
        </h1>
        
        <p className="text-lg text-gray-600 italic font-normal leading-relaxed mb-8 max-w-3xl">
          Learn how to build AI systems that deliver results for Fortune 500 companies. Get weekly insights on real production systems, n8n workflows that scale, and automation strategies from real enterprise projects.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-3 mx-auto md:mx-0">
          <Input 
            type="text" 
            placeholder="First Name" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            disabled={isLoading}
          />
          <Input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
          
          <div className="pt-2">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Get Access'}
            </Button>
          </div>
        </form>

        <p className="mt-3 text-xs md:text-sm text-gray-400 text-center md:text-left max-w-2xl italic">
          P.S. Your email stays private. We'll only send you actionable AI strategies — no spam, no fluff.
        </p>
      </div>
    </div>
  );
};