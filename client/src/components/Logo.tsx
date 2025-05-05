interface LogoProps {
  variant?: "default" | "white";
  withTagline?: boolean;
  size?: "small" | "medium" | "large";
}

export default function Logo({ 
  variant = "default", 
  withTagline = true,
  size = "medium" 
}: LogoProps) {
  const textColor = variant === "white" ? "text-white" : "text-gray-900";
  const taglineColor = variant === "white" ? "text-gray-200" : "text-gray-500";
  
  // Define image dimensions based on size prop
  const dimensions = {
    small: { width: 32, height: 32 },
    medium: { width: 40, height: 40 },
    large: { width: 48, height: 48 }
  };
  
  const { width, height } = dimensions[size];

  // 3D effect styles for the logo image only
  const logoStyles = {
    filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2))',
    transform: 'perspective(800px) rotateY(5deg)',
    transition: 'transform 0.3s ease, filter 0.3s ease',
  };
  
  // Event handlers for hover effects
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const img = e.currentTarget.querySelector('img');
    if (img) {
      img.style.transform = 'perspective(800px) rotateY(0deg) translateZ(5px)';
      img.style.filter = 'drop-shadow(3px 5px 8px rgba(0, 105, 255, 0.3))';
    }
  };
  
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const img = e.currentTarget.querySelector('img');
    if (img) {
      img.style.transform = 'perspective(800px) rotateY(5deg)';
      img.style.filter = 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2))';
    }
  };

  return (
    <div 
      className="flex items-center space-x-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative" style={{ perspective: '1000px' }}>
        <img 
          src="/Logo2.0.png"
          alt="Startup Resources Logo" 
          width={width}
          height={height}
          className="object-contain"
          style={logoStyles}
        />
      </div>
      <div>
        <div className={`text-xl font-bold ${textColor}`}>STARTUP RESOURCES</div>
        {withTagline && (
          <div className={`text-xs ${taglineColor}`}>Your Growth, Our Mission</div>
        )}
      </div>
    </div>
  );
}
