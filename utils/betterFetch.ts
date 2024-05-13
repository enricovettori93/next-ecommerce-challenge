export default async function betterFetch<T>(url: string, options?: RequestInit) {
    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error("Fetch error");
    }

    const data = await response.json();

    return data as T;
}
