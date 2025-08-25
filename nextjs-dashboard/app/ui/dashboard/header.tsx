import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

const links = [
    { name: 'Home', href: '/dashboard' },
    { name: 'Invoices', href: '/dashboard/invoices' },
    { name: 'Customers', href: '/dashboard/customers' },
];

export default function NavLinks() {
    return (
        <nav className="flex w-full items-center justify-between bg-gray-100 px-6 py-3 shadow-md">
            <div className="flex items-center gap-8">
                {links.map((link) => {
                    ////////const LinkIcon = link.icon;
                    return (
                        <a
                            key={link.name}
                            href={link.href}
                            className="flex items-center gap-2 text-gray-700 transition-colors hover:text-blue-600"
                        >
                            <span className="text-sm font-medium">{link.name}</span>
                        </a>
                    );
                })}
            </div>
        </nav>
    );
}
