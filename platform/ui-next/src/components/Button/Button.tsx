import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const buttonVariants = cva(
  //  'inline-flex items-center justify-center whitespace-nowrap rounded text-base font-normal leading-tight transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  'mr-2 ml-2',
  {
    variants: {
      size: {
        default: 'h-7 px-2 py-2',
        sm: 'h-6 rounded px-2',
        lg: 'h-9 rounded px-2',
        icon: 'h-6 w-6',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  dataCY?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, forwardRef) => {
    const Comp = asChild ? Slot : 'button';
    const dataCY = props.dataCY || `${props.name}-btn`;

    return (
      <Comp
        data-cy={dataCY}
        className={cn(buttonVariants({ variant, size }), className)}
        ref={forwardRef}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
