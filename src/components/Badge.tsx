import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const baseClasses = "inline-block font-medium rounded-full";
  
  const variantClasses = {
    default: "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200",
    primary: "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300",
    secondary: "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300",
    success: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
    warning: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    error: "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300"
  };
  
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-2.5 py-1",
    lg: "text-base px-3 py-1.5"
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <span className={classes}>
      {children}
    </span>
  );
};

export default Badge;