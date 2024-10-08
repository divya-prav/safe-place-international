"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

interface ToggleSwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  label?: string;
}

const ToggleSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  ToggleSwitchProps
>(({ className, label, ...props }, ref) => (
  <div className="flex items-center justify-between">
    {label && <span className="text-lg font-semibold">{label}</span>}
    <div className="relative">
      <Switch
        ref={ref}
        className={cn(
          "w-14 h-7 duration-300 ease-in-out transition-all",
          props.checked ? 'bg-primary' : 'bg-gray-200',
          className
        )}
        {...props}
      />
      <div
        className={cn(
          "absolute left-1 top-1 h-5 w-5 rounded-full bg-gray-600 flex items-center justify-center duration-300 ease-in-out transition-opacity pointer-events-none",
          props.checked ? "opacity-0" : "opacity-100"
        )}
      >
        <X className="h-3 w-3 text-white" />
      </div>
      <div
        className={cn(
          "absolute right-1 top-1 h-5 w-5 rounded-full bg-white flex items-center justify-center duration-300 ease-in-out transition-opacity pointer-events-none",
          props.checked ? "opacity-100" : "opacity-0"
        )}
      >
        <Check className="h-3 w-3 text-primary" />
      </div>
    </div>
  </div>
))
ToggleSwitch.displayName = "ToggleSwitch"

export { Switch, ToggleSwitch }