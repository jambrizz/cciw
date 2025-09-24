import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/header';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Page() {
    
    return (
        <>
            {/* Banner Section */}
            <div className="flex h-auto w-full flex-col md:h-[475px] md:flex-row">
                {/* Left Color Block */}
                <div className="h-[100px] w-full bg-blue-900 md:h-auto md:w-1/4" />

                {/* Center Image with no spacing */}
                <div className="h-[200px] w-full overflow-hidden md:h-auto md:w-1/2">
                    <Image
                        src="/due_process.jpg"
                        alt="Immigrant make America Great"
                        className="h-full w-full object-cover"
                        width={800}
                        height={400}
                    />
                </div>

                {/* Right Color Block */}
                <div className="h-[100px] w-full bg-blue-900 md:h-auto md:w-1/4" />
            </div>

            {/* Text Section */}
            <div id="2" className="from-harmony-lazuli to-harmony-persian bg-gradient-to-r px-6 py-16 text-center text-white shadow-md">
                <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
                    Welcome to <span className="text-harmony-mint">Central Coast Immigration Warriors</span>
                </h1>

                <p className="text-harmony-cream mx-auto mt-6 max-w-4xl text-lg italic">
                    “Empowering our community through representation and support.”
                </p>
            </div>

            <div id="3" className="">
                <section className="from-harmony-lazuli to-harmony-mint relative bg-gradient-to-br px-6 py-16 text-center text-white">
                    <h2 className="mb-10 text-4xl font-bold">Why Legal Representation Matters</h2>
                    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3">
                        {[
                            { stat: '85%', desc: '5x more likely to succeed in court', source: 'TRAC 2022' },
                            { stat: '3x', desc: 'Higher USCIS approval rate', source: 'ILRC 2023' },
                            { stat: '49% vs 10%', desc: 'Win rate with vs. without lawyer', source: 'TRAC 2020' }
                        ].map((item, idx) => (
                            <div key={idx} className="rounded-lg bg-white/10 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105">
                                <p className="text-5xl font-bold">{item.stat}</p>
                                <p className="mt-3">{item.desc}</p>
                                <p className="mt-2 text-sm italic">{item.source}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <div className="from-harmony-lazuli to-harmony-mint bg-gradient-to-br px-6 pb-16 text-center text-white">
                    <h3 className="mb-4 pt-8 text-lg font-medium text-white">
                        Ready to connect with trusted immigration providers?
                    </h3>
                    <div className="mt-12 flex justify-center">
                        <Link
                            href="/dashboard/providers"
                            className="flex items-center gap-2 rounded-md bg-white/20 px-6 py-3 text-base font-semibold text-white transition duration-300 hover:text-harmony-cream hover:bg-white/30 focus:ring-offset-harmony-lazuli focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                        >
                            Find a Legal Representation
                            <ArrowRightIcon className="h-5 w-5" />
                        </Link>
                    </div>
                </div>

            </div>
            <div>
                <h2>Local Events</h2>
            </div>
        </>
    );
}

