import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Authorization from './pages/Auth/Authorization';
import { WorkerPage } from './pages/WorkerPage/WorkerPage';
import { RequareAuth } from './hoc/RequaireAuth';
import BossPage from './pages/BossPage';
import { Paths } from './paths';
import { CustomLayout } from './components/CustomLayout';
import { ConfigProvider, ThemeConfig } from 'antd';
import './App.css';
import AddEmployeePage from './pages/AddEmployeePage/AddEmployeePage';
import locale from 'antd/locale/ru_RU';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
dayjs.locale('ru');
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
        <ConfigProvider theme={theme} locale={locale}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<WorkerPage />} />
                    <Route element={<CustomLayout />}>
                        <Route
                            path={Paths.workerMain}
                            element={
                                <RequareAuth>
                                    <WorkerPage />
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
