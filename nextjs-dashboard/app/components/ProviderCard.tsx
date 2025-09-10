import React from 'react';

type Provider = {
    id: number;
    name: string;
    type: string;
    street_number: string;
    street_name: string;
    city: string;
    county: string;
    state: string;
    zip: string;
    phone: string;
    email: string;
    website: string;
};

export default function ProviderCard({ provider }: { provider: Provider }) {
    return (
        <div className="rounded-lg border border-gray-200 p-4 shadow-sm transition hover:shadow-md">
            <h2 className="text-xl font-bold text-gray-800">{provider.name}</h2>
            <p className="text-sm text-gray-600">{provider.type}</p>
            <p className="text-sm text-gray-700">
                {provider.street_number} {provider.street_name}, {provider.city}, {provider.state} {provider.zip}
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
                    {provider.website}
                </a>
            )}
        </div>
    );
}

