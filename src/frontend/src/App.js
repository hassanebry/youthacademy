import {useState, useEffect} from 'react'
import {getAllJoueurs} from "./client";
import {
    Layout,
    Menu,
    Breadcrumb,
    Table, Spin, Empty, Button, Badge, Tag
} from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    LoadingOutlined, PlusOutlined
} from '@ant-design/icons';
import JoueurDrawerForm from "./JoueurDrawerForm";

import './App.css';

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
    },
    {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName',
    },
    {
        title: 'Date of Birth',
        dataIndex: 'dob',
        key: 'dob',
    },
    {
        title: 'Place of Birth',
        dataIndex: 'pob',
        key: 'pob',
    },
    {
        title: 'Parents',
        dataIndex: 'parents',
        key: 'parents',
    },
    {
        title: 'Nationality',
        dataIndex: 'nationality',
        key: 'nationality',
    },
    {
        title: 'Club',
        dataIndex: 'club',
        key: 'club',
    },
    {
        title: 'Ligue',
        dataIndex: 'ligue',
        key: 'ligue',
    },
    {
        title: 'Last Club',
        dataIndex: 'lastClub',
        key: 'lastClub',
    },
    {
        title: 'Statut',
        dataIndex: 'statut',
        key: 'statut',
    },
    {
        title: 'Date Of Signature',
        dataIndex: 'dateOfSignature',
        key: 'dateOfSignature',
    },
    {
        title: 'Date Of Signature',
        dataIndex: 'dateOfSignature',
        key: 'dateOfSignature',
    },
    {
        title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
    },
];

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function App() {
    const [joueurs, setJoueurs] = useState([]);
    const [collapsed, setCollapsed] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [showDrawer, setShowDrawer] = useState(false);

    const fetchJoueurs = () =>
        getAllJoueurs()
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setJoueurs(data);
                setFetching(false);
            })

    useEffect(() => {
        console.log("component is mounted");
        fetchJoueurs();
    }, []);

    const renderJoueurs = () => {
        if (fetching) {
            return <Spin indicator={antIcon} />
        }
        if (joueurs.length <= 0) {
            return <Empty />;
        }
        return <>
            <JoueurDrawerForm
                showDrawer={showDrawer}
                setShowDrawer={setShowDrawer}
                fetchJoueurs={fetchJoueurs}
            />
            <Table
                dataSource={joueurs}
                columns={columns}
                bordered
                title={() =>
                    <>
                        <Tag>Nombre de joueurs</Tag>
                        <Badge count={joueurs.length} className="site-badge-count-4"/>
                        <br/><br/>
                        <Button
                            onClick={() => setShowDrawer(!showDrawer)}
                            type="primary" shape="round" icon={<PlusOutlined/>} size="small">
                            Ajouter un nouveau joueur
                        </Button>
                    </>
                }
                pagination={{pageSize: 20}}
                scroll={{y: 350}}
                rowKey={joueur => joueur.id}
            />
        </>
    }

    return <Layout style={{minHeight: '100vh'}}>
        <Sider collapsible collapsed={collapsed}
               onCollapse={setCollapsed}>
            <div className="logo"/>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined/>}>
                    Option 1
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined/>}>
                    Option 2
                </Menu.Item>
                <SubMenu key="sub1" icon={<UserOutlined/>} title="User">
                    <Menu.Item key="3">Tom</Menu.Item>
                    <Menu.Item key="4">Bill</Menu.Item>
                    <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined/>} title="Team">
                    <Menu.Item key="6">Team 1</Menu.Item>
                    <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9" icon={<FileOutlined/>}>
                    Files
                </Menu.Item>
            </Menu>
        </Sider>
        <Layout className="site-layout">
            <Header className="site-layout-background" style={{padding: 0}}/>
            <Content style={{margin: '0 16px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                    {renderJoueurs()}
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>By HassaneBry For Testing Purpose</Footer>
        </Layout>
    </Layout>
}

export default App;