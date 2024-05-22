import { loadDataIntoIframe, loadDocFile } from './fetchFiles';

export const openFile = async (path: string) => {
    const formatFile = path?.split('/')[2].split('.')[1];
    if ((formatFile === 'docx' || formatFile === 'doc') && path) {
        const fileUrl = await loadDocFile(path);
        window.open(fileUrl, '_blank');
    } else if (path) {
        const fileUrl = await loadDataIntoIframe(path);
        window.open(fileUrl, '_blank');
    }
};
