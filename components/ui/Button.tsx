import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
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
    primary: "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:opacity-90",
    secondary: "bg-zehnly-violet text-white hover:opacity-90",
    outline: "bg-transparent border border-zinc-200 dark:border-dark-border text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-dark-surface",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={cn(
        "rounded-xl font-semibold transition-opacity duration-150",
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
