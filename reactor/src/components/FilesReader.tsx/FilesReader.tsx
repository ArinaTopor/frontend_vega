import { useGetFileByNameQuery } from '../../app/services/orders';
import { IDocument } from '@cyntler/react-doc-viewer';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import { Modal } from 'antd';
const FilesReader = ({ path, open }: { path: string; open: boolean }) => {
    const { data } = useGetFileByNameQuery(path!);
    const newDoc: IDocument[] = [
        {
            uri: '31SAM46AH552/Внесение входной документации/file.docx',
            fileData:
                'https://localhost:7185/api/Order/files?path=31SAM46AH552%2F%D0%92%D0%BD%D0%B5%D1%81%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B2%D1%85%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9%20%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D0%B8%2Ffile.docx',
        },
    ];
    return (
        <Modal open={open}>
            <h1>Demo</h1>
            <DocViewer documents={newDoc}></DocViewer>
        </Modal>
    );
};
export default FilesReader;
