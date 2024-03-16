import {Drawer, Input, Col, Select, Form, Row, Button, Spin, DatePicker} from 'antd';
import {addNewJoueur} from "./client";
import {LoadingOutlined} from "@ant-design/icons";
import {useState} from 'react';
import {successNotification, errorNotification} from "./Notification";

const {Option} = Select;

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function JoueurDrawerForm({showDrawer, setShowDrawer, fetchJoueurs}) {
    const onCLose = () => setShowDrawer(false);
    const [submitting, setSubmitting] = useState(false);

    const onFinish = joueur => {
        setSubmitting(true)
        console.log(JSON.stringify(joueur, null, 2))
        addNewJoueur(joueur)
            .then(() => {
                console.log("joueur ajouté")
                onCLose();
                successNotification(
                    "joueur ajouté avec succès",
                    `${joueur.lastName} a été ajouté au système`
                )
                fetchJoueurs();
            }).catch(err => {
            console.log(err);
            err.response.json().then(res => {
                console.log(res);
                errorNotification(
                    "There was an issue",
                    `${res.message} [${res.status}] [${res.error}]`,
                    "bottomLeft"
                )
            });
        }).finally(() => {
            setSubmitting(false);
        })
    };

    const onFinishFailed = errorInfo => {
        alert(JSON.stringify(errorInfo, null, 2));
    };

    return <Drawer
        title="Ajouter un nouveau joueur"
        width={720}
        onClose={onCLose}
        visible={showDrawer}
        bodyStyle={{paddingBottom: 80}}
        footer={
            <div
                style={{
                    textAlign: 'right',
                }}
            >
                <Button onClick={onCLose} style={{marginRight: 8}}>
                    Cancel
                </Button>
            </div>
        }
    >
        <Form layout="vertical"
              onFinishFailed={onFinishFailed}
              onFinish={onFinish}
              hideRequiredMark>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="lastName"
                        label="Nom"
                        rules={[{required: true, message: 'Saisir le nom du joueur'}]}
                    >
                        <Input placeholder="Saisir le nom"/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="firstName"
                        label="Prénom"
                        rules={[{required: true, message: 'Saisir le prénom'}]}
                    >
                        <Input placeholder="Please enter joueur email"/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="dob"
                        label="Date de Naissance"
                        rules={[{required: true}]}
                    >
                        <DatePicker />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="pob"
                        label="Lieu de naissance"
                        rules={[{required: true, message: 'Saisir le lieu de naissance'}]}
                    >
                        <Input placeholder="Saisir le lieu de naissance"/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="parents"
                        label="Filiation"
                        rules={[{required: true, message: 'Saisir la filiation'}]}
                    >
                        <Input placeholder="Saisir la filiation"/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="nationality"
                        label="Nationalité"
                        rules={[{required: true, message: 'Saisir la nationalité'}]}
                    >
                        <Input placeholder="Saisir la nationalité"/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="club"
                        label="Club"
                        rules={[{required: true, message: 'Choisir le club'}]}
                    >
                        <Select placeholder="Choisir un club">
                            <Option value="HOROYA">HOROYA</Option>
                            <Option value="AFIA">AFIA</Option>
                            <Option value="ASK">ASK</Option>
                            <Option value="ATHLETICO">ATHLETICO</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="ligue"
                        label="Ligue"
                        rules={[{required: true, message: 'Choisir la ligue'}]}
                    >
                        <Select placeholder="Choisir une ligue">
                            <Option value="LIGUE1">LIGUE1</Option>
                            <Option value="LIGUE2">LIGUE2</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="lastClub"
                        label="Dernier club"
                        rules={[{required: true, message: 'Choisir le club'}]}
                    >
                        <Select placeholder="Choisir un club">
                            <Option value="HOROYA">HOROYA</Option>
                            <Option value="AFIA">AFIA</Option>
                            <Option value="ASK">ASK</Option>
                            <Option value="ATHLETICO">ATHLETICO</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="statut"
                        label="Statut"
                        rules={[{required: true, message: 'Choisir le statut'}]}
                    >
                        <Select placeholder="Choisir une ligue">
                            <Option value="AMATEUR">AMATEUR</Option>
                            <Option value="SEMIPRO">SEMI PRO</Option>
                            <Option value="PRO">PROFESSIONEL</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                {submitting && <Spin indicator={antIcon} />}
            </Row>
        </Form>
    </Drawer>
}

export default JoueurDrawerForm;