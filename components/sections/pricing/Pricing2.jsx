"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

const Pricing2 = () => {
  const [isAnnually, setIsAnnually] = useState(false);
  return (
    <section className="py-16 md:py-20 lg:py-32">
      <div className="container">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-6">
          <h2 className="text-pretty text-center text-4xl font-bold lg:text-6xl">
            Pricing
          </h2>
          <div className="space-y-4 text-center">
            <p className="text-muted-foreground lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div className="flex h-11 w-fit shrink-0 items-center rounded-md bg-muted p-1 text-lg mx-auto">
              <RadioGroup
                defaultValue="pricing-monthly"
                className="h-full grid-cols-2"
                onValueChange={(value) => {
                  setIsAnnually(value === "annually");
                }}
              >
                <div className='h-full rounded-md transition-all has-[button[data-state="checked"]]:bg-white'>
                  <RadioGroupItem
                    value="pricing-monthly"
                    id="pricing-monthly"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="pricing-monthly"
                    className="flex h-full cursor-pointer items-center justify-center px-7 font-semibold text-muted-foreground peer-data-[state=checked]:text-primary"
                  >
                    Monthly
                  </Label>
                </div>
                <div className='h-full rounded-md transition-all has-[button[data-state="checked"]]:bg-white'>
                  <RadioGroupItem
                    value="pricing-annually"
                    id="pricing-annually"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="pricing-annually"
                    className="flex h-full cursor-pointer items-center justify-center gap-1 px-7 font-semibold text-muted-foreground peer-data-[state=checked]:text-primary"
                  >
                    Yearly
                    <span className="inline-flex items-center rounded-full border py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-green-200 bg-green-100 px-1.5 text-green-600">-20%</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="mt-10 grid max-w-screen-md gap-6 md:grid-cols-2 mx-auto">
            <div className="flex w-full flex-col rounded-lg border p-6 text-left">
              <Badge className="mb-8 block w-fit">PRO</Badge>
              <span className="text-4xl font-medium">
                {isAnnually ? "$99" : "$9"}
              </span>
              <p className="text-muted-foreground">Per month</p>
              <Separator className="my-6" />
              <div className="flex h-full flex-col justify-between gap-20">
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Everything in FREE</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Live call support every month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Unlimited Storage</span>
                  </li>
                </ul>
                <Button className="w-full">Upgrade to PRO</Button>
              </div>
            </div>

            <div className="flex w-full flex-col rounded-lg border bg-muted p-6 text-left">
              <Badge className="mb-8 block w-fit">ENTREPRISE</Badge>
              <span className="text-4xl font-medium">
                {isAnnually ? "$199" : "$19"}
              </span>
              <p className="text-muted-foreground">Per user/month</p>
              <Separator className="my-6" />
              <div className="flex h-full flex-col justify-between gap-20">
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Everything in PRO</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Custom branding</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Unlimited users</span>
                  </li>
                </ul>
                <Button className="w-full">Upgrade to ENTREPRISE</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing2;
