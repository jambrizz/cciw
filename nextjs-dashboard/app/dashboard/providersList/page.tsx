import { fetchProviders } from '@/app/lib/data';

export default async function ProvidersListPage() {
    const providers = await fetchProviders();
    return (
        <>
            <div className="">
                <div className="">
                    <h1 className="">Provider Dashboard</h1>
                </div>
                <div className="">
                    <button className="">+ Add Provider</button>
                </div>
                <div className="">
                    <h2>Providers in Immigration Warriors</h2>
                </div>
                <div className=""></div>
            </div>
        </>
    )
}