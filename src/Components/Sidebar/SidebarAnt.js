import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Menu, Switch } from 'antd';
import { AccountBookFilled, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { sidebarData } from './sidebarData';

const { SubMenu } = Menu;

const SidebarAnt = () => {
    const [state, setState] = useState({
        theme: 'dark',
        current: '1',
    })

    const [navData, setNevData] = useState([]);

    useEffect(() => {
        setNevData(sidebarData);
    }, []);

    console.log(navData)

    const changeTheme = value => {
        setState({
            ...state,
            theme: value ? 'dark' : 'light',
        });
    };

    const handleClick = e => {
        console.log('click ', e);
        setState({
            ...state,
            current: e.key,
        });
    };
    console.log(state)
    return (
        <div className="sidebar-wrapper-antd">
            <Switch
                checked={state.theme === 'dark'}
                onChange={changeTheme}
                checkedChildren="Dark"
                unCheckedChildren="Light"
            />
            <br />
            <br />
            <Menu
                theme={state.theme}
                onClick={handleClick}
                style={{ width: 256 }}
                defaultOpenKeys={['sub1']}
                selectedKeys={[state.current]}
                mode="inline"
            >
                <Menu.Item key="0" icon={<AppstoreOutlined />}>
                    Dashboard
                </Menu.Item>
                {
                    navData.map((tab) => (
                        <SubMenu key={tab.id} icon={<SettingOutlined />} title={tab.name}>
                            {
                                tab.childData &&
                                tab.childData.map((child) => (
                                    <>
                                        {
                                            !child.subChildData ?
                                                <Menu.Item key={child.key}>{child.name}</Menu.Item> :
                                                <SubMenu key={child.key}
                                                    icon={<AccountBookFilled />} title={child.name}>
                                                    {
                                                        child.subChildData &&
                                                        child.subChildData.map((subChild) => (
                                                            <Menu.Item key={subChild.key}>{subChild.name}</Menu.Item>
                                                        ))
                                                    }
                                                </SubMenu>
                                        }
                                    </>
                                ))
                            }
                        </SubMenu>
                    ))

                }

            </Menu>
        </div>
    )
}

export default SidebarAnt