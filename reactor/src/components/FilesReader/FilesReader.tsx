import {
    getFileByName,
    useGetFileByNameQuery,
} from '../../app/services/orders';
import { IDocument, PDFRenderer } from '@cyntler/react-doc-viewer';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer'; //delete
import { Modal } from 'antd';
import { useRef, useState } from 'react';

// import DocViewer from 'react-doc-viewer';
const FilesReader = ({ path, open }: { path: string; open: boolean }) => {
    const { data } = useGetFileByNameQuery(path!);
    const [fileUrl, setFileUrl] = useState<string>('');
    const fetchFile = () => {
        fetch(`https://localhost:7185/api/Order/files/?path=${path}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`, // Пример заголовка авторизации
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.blob(); // Получение данных файла в виде Blob
            })
            .then((blob) => {
                // Создание объекта URL для Blob
                const url = URL.createObjectURL(blob);
                setFileUrl(url); // Сохранение URL в состоянии
            })
            .catch((error) => {
                console.error(
                    'There was a problem with the fetch operation:',
                    error
                );
            });
    };
    console.log(fileUrl);
    const headers = {
        'X-Access-Token': localStorage.getItem('accessToken'),
        'My-Custom-Header': 'application/docx',
    };
    const nDoc: IDocument[] = [
        {
            uri: `https://localhost:7185/api/Order/files/?path=${path}`,
            fileType: 'docx',
            fileName: 'file.xlsx',
        },
    ];

    return (
        <div>
            <DocViewer
                documents={nDoc}
                prefetchMethod='GET'
                pluginRenderers={DocViewerRenderers}
            ></DocViewer>
            <button onClick={fetchFile}>Fetch File</button>
            <a
                href={`https://view.officeapps.live.com/op/embed.aspx?src=https://localhost:7185/api/Order/files/?path=${path}`}
            >
                {' '}
                file{' '}
            </a>
        </div>
    );
};
export default FilesReader;
