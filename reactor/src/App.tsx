import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Authorization from './pages/Auth/Authorization';
import Home from './pages/MainPage';
import { RequareAuth } from './hoc/RequaireAuth';
import BossPage from './pages/BossPage';
import { Paths } from './paths';
import { CustomLayout } from './components/CustomLayout';
import { ConfigProvider, ThemeConfig } from 'antd';
import AddEmployeePage from './pages/AddEmployeePage/AddEmployeePage';
import TableFiles from './tables/TableFiles';
import TableOrderFiles from './tables/TableOrderFiles/TableOrderFiles';
import './App.css';
import FilesReader from './components/FilesReader/FilesReader';
const theme: ThemeConfig = {
    components: {
        Button: {
            fontSize: 16,
            colorPrimary: '#314659',
            colorPrimaryHover: '#24323E',
            colorPrimaryActive: '#24323E',
            colorBgContainerDisabled: '#B1B1B1',
            colorTextDisabled: '#ffffff',
            borderRadius: 2,
            fontWeight: 500,
        },
        Input: {
            activeBorderColor: '#314659',
            borderRadius: 2,
            activeShadow: 'none',
            fontSize: 16,
            colorPrimaryBorderHover: '#314659',
            hoverBorderColor: '#314659',
        },
        Select: {
            selectorBg: '#EBECEF',
            borderRadius: 0,
            colorPrimaryHover: '#000',
        },
        Table: {
            cellFontSize: 28,
            borderRadius: 2,
            borderColor: '#fff',
            headerBg: '#fff',
            headerColor: '#2D3748',
            boxShadow: '#E2E8F0',
            rowHoverBg: '#E2E8F0',
            colorPrimaryHover: '#314659',
        },
        Checkbox: {
            colorPrimary: '#314659',
            colorPrimaryHover: '#24323E',
            colorBorder: '#314659',
        },
    },
    token: {},
    cssVar: true,
};

function App() {
    return (
        <ConfigProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Authorization />} />

                    <Route element={<CustomLayout />}>
                        <Route
                            path={Paths.workerMain}
                            element={
                                <RequareAuth>
                                    <Home />
                                </RequareAuth>
                            }
                        />
                        <Route
                            path={Paths.adminMain}
                            element={
                                <RequareAuth>
                                    <BossPage />
                                </RequareAuth>
                            }
                        />
                        <Route
                            path={Paths.nomenclature}
                            element={<BossPage />}
                        />
                        <Route
                            path={Paths.tableFiles}
                            element={
                                <RequareAuth>
                                    <TableFiles />
                                </RequareAuth>
                            }
                        ></Route>
                        <Route
                            path={Paths.files}
                            element={<TableOrderFiles />}
                        ></Route>
                        <Route
                            path={Paths.tableFiles}
                            element={
                                <RequareAuth>
                                    <TableFiles />
                                </RequareAuth>
                            }
                        ></Route>
                        {/* <Route
                            path='/file/:path'
                            element={
                                <RequareAuth>
                                    <FilesReader />
                                </RequareAuth>
                            }
                        ></Route> */}
                        <Route path={Paths.tasksBoard} element={<BossPage />} />
                        <Route
                            path={Paths.options}
                            element={
                                <RequareAuth>
                                    <AddEmployeePage />
                                </RequareAuth>
                            }
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ConfigProvider>
    );
}

export default App;
