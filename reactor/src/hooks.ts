import { IDocument } from '@cyntler/react-doc-viewer';
import { useGetFileByNameQuery } from './app/services/orders';

export const useGetFile = (filePath: string) => {
    const { data, error } = useGetFileByNameQuery(filePath);
    return data;
};
