import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NewsCardProps {
  image: string;
  description: string;
  to: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ image, description, to }) => {
  const navigate = useNavigate();

  return (
    <div
      className="okanfit-news-card"
      style={{ cursor: 'pointer' }}
      onClick={() => navigate(to)}
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') navigate(to);
      }}
      role="button"
      aria-label={description}
    >
      <img src={image} alt="News" className="okanfit-news-card-image" />
      <div className="okanfit-news-card-desc">{description}</div>
    </div>
  );
};

export default NewsCard;