const getHeaders = () => {
    const headers = new Headers();
    headers.append(
        'Authorization',
        `Bearer ${localStorage.getItem('accessToken')}`
    );
    return headers;
};

export const fetchFile = async (url: string, options: RequestInit) => {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`Ошибка при загрузке данных:, ${response.statusText}`);
    }
    return response.blob();
};

export const loadPDF = async (path: string) => {
    const headers = getHeaders();
    const url = `https://localhost:17185/api/Order/files/?path=${path}`;
    const blob = await fetchFile(url, { method: 'GET', headers: headers });
    return URL.createObjectURL(blob);
};
export const loadDocFile = async (path: string) => {
    const url = `https://localhost:17185/api/File/convert-to-pdf?path=${path}`;
    const headers = getHeaders();
    const blob = await fetchFile(url, { method: 'POST', headers: headers });
    return URL.createObjectURL(blob);
};

export const getFile = async (path: string) => {
    const headers = getHeaders();
    const response = await fetch(
        `https://localhost:17185/api/Order/files/?path=${path}`,
        {
            method: 'GET',
            headers: headers,
        }
    );
    if (!response.ok) {
        throw new Error('Ошибка при загрузке данных.');
    }
    return await response.blob();
};
