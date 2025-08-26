import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/header';

export default function Page() {
  return (
      <>
          <div className="flex items-center justify-center">
              <div className="flex min-h-screen items-center justify-center">
                  <div>
                      <img className="w-full max-w-md rounded bg-white p-6 shadow" src='@/' alt='Central Coast Immigration Warriors Logo'></img>
                  </div>
              </div>
              <strong>Welcome to Central Coast Immigration Warriors Home Page</strong>
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
