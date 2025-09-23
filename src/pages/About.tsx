import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-8">About OkanFit</h1>
        <div className="bg-white p-8 rounded-lg shadow-md text-gray-700 space-y-4">
          <p>Welcome to OkanFit! We are a technology company dedicated to "Fitting AI to solve specific problems."</p>
          <p>Our mission is to build intelligent, user-friendly solutions that make a real impact on people's daily lives. Our flagship product, OkanAssist, is a testament to this commitment, helping users manage their finances and tasks with the power of AI.</p>
          <p>Our team is composed of passionate innovators, developers, and designers who believe in the transformative power of artificial intelligence.</p>
        </div>
      </div>
    </div>
  );
};

export default About;