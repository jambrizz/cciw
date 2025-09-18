import Pagination from '@/app/ui/support/pagination';
import Search from '@/app/ui/search';
import { fetchProviders, fetchProvidersPages } from '@/app/lib/data';
import ProviderList from '@/app/components/ProviderList';
import { Suspense } from 'react';

export default async function ProvidersPage({
    searchParams,
}: {
    searchParams?: Record<string, string | string[] >;
}) {
    const currentPage = Number(searchParams?.page || '1');
    const query = typeof searchParams?.query === 'string' ? searchParams.query : '';

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