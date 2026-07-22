export const sleep = async (time: number) => new Promise((res) => setTimeout(res, time));

export interface FetchResult<T> {
    data: T | null;
    error: string | null;
}

export const fetchData = async <T>(url: string, options?: RequestInit): Promise<FetchResult<T>> => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const data: T = await response.json();
        return { data, error: null };
    } catch (e) {
        const error = e instanceof Error ? e.message : 'Something went wrong';
        return { data: null, error };
    }
};
