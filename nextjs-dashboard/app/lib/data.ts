import postgres from 'postgres';
import { Provider } from './providerTypes';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

//This section is for Providers
//////////////////////////////////////////////

const PROVIDERS_PER_PAGE = 10;

export async function fetchProvidersPages(query: string = '') {
    try {
        const data = await sql`
      SELECT COUNT(*) FROM providers
      WHERE
        name ILIKE ${'%' + query + '%'} OR
        city ILIKE ${'%' + query + '%'} OR
        email ILIKE ${'%' + query + '%'}
    `;
        const totalPages = Math.ceil(Number(data[0].count) / PROVIDERS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of provider pages.');
    }
}


/*
export async function fetchProvidersPages() {
    try {
        const data = await sql`SELECT COUNT(*) FROM providers;`;
        const totalPages = Math.ceil(Number(data[0].count) / PROVIDERS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of provider pages.')
    }
}
*/
export async function fetchProviders(currentPage: number = 1, query: string = ''): Promise<Provider[]> {
    const offset = (currentPage - 1) * PROVIDERS_PER_PAGE;

    try {
        const data = await sql<Provider[]>`
      SELECT * FROM providers
      WHERE
        name ILIKE ${'%' + query + '%'} OR
        city ILIKE ${'%' + query + '%'} OR
        email ILIKE ${'%' + query + '%'}
      ORDER BY name ASC
      LIMIT ${PROVIDERS_PER_PAGE}
      OFFSET ${offset};
    `;
        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Provider data.');
    }
}

