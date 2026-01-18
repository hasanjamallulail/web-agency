import React from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../../utils/analytics';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'ghost';
  href?: string; // External link or anchor
  to?: string; // Internal Router link
  onClick?: () => void;
  trackName?: string; // Event name for analytics
  trackParams?: Record<string, any>; // Params for analytics
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  to,
  onClick,
  trackName,
  trackParams,
  className = '',
  type = 'button',
  target,
  rel,
  disabled
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-full disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    // Neon Blue Primary
    primary: "bg-blue-600 text-white shadow-lg shadow-blue-600/40 hover:bg-blue-500 hover:scale-105 hover:shadow-blue-500/60 border border-transparent",
    // Dark Gray Secondary
    secondary: "bg-slate-800 text-white shadow-lg hover:bg-slate-700 hover:scale-105 border border-slate-700",
    // Neon Outline
    outline: "bg-transparent text-slate-300 border border-slate-600 hover:bg-slate-800 hover:border-blue-400 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]",
    // High Contrast White
    white: "bg-white text-slate-950 shadow-xl shadow-white/10 hover:bg-gray-200 hover:scale-105",
    // Ghost
    ghost: "bg-transparent text-slate-400 hover:text-white hover:bg-slate-800/50"
  };

  const sizes = "px-6 py-3 text-base md:px-8 md:py-4 md:text-lg"; // Default comfortable size

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes} ${className}`;

  const handleClick = (e: React.MouseEvent) => {
    if (trackName) {
      trackEvent(trackName, trackParams);
    }
    if (onClick) {
      onClick();
    }
  };

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;