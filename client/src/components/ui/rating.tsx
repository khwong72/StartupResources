import { Star } from "lucide-react";

interface RatingProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Rating({ value, max = 5, size = 'md', className = '' }: RatingProps) {
  const stars = Array.from({ length: max }, (_, i) => i + 1);
  
  const starSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };
  
  return (
    <div className={`flex items-center ${className}`}>
      {stars.map((star) => (
        <Star
          key={star}
          className={`${starSizes[size]} ${star <= value ? 'text-primary fill-primary' : 'text-gray-300'} mr-1`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
