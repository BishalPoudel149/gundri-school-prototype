import React from 'react';

interface PageHeaderProps {
  title: string;
  backgroundImage?: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  backgroundImage = 'https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=1600',
  subtitle 
}) => {
  return (
    <div className="relative pt-40 pb-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative container-custom text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl max-w-3xl mx-auto">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;