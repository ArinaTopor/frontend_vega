import { Routes, Route, HashRouter } from 'react-router-dom';
import Authorization from './pages/Auth/Authorization';
import Home from './pages/MainPage';
import './App.css';
import { RequareAuth } from './hoc/RequaireAuth';
import BossPage from './pages/BossPage';
import { Paths } from './paths';
import { CustomLayout } from './components/CustomLayout';
import { ConfigProvider, ThemeConfig } from 'antd';
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
        Input: {
            activeBorderColor: '#314659',
            borderRadius: 2,
            activeShadow: 'none',
            fontSize: 16,
            hoverBorderColor: '#314659',
        },
        Select:{
            selectorBg:'#EBECEF',
            borderRadius:0,
            colorPrimaryHover:'#000',
            colorPrimaryTextActive:'#000',  
        }
    },
};

function App() {
    return (
        <ConfigProvider theme={theme}>
            <HashRouter>
                <Routes>
                    
                    <Route element={<CustomLayout />}>
                        <Route path='/' element={<AddEmployeePage />} />
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
                        <Route path={Paths.tasksBoard} element={<BossPage />} />
                        <Route path={Paths.options} element={<BossPage />} />
                    </Route>
                </Routes>
            </HashRouter>
        </ConfigProvider>
    );
}

export default App;
