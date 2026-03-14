import logoImage from "figma:asset/b97e5422d87c3afed2179b82aed1181260ba8970.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoImage}
        alt="RK World Tower Association"
        className="h-[57.6px] md:h-[67.2px] w-auto"
      />
    </div>
  );
}