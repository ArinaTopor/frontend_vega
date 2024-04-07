import {
    getFileByName,
    useGetFileByNameQuery,
} from '../../app/services/orders';
import { IDocument } from '@cyntler/react-doc-viewer';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer'; //delete
import { Modal } from 'antd';
import { useRef, useState } from 'react';
import { blob } from 'stream/consumers';
// import DocViewer from 'react-doc-viewer';
const FilesReader = ({ path, open }: { path: string; open: boolean }) => {
    const { data } = useGetFileByNameQuery(path!);
    const [fileUrl, setFileUrl] = useState<string>('');
    const fetchFile = () => {
        fetch(`https://localhost:7185/api/Order/files/?path=${path}`, {
            headers: {
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQiLCJsb2dpbiI6InVzZXJfMyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6ItCQ0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGAIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6InVzZXIgMyIsImV4cCI6MTcxMjIzOTk5MSwiaXNzIjoiVmVnYVNlcnZlciIsImF1ZCI6IlZlZ2FDbGllbnQifQ.8CiY8fMUj1aF3En3cwmf_c4KzxEZRcu3B18kfWKAlXI', // Пример заголовка авторизации
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
    const nDoc: IDocument[] = [
        {
            uri: fileUrl,
            fileType: 'docx',
        },
    ];

    return (
        <div>
            <DocViewer documents={nDoc}></DocViewer>
            <button onClick={fetchFile}>Fetch File</button>
            {fileUrl && (
                <>
                    {/* Отображение файла в iframe */}
                    <iframe src={fileUrl} />
                </>
            )}
        </div>
    );
};
export default FilesReader;
