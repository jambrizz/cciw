import { fetchProviders } from '@/app/lib/data';

export default async function ProvidersPage() {
    const providers = await fetchProviders();

    function loadProviders() {
        if (!providers || providers.length === 0) {
            return <p className="text-gray-500">No Providers found.</p>
        } else {
            return (
                <ul className="divide-y divide-gray-200">
                    {providers.map((provider: any) => (
                        <li key={provider.id} className="py-4">
                            <h2 className="text-lg font-semibold">{provider.name}</h2>
                            <p className="text-sm text-gray-600">
                                {provider.type} {provider.street_number} {provider.street_name}, {provider.city}, {provider.state} {provider.zip}
                            </p>
                            <p className="text-sm text-gray-600">Phone: {provider.phone}</p>
                            <p className="text-sm text-gray-600">Email: {provider.email}</p>
                            {provider.website && (
                                <a
                                    href={provider.website}
                                    className="text-sm text-blue-600 underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Website
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            );
        }
    }
    return (
        <>
            <div className="">
                <h1>List of Providers Page</h1>
            </div>
            <div>{loadProviders()}</div>
        </>
    )
}