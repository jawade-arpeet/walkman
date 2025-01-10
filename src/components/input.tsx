import React from "react";

import cn from "@/utils/cn";

function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full bg-transparent text-sm px-3 py-2 h-9 border border-stone-700 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-none placeholder:text-stone-400",
        className,
      )}
      {...props}
    />
  );
}

export default Input;
