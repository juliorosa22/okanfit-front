import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
        <div className="bg-white p-8 rounded-lg shadow-md text-gray-700 space-y-4">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p>[Your Company] is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
          <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
          <p>We may collect personal information such as your name, email address, and payment information when you use our services or contact us.</p>
          <p><strong>Important:</strong> You must replace this placeholder text with your actual privacy policy. This is a legal requirement for Stripe and for protecting your users.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;