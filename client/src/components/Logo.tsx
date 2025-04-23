import { ArrowUpRight } from "lucide-react";

interface LogoProps {
  variant?: "default" | "white";
  withTagline?: boolean;
}

export default function Logo({ variant = "default", withTagline = true }: LogoProps) {
  const textColor = variant === "white" ? "text-white" : "text-gray-900";
  const taglineColor = variant === "white" ? "text-gray-200" : "text-gray-500";

  return (
    <div className="flex items-center space-x-2">
      <ArrowUpRight 
        className={`h-8 w-8 ${variant === "white" ? "text-white" : "text-primary"}`} 
        strokeWidth={2.5} 
      />
      <div>
        <div className={`text-xl font-bold ${textColor}`}>STARTUP RESOURCES</div>
        {withTagline && (
          <div className={`text-xs ${taglineColor}`}>Recruitment Solutions for Startups</div>
        )}
      </div>
    </div>
  );
}
