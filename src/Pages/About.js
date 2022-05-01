import React, { Component } from 'react';
import { Container, Nav, Tab, Row, Col } from 'react-bootstrap';


class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' classname='flex-column mt-3'>
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='second'>Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='third'>Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='fourth'>Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='mt-3 ml-3'>
                                <Tab.Pane eventKey='first'>
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2H96uR1JxaeBqIqQbx5maeAyV9SXs5y0ixQ&usqp=CAU' />
                                    <p>hdskfshdfhsdjk</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                    <img src='https://memezila.com/saveimage/Welcome-back-to-team-awesome-meme-8429' />
                                    <p>sdfsdfsdfsfs</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                    <img src='https://www.meme-arsenal.com/memes/ced9ec0a47e2a33d5d9c9ae7253d4744.jpg' />
                                    <p>sfshjhdgdvfd</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='fourth'>
                                    <img src='https://memegenerator.net/img/instances/42300068.jpg' />
                                    <p>,jkjtfthtyntjtyyj</p>
                                </Tab.Pane>

                            </Tab.Content>


                        </Col>

                    </Row>

                </Tab.Container>
            </Container>
        );
    }
}

export default About;