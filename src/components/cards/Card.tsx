"use client";

import { Briefcase, Users, Cpu, Calendar, MapPin } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:max-h-[34rem]">
      <GridItem
        icon={<Briefcase className="h-5 w-5" />}
        title="Supply Market Intelligence"
        team="Marketing Team"
        timeLeft="1 Week Left"
        description="Chakaralaya Analytics offers AI-driven supplier shortlisting for manufacturing companies. It's customizable and streamlines the procurement process."
      />
      <GridItem
        icon={<Users className="h-5 w-5" />}
        title="Supplier Relationship Management (SRM)"
        team="Core UI Team"
        timeLeft="3 Weeks Left"
        description="An upcoming SRM product enhances supplier collaboration and cost efficiency, set to launch in six months."
      />
      <GridItem
        icon={<Cpu className="h-5 w-5" />}
        title="OEE and Machine Tool Selection Software"
        team="Marketing Team"
        timeLeft="2 Days Left"
        description="Chakaralaya Analytics provides SaaS and COTS solutions for optimizing Overall Equipment Efficiency (OEE) and simplifying machine tool selection in manufacturing."
      />
      
    </ul>
  );
}

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  team: string;
  timeLeft: string;
  description: React.ReactNode;
}

const GridItem = ({ icon, title, team, timeLeft, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[15rem] list-none")}>
      <div className="relative h-full rounded-[1.25rem] border border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
          <div className="flex flex-col gap-3">
            {/* Icon */}
            <div className="w-fit rounded-lg border border-border bg-muted p-2">{icon}</div>

            {/* Title */}
            <h3 className="text-lg md:text-xl font-semibold tracking-tight text-foreground">
              {title}
            </h3>

            {/* Team + Time */}
            <div className="flex items-center justify-between text-sm md:text-base text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span className="font-medium">{team}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{timeLeft}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default GlowingEffectDemo;
