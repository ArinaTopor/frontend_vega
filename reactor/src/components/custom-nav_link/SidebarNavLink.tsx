import { Flex, Image } from 'antd';
import { NavLink } from 'react-router-dom';
import style from '../Sidebar/Sidebar.module.css';
import { Typography } from 'antd';

const { Text } = Typography;

type Props = {
	path: string;
	linkStyle: string;
	srcImage: string;
	isCollapsed: boolean;
	firstText: string;
	secondText?: string;
};

export function SidebarNavLink({
	path,
	linkStyle,
	srcImage,
	isCollapsed,
	firstText,
	secondText,
}: Props) {
	return (
		<NavLink
			to={path}
			className={({ isActive }) =>
				isActive ? `${style.active} ${linkStyle}` : linkStyle
			}
			style={{ whiteSpace: 'nowrap' }}
		>
			<Image
				preview={false}
				src={srcImage}
				style={{ width: '1.8vw', transition: 'all 0s' }}
			/>
			{!isCollapsed && (
				<Flex vertical>
					<Text className={style.textLink}>{firstText}</Text>
					<Text className={style.textLink}>{secondText}</Text>
				</Flex>
			)}
		</NavLink>
	);
}
