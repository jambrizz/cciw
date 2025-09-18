'use client';

import React, { useEffect, useState } from 'react';
import ProviderCard from '@/app/components/ProviderCard';
import { Provider } from '@/app/lib/providerTypes';

export default function ProviderList({ initialProviders }: { initialProviders: Provider[] }) {
    const [providers, setProviders] = useState<Provider[]>(initialProviders);

    if (!providers || providers.length === 0) {
        return <p className="text-gray-500">No Providers found.</p>;
    }

    return (
        <div className="flex flex-col items-center gap-6">
            {providers.map((provider) => (
                <ProviderCard key={provider.id} provider={provider} />
            ))}
        </div>
    );
}