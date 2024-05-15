const headers = new Headers();
headers.append(
    'Authorization',
    `Bearer ${localStorage.getItem('accessToken')}`
);
export const loadDataIntoIframe = (path: string) => {
    return fetch(`https://localhost:7185/api/Order/files/?path=${path}`, {
        method: 'GET',
        headers: headers,
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
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
        `https://localhost:7185/api/File/convert-to-pdf?path=${path}`,
        {
            method: 'POST',
            headers: headers,
        }
    )
        .then((response) => {
            if (response.ok) {
                return response.blob();
            }
            console.log(response);
            throw new Error('Network response was not ok.');
        })
        .then((blob) => {
            return URL.createObjectURL(blob);
        })
        .catch((error) => {
            console.error('Ошибка при загрузке данных:', error);
            throw error;
        });
};
