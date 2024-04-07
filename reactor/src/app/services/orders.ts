import { api } from './api';

export type FileT = {
    filename: string;
    path: string;
    upload_date: Date;
    is_needed_to_change: boolean;
    status_id: 0 | 1 | 2;
    step: string;
};
export interface FilesInfo {
    [key: string]: {
        kks: string;
        files_info: FileT[];
    };
}
export type kks = {
    [key: string]: string;
};
export interface ResponseFile {
    fileStream: string;
    contentType: 'image/png';
}
export const ordersApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllKKS: builder.query<kks, void>({
            query: () => ({
                url: '/Order/kks',
                method: 'GET',
            }),
        }),
        getAllFilesByKKS: builder.query<FilesInfo, string>({
            query: (kks) => ({
                url: `/Order/files/info?kkss=${kks}`,
                method: 'GET',
            }),
        }),
        getFileByName: builder.query<ResponseFile, string>({
            query: (path) => ({
                url: `/Order/files/?path=${path}`,
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useGetAllFilesByKKSQuery,
    useGetAllKKSQuery,
    useGetFileByNameQuery,
} = ordersApi;
export const {
    endpoints: { getAllFilesByKKS, getAllKKS, getFileByName },
} = ordersApi;
