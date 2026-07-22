import { useEffect, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const PAGE_SIZE = 50;

const isEmpty = (value: any): boolean => {
    if (value === null) return false;
    if (value === 0) return true;
    return !value;
};

const fetchData = async (url: URL, request?: Request) => {
    try {
        const response = await fetch(url, request);

        if (!response.ok) throw 'Error fetching data';

        return response.json();
    } catch (error) {
        console.log(error);
    }
};

export const Assignment = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const limit = searchParams.get('limit');
    const page = searchParams.get('page');
    const offset: number = useMemo(() => {
        if (page === null) return 0;
        return (parseInt(page) - 1) * PAGE_SIZE;
    }, []);

    useEffect(() => {
        const apiEndpoint = new URL('http://localhost:3000/api');
        if (limit) apiEndpoint.searchParams.set('limit', limit);
        if (isEmpty(page)) apiEndpoint.searchParams.set('offset', offset.toString());

        const fetchTabledata = async (apiEndpoint: URL) => {
            const data = await fetchData(apiEndpoint);
        };

        fetchTabledata(apiEndpoint);
    }, [limit, offset]);

    const redirect = () => {
        setSearchParams((prev) => {
            prev.set('offset', `${parseInt(page ?? '0') * PAGE_SIZE}`);
            return prev;
        });
    };

    return (
        <div>
            <p>This is react Assignment component {searchParams.get('id')} </p>
            <button onClick={redirect}>click</button>
        </div>
    );
};
