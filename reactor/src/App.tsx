import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Authorization from './pages/Auth/Authorization';
import TableOrders from './components/tables/TableOrders';
import Home from './pages/MainPage';
import { RequareAuth } from './hoc/RequaireAuth';
import BossPage from './pages/BossPage';
import { Paths } from './paths';
import { CustomLayout } from './components/CustomLayout';
import { ConfigProvider, ThemeConfig } from 'antd';
import './App.css';
import { WaitingList } from './pages/WaitingList/WaitingList';
import AddEmployeePage from './pages/AddEmployeePage/AddEmployeePage';
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
                        <Route path={Paths.products} element={<BossPage />} />
                        <Route
                            path={Paths.tasksBoard}
                            element={<TableOrders />}
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
