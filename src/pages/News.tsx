import React from 'react';

const News: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">News & Updates</h1>

        <div className="space-y-12 max-w-4xl mx-auto">
          {/* Blog Post 1 */}
          <article className="bg-white rounded-lg shadow-md p-8 transition hover:shadow-xl">
            <h2 className="text-3xl font-bold mb-2">
              <a href="#" className="hover:underline">Announcing OkanAssist: Your Personal AI Assistant</a>
            </h2>
            <p className="text-gray-500 mb-4">
              Posted on <time dateTime="2023-10-27">October 27, 2023</time>
            </p>
            <div className="text-gray-700 space-y-4">
              <p>
                We are excited to introduce OkanAssist, a revolutionary AI-powered personal agent designed to simplify your life. In this post, we'll dive deep into the features that make OkanAssist the perfect tool for managing your daily expenses and tasks.
              </p>
              <p>
                From intelligent expense tracking to smart task reminders, discover how OkanAssist can boost your productivity and bring clarity to your finances. This is just the beginning of our journey to create AI that truly assists you in your day-to-day life.
              </p>
            </div>
            <a href="#" className="text-blue-600 hover:underline mt-6 inline-block font-semibold">Read more...</a>
          </article>
          {/* More blog posts can be added here */}
        </div>
      </div>
    </div>
  );
};

export default News;