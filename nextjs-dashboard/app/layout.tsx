import NavLinks from '@/app/ui/dashboard/header';
import SMLinks from '@/app/ui/dashboard/footer';
import '@/app/ui/global.css';
import { inter, lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
          <body className={`${inter.className} antialiased`}>
              <NavLinks />
              {children}
              <p className={`${lusitana.className}`}></p>
              <SMLinks />
          </body>
    </html>
  );
}
