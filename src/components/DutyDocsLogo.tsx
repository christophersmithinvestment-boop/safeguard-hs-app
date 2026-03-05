"use client";

import Image from "next/image";

interface DutyDocsLogoProps {
    size?: number;
    className?: string;
}

export function DutyDocsLogo({ size = 32, className }: DutyDocsLogoProps) {
    return (
        <Image
            src="/icons/icon-192x192.png"
            alt="DutyDocs"
            width={size}
            height={size}
            className={className}
            style={{ borderRadius: size * 0.2 }}
            priority
        />
    );
}
