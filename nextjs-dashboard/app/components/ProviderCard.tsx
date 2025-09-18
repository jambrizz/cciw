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
        <div className="mx-auto w-full max-w-3xl rounded-xl border-t-4 border-emerald-500 bg-white p-6 shadow transition hover:shadow-md">
            <h2 className="text-xl font-bold text-gray-800">{provider.name}</h2>
            <p className="text-sm text-gray-600">{provider.type}</p>
            <p className="text-sm text-gray-700">
                {provider.street_number} {provider.street_name}, {provider.city}, {provider.state} {provider.zip}
            </p>
            <p className="text-sm text-gray-700">County: {provider.county}</p>
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

/*
export default function ProviderCard({ provider }: { provider: Provider }) {
    return (
        <div className="rounded-xl border border-emerald-100 bg-white p-6 shadow transition hover:shadow-md">
            <div className="-mt-6 mb-4 rounded-t-lg border-t-4 border-emerald-500 pt-2" />
            <h2 className="text-xl font-bold text-gray-800">{provider.name}</h2>
            <p className="text-sm text-gray-600">{provider.type}</p>
            <p className="text-sm text-gray-700">
                {provider.street_number} {provider.street_name}, {provider.city}, {provider.state} {provider.zip}
            </p>
            <p className="text-sm text-gray-600">County: {provider.county}</p>
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
*/

