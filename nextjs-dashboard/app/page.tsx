import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/header';
import Image from 'next/image';


export default function Page() {
  return (
      <>
          <div className="flex flex-col items-center justify-center">
              <div className="flex min-h-screen items-center justify-center">
                  <div>
                      <Image
                          src="/warriors-logo.png"
                          alt='Central Coast Immigration Warriors Logo'
                          className="w-full max-w-md rounded bg-black p-6 shadow"
                          width={1000}
                          height={760}
                          //Add the hero mobile image below this element
                      />
                      
                  </div>
              </div>
              <div className='' >
                  <strong>Welcome to Central Coast Immigration Warriors Home Page</strong>
              </div>
              <div>
              </div>
              <strong>Providers page</strong>
              <div>
                  <strong>Events</strong>
              </div>
          </div>
    </>
  );
}
