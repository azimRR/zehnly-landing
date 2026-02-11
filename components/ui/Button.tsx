import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

export const Button = ({ 
  variant = "primary", 
  size = "md", 
  className, 
  children, 
  ...props 
}: ButtonProps) => {
  
  const variants = {
    primary: "bg-zehnly-green text-white shadow-3d-green border-zehnly-green-dark active:shadow-none active:translate-y-[4px]",
    secondary: "bg-zehnly-violet text-white shadow-3d-violet border-zehnly-violet-dark active:shadow-none active:translate-y-[4px]",
    outline: "bg-white text-slate-500 shadow-3d border-slate-200 active:shadow-none active:translate-y-[4px] hover:bg-slate-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm border-b-2",
    md: "px-6 py-3 text-base border-b-4",
    lg: "px-8 py-4 text-lg font-bold border-b-[6px]",
    xl: "w-full md:w-auto px-10 py-5 text-xl font-extrabold border-b-[8px]",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "rounded-2xl transition-all duration-75 uppercase tracking-wide",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
