import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "../../../utils/cn";

const Label = React.forwardRef(function ({ className, ...props }, ref) {
  return React.createElement(LabelPrimitive.Root, {
    ref: ref,
    className: cn(
      "text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    ),
    ...props,
  });
});
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
