import { Flex, Button, Image } from 'antd';
import list from '../../assets/icons/list.svg';
import plan from '../../assets/icons/plan.svg';
import nomenclature from '../../assets/icons/nomenclature.svg';
import setting from '../../assets/icons/setting.svg';
import exit from '../../assets/icons/exit.svg';
import { InfoUser } from '../../app/services/auth';
import { Paths } from '../../paths';
import style from './Sidebar.module.css';
import { useState } from 'react';
import { SidebarNavLink } from '../custom-nav_link/SidebarNavLink';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import Sider from 'antd/es/layout/Sider';
import { Typography } from 'antd';

const { Text } = Typography;

type Props = {
    user: InfoUser | null;
};

export function Sidebar({ user }: Props) {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const createName = function (nameBack: string) {
        const nameArray: string[] = nameBack.split(' ');
        const initials: string = `${nameArray[0][0]}${nameArray[1][0]}`;
        const name: string = nameArray && `${nameArray[0]} ${nameArray[1][0]}.`;
        return {
            initials,
            name,
        };
    };
    const names = user?.name
        ? createName(user.name)
        : {
              initials: ' k.ss',
              name: ' sadsadsad s',
          };

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <Sider
            style={{
                height: '100vh',
                background: '#314659',
                transition: 'all 0.5s',
            }}
            width='12.8vw'
            collapsedWidth='6.3vw'
            collapsed={isCollapsed}
            onMouseEnter={() => setIsCollapsed((last) => !last)}
            onMouseLeave={() => setIsCollapsed((last) => !last)}
        >
            <Flex
                vertical
                align='center'
                gap='3.7vh'
                style={
                    isCollapsed
                        ? { marginTop: '5.7vh', marginBottom: '26vh' }
                        : { marginTop: '3.5vh', marginBottom: '18vh' }
                }
            >
                <Flex
                    justify='center'
                    align='center'
                    vertical
                    className={
                        isCollapsed ? style.avatar_collapsed : style.avatar
                    }
                >
                    {names.initials}
                </Flex>
                {!isCollapsed && (
                    <Text className={style.name}>{names.name}</Text>
                )}
            </Flex>
            <Flex
                className={isCollapsed ? style.links_collapsed : style.links}
                style={{ fontSize: '2.1vh' }}
                vertical
                gap='4.9vh'
            >
                <SidebarNavLink
                    path={Paths.nomenclature}
                    linkStyle={style.link}
                    srcImage={nomenclature}
                    isCollapsed={isCollapsed}
                    text='Номенклатура'
                />
                <SidebarNavLink
                    path={Paths.tasksBoard}
                    linkStyle={style.link}
                    srcImage={plan}
                    isCollapsed={isCollapsed}
                    text='Заказы'
                />
                <SidebarNavLink
                    path={Paths.products}
                    linkStyle={style.link}
                    srcImage={list}
                    isCollapsed={isCollapsed}
                    text='Лист ожидания'
                />
                <Flex
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        marginBottom: '4vh',
                    }}
                    gap='3vh'
                    vertical
                    align={isCollapsed ? 'center' : 'start'}
                >
                    <SidebarNavLink
                        path={Paths.options}
                        linkStyle={style.link}
                        srcImage={setting}
                        isCollapsed={isCollapsed}
                        text='Настройки'
                    />
                    <Button onClick={handleLogout} className={style.exit}>
                        <Image
                            preview={false}
                            src={exit}
                            style={{ width: '1.8vw', height: '1.8vw' }}
                        />
                        {!isCollapsed && (
                            <Text className={style.textLink}>Выход</Text>
                        )}
                    </Button>
                </Flex>
            </Flex>
        </Sider>
    );
}
