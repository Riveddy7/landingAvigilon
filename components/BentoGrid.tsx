"use client";

import { cn } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | ReactNode;
    description?: string | ReactNode;
    header?: ReactNode;
    icon?: ReactNode;
}) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-2xl transition duration-200 p-4 bg-white/10 backdrop-blur-xl border border-white/5 hover:border-white/90 justify-between flex flex-col space-y-4 shadow-gray-50/20",
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <div className="font-sans font-bold text-white mb-2 mt-2 text-lg">
                    {title}
                </div>
                <div className="font-sans font-normal text-gray-200 text-sm">
                    {description}
                </div>
            </div>
        </motion.div>
    );
};
