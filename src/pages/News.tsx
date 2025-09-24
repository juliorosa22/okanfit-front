import React from 'react';
import botRegister from '../assets/okanassist_screenshots/bot_register.jpg';
import botStart from '../assets/okanassist_screenshots/bot_start.jpg';
import botMsgProcess from '../assets/okanassist_screenshots/bot_msg_process.jpg';
import botReceiptProcess from '../assets/okanassist_screenshots/bot_receipt_process.jpg';
import appHome from '../assets/okanassist_screenshots/app_home.jpg';
import appAddScreen from '../assets/okanassist_screenshots/app_add_screen.jpg';
import appDashboardTransaction from '../assets/okanassist_screenshots/app_dashboard_transaction.jpg';
import appReminders from '../assets/okanassist_screenshots/app_reminders.jpg';

const News: React.FC = () => {
  return (
    <div className="page-content-defaults">
      <h1 className="text-4xl font-bold text-center mb-12">News & Updates</h1>

      <div className="space-y-12 max-w-4xl mx-auto">


        {/* Blog Post 1 */}
        <article className="bg-white rounded-lg shadow-md p-8 transition hover:shadow-xl">
          <h2 className="text-3xl font-bold mb-2">
            <a href="#" className="hover:underline">Announcing OkanAssist: Your Personal AI Assistant</a>
          </h2>
          <p className="text-gray-500 mb-4">
            Posted on <time dateTime="2025-09-22">September 22, 2025</time>
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

        {/* OkanAssist Telegram Bot Section */}
        <section className="bg-white rounded-lg shadow-md p-8 transition hover:shadow-xl mb-10">
          <h2 className="text-3xl font-bold mb-2">OkanAssist Telegram Bot</h2>
          <p className="text-gray-700 mb-6">
            For fast and intuitive user input, we created a Telegram interface that allows you to interact with OkanAssist in real time. Register your profile, log daily transactions, set reminders, and even send receipts or bank statements for automatic processing—all through a simple chat. The bot is designed to make your financial management seamless and accessible from anywhere.
          </p>
          <div className="okanfit-image-gallery">
            <div className="okanfit-image-card">
              <img src={botRegister} alt="Register with bot" className="okanfit-news-img" />
              <div className="okanfit-img-caption">
                Effortlessly register your profile by chatting with the bot.
              </div>
            </div>
            <div className="okanfit-image-card">
              <img src={botStart} alt="Bot help and features" className="okanfit-news-img" />
              <div className="okanfit-img-caption">
                Discover features and get instant help directly in the chat.
              </div>
            </div>
            <div className="okanfit-image-card">
              <img src={botMsgProcess} alt="Log transactions and reminders" className="okanfit-news-img" />
              <div className="okanfit-img-caption">
                Seamlessly log your expenses and reminders with natural language.
              </div>
            </div>
            <div className="okanfit-image-card">
              <img src={botReceiptProcess} alt="Receipt and statement processing" className="okanfit-news-img" />
              <div className="okanfit-img-caption">
                Send receipts or bank statements—let the vision agent extract transaction details for you.
              </div>
            </div>
          </div>
        </section>

        {/* OkanAssist App (PlayStore) Section */}
        <section className="bg-white rounded-lg shadow-md p-8 transition hover:shadow-xl mb-10">
          <h2 className="text-3xl font-bold mb-2">OkanAssist App (PlayStore)</h2>
          <p className="text-gray-700 mb-6">
            For a comprehensive and detailed management of your data, the OkanAssist mobile app offers a refined UI with dashboards, analytics, and seamless integration with the Telegram bot. Track your finances, visualize reminders, and gain insights—all from your phone.
          </p>
          <div className="okanfit-image-gallery">
            <div className="okanfit-image-card">
              <img src={appHome} alt="App Home" className="okanfit-news-img" />
              <div className="okanfit-img-caption">
                Instantly view your balance and upcoming activities on the home screen.
              </div>
            </div>
            <div className="okanfit-image-card">
              <img src={appAddScreen} alt="App Add Transaction" className="okanfit-news-img" />
              <div className="okanfit-img-caption">
                Quickly add or update detailed transactions and reminders—including those created via the bot.
              </div>
            </div>
            <div className="okanfit-image-card">
              <img src={appDashboardTransaction} alt="App Dashboard" className="okanfit-news-img" />
              <div className="okanfit-img-caption">
                Explore a graphical dashboard for clear insights into your spending and income.
              </div>
            </div>
            <div className="okanfit-image-card">
              <img src={appReminders} alt="App Reminders" className="okanfit-news-img" />
              <div className="okanfit-img-caption">
                Visualize all your upcoming reminders in one place.
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </div>
  );
};

export default News;