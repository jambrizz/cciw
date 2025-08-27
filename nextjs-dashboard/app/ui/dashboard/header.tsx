import {
    UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const links = [
    { name: 'Home', href: '/' },
    { name: 'Providers', href: '/dashboard/providers' },
    { name: 'Events', href: '/dashboard/events' },
    { name: 'About Us', href: '/dashboard/about' },
    { name: 'Login', href: '/dashboard/login', icon: UserCircleIcon }
];

export default function NavLinks() {
    return (
        <nav className="flex w-full items-center justify-between bg-gray-100 px-6 py-3 shadow-md">
            <div className="flex items-center gap-8">
                {links.map((link) => {
                    const LinkIcon = link.icon;
                    return (
                        <a
                            key={link.name}
                            href={link.href}
                            className="flex items-center gap-2 text-gray-700 transition-colors hover:text-blue-600"
                        >
                            {LinkIcon && <LinkIcon className='w-6' /> }
                            <span className="text-sm font-medium">{link.name}</span>
                        </a>
                    );
                })}
            </div>
        </nav>
    );
}
