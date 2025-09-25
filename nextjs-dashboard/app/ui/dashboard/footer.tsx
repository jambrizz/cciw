'use client';

import {
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    YoutubeIcon,
} from '@heroicons/react/24/outline'; // Optional: Replace with solid icons if needed
import { useEffect, useState } from 'react';

export default function FooterLinks() {
    const [year, setYear] = useState<number>(new Date().getFullYear());

    return (
        <footer className="bg-harmony-lazuli mt-12 py-6 text-white">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 sm:px-6 md:flex-row lg:px-8">

                {/* Copyright Section */}
                <div className="mb-4 text-center md:mb-0 md:text-left">
                    <p className="text-sm">
                        &copy; {year} Central Coast Immigration Warriors. All rights reserved.
                    </p>
                    <p className="mt-1 text-xs">
                        This website is for informational purposes only and does not constitute legal advice.
                    </p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-6">
                    <a href="#" aria-label="Facebook" className="transition-colors hover:text-harmony-mint">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
                            <path d="M8 9h1v3h2v2H9v6H7v-6H5v-2h2V9a2 2 0 012-2h2v2H9v1z" />
                        </svg>
                    </a>
                    <a href="#" aria-label="X (Twitter)" className="transition-colors hover:text-harmony-mint">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
                            <path d="M4 4l8 8m0 0l8-8m-8 8L4 20m8-8l8 8" />
                        </svg>
                    </a>
                    <a href="#" aria-label="Instagram" className="transition-colors hover:text-harmony-mint">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
                            <path d="M15 3h-6a6 6 0 00-6 6v6a6 6 0 006 6h6a6 6 0 006-6v-6a6 6 0 00-6-6zm-3 4a4 4 0 110 8 4 4 0 010-8zm5-1h.01" />
                        </svg>
                    </a>
                    <a href="#" aria-label="YouTube" className="transition-colors hover:text-harmony-mint">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
                            <path d="M15.25 9.5L10 12.5l5.25 3V9.5zM20.25 6.5a2.75 2.75 0 00-1.94-1.94C16.75 4 12 4 12 4s-4.75 0-6.31.56A2.75 2.75 0 003.75 6.5C3.2 8.06 3.2 12 3.2 12s0 3.94.55 5.5a2.75 2.75 0 001.94 1.94C7.25 20 12 20 12 20s4.75 0 6.31-.56a2.75 2.75 0 001.94-1.94c.55-1.56.55-5.5.55-5.5s0-3.94-.55-5.5z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}


/*
const SMLinks = [
    { name: 'Facebook', href: '' },
    { name: 'X', href: '' },
    { name: 'Instagram', href: '' },
    { name: 'YouTube', href: '' }
];

export default function FooterLinks() {
    return (
        <footer className=''>
            <div className='flex items-center gap-10'>
                {SMLinks.map((link) => {
                    return (
                        <a
                            key={link.name}
                            href={link.href}
                            className="flex items-center gap-2 text-gray-700 transition-colors hover:text-blue-600"
                        >
                            <span className="text-sm font-medium">{link.name}</span>
                        </a>
                    )
                })}
            </div>
        </footer>
    )
}
*/