import { cn } from "@/lib/utils";
import React from "react";

type HeadingProps = {
  className?: string;
  children: React.ReactNode;
};

const SectionHeading = ({ children, className }: HeadingProps) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 pb-6 text-3xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
