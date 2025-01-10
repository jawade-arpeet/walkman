import React from "react";

import { cva, VariantProps } from "class-variance-authority";

import cn from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-x-4 rounded-full text-sm font-semibold transition-colors duration-100",
  {
    variants: {
      variant: {
        default: "bg-stone-50 text-stone-950 hover:bg-stone-200",
        outline:
          "border border-stone-50 hover:bg-stone-50 hover:text-stone-950",
        ghost: "hover:bg-foreground hover:text-background",
      },
      size: {
        default: "px-4 py-2 h-9",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

function Button({ children, className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
