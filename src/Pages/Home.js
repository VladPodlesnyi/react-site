import React, { Component } from 'react';
import { Container, Card, CardGroup, Button } from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';

export default class Home extends Component {
    render() {
        return (
            <div>
                <CarouselBox CollapseOnSelect />
                <Container >
                    <h2 className='p-5 text-center'>Our team</h2>
                    <CardGroup>
                        <Card className='rounded m-3'>
                            <Card.Img
                                variant='top'
                                src='https://memezila.com/saveimage/Welcome-back-to-team-awesome-meme-8429'
                            />
                            <Card.Body className='d-flex flex-column m-2'>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Laborum magna nostrud ea occaecat Lorem aliqua sunt ad id amet ad et Lorem.
                                </Card.Text>
                                <Button variant='primary' >About team</Button>
                            </Card.Body>
                        </Card>
                        <Card className='rounded m-3'>
                            <Card.Img
                                variant='bottom'
                                src='https://i.chzbgr.com/thumb800/15161093/h0921627E/computer-pc-pc-gamer-pc-gaming-gamer-cursed-weird-wtf-strange-gross'
                            />
                            <Card.Body className='d-flex flex-column m-2'>
                                <Card.Title>Users</Card.Title>
                                <Card.Text>
                                    Et eiusmod voluptate nulla elit laboris fugiat sunt irure commodo nostrud.
                                </Card.Text>
                                <Button className='m-4' variant='primary' >About users</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        );
    }
}


