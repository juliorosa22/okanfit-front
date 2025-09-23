import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-8">Terms of Service</h1>
        <div className="bg-white p-8 rounded-lg shadow-md text-gray-700 space-y-4">
          <h2 className="text-2xl font-semibold">1. Agreement to Terms</h2>
          <p>By using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the services.</p>
          <p><strong>Important:</strong> This is placeholder text. You must consult with a legal professional to draft your Terms of Service to ensure it is appropriate for your business and jurisdiction.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;