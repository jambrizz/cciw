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