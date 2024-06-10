const headers = new Headers();
headers.append(
    'Authorization',
    `Bearer ${localStorage.getItem('accessToken')}`
);
export const getFile = async (path: string) => {
    const response = await fetch(
        `https://project-vega.ru/api/Order/files/?path=${path}`,
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

export const loadDataIntoIframe = (path: string) => {
    return fetch(`https://project-vega.ru/api/Order/files/?path=${path}`, {
        method: 'GET',
        headers: headers,
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Ошибка при загрузке данных.');
            }
            return response.blob();
        })
        .then((blob) => {
            return URL.createObjectURL(blob);
        })
        .catch((error) => {
            console.error('Ошибка при загрузке данных:', error);
            throw error;
        });
};

export const loadDocFile = (path: string) => {
    return fetch(
        `https://project-vega.ru/api/File/convert-to-pdf?path=${path}`,
        {
            method: 'POST',
            headers: headers,
        }
    )
        .then((response) => {
            if (response.ok) {
                return response.blob();
            }
            throw new Error('Ошибка при загрузке данных');
        })
        .then((blob) => {
            return URL.createObjectURL(blob);
        })
        .catch((error) => {
            console.error('Ошибка при загрузке данных:', error);
            throw error;
        });
};
