import Pagination from '@/app/ui/support/pagination';
import Search from '@/app/ui/search';
import { fetchProviders, fetchProvidersPages } from '@/app/lib/data';
import ProviderList from '@/app/components/ProviderList';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { headers } from 'next/headers';

interface Props {
    searchParams?: {
        page?: string;
        query?: string;
    };
}

export default async function ProvidersPage({ searchParams }: Props) {
    const currentPage = Number(searchParams?.page ?? '1');
    const query = searchParams?.query ?? '';

    const providers = await fetchProviders(currentPage, query);
    const totalPages = await fetchProvidersPages(query);

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

            <Pagination totalPages={totalPages} currentPage={currentPage} query={query} />
        </main>
    );
}
 