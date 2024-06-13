import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Authorization from './pages/Auth/Authorization';
import Home from './pages/MainPage';
import { RequareAuth } from './hoc/RequaireAuth';
import BossPage from './pages/BossPage';
import { Paths } from './paths';
import { CustomLayout } from './components/CustomLayout';
import { ConfigProvider, ThemeConfig } from 'antd';
import './App.css';
import { OrdersPage } from './pages/OrdersPage/OrdersPage';
import AddEmployeePage from './pages/AddEmployeePage/AddEmployeePage';
import TableOrderFiles from './components/tables/tableOrderFiles/TableOrderFiles';
import FilesPage from './pages/FilesPage/FilesPage';
import OrdersProductionPage from './pages/OrdersProductionPage/OrdersProductionPage';
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
        Checkbox: {
            colorPrimary: '#314659',
            colorPrimaryHover: '#24323E',
            colorBorder: '#314659',
            borderRadiusSM: 2,
            controlInteractiveSize: 16,
        },
        Input: {
            activeBorderColor: '#314659',
            borderRadius: 2,
            activeShadow: 'none',
            fontSize: 16,
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
        Pagination: {
            colorPrimary: '#314659',
            colorPrimaryBorder: '#314659',
            colorPrimaryHover: 'rgba(140, 140, 140, 1)',
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
                            path={Paths.nomenclature}
                            element={<OrdersProductionPage />}
                        />
                        <Route path={Paths.products} element={<BossPage />} />
                        <Route
                            path={Paths.tasksBoard}
                            element={<OrdersPage />}
                        />
                        <Route
                            path={Paths.tableFiles}
                            element={
                                <RequareAuth>
                                    <FilesPage />
                                </RequareAuth>
                            }
                        />
                        <Route
                            path={Paths.orderFiles}
                            element={
                                <RequareAuth>
                                    <TableOrderFiles />
                                </RequareAuth>
                            }
                        />
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
