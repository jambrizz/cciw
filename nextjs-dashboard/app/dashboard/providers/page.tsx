import Pagination from '@/app/ui/support/pagination';
import Search from '@/app/ui/search';
import { fetchProviders, fetchProvidersPages } from '@/app/lib/data';
import ProviderList from '@/app/components/ProviderList';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { headers } from 'next/headers';

export default async function ProvidersPage() {
    // ✅ Await headers first
    const headersList = await headers();
    const referer = headersList.get('referer');

    let currentPage = 1;
    let query = '';

    if (referer) {
        try {
            const url = new URL(referer);
            const pageParam = url.searchParams.get('page');
            const queryParam = url.searchParams.get('query');

            currentPage = Number(pageParam ?? '1');
            query = queryParam ?? '';
        } catch (error) {
            console.warn('Failed to parse referer URL:', error);
        }
    }

    const providers = await fetchProviders(currentPage);
    const totalPages = await fetchProvidersPages();

    return (
        <main className="p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">List of Providers</h1>
            </div>

            <div>
                <Search placeholder="Search Provider" />
            </div>

            <Suspense key={query + currentPage}>
                <ProviderList initialProviders={providers} />
            </Suspense>

            <Pagination totalPages={totalPages} currentPage={currentPage} />
        </main>
    );
}



/*
import Pagination from '@/app/ui/support/pagination';
import Search from '@/app/ui/search';
import { fetchProviders, fetchProvidersPages } from '@/app/lib/data';
import ProviderList from '@/app/components/ProviderList';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';

interface Props {
    searchParams?: {
        query?: string;
        page?: string;
    };
}

export default async function ProvidersPage({ searchParams }: Props) {
    const pageParam = searchParams?.page;
    const queryParam = searchParams?.query;

    const currentPage = Number(pageParam ?? '1');
    const query = queryParam ?? '';

    const providers = await fetchProviders(currentPage); // add query later if needed
    const totalPages = await fetchProvidersPages();      // same here

    return (
        <main className="p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">List of Providers</h1>
            </div>

            <div>
                <Search placeholder="Search Provider" />
            </div>

            <Suspense key={query + currentPage}>
                <ProviderList initialProviders={providers} />
            </Suspense>

            <Pagination totalPages={totalPages} currentPage={currentPage} />
        </main>
    );
}
*/