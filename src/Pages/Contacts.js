import React, { Component } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';
class Contacts extends Component {
    render() {
        return (
            <Container className='d-flex flex-column m-2'>
                <h1 className='text-center mt-5'> Contact us </h1>
                <Form>
                    <Form.Group controllId="formBasicEmail">
                        <Form.Label> Email address </Form.Label>
                        <Form.Control type='email' placeholder='Enter email' />
                    </Form.Group>
                    <Form.Group controllId="formBasicPassword">
                        <Form.Label> Your question: </Form.Label>
                        <Form.Control as='textarea' rows='3' />
                    </Form.Group>
                    <Button variant='primary' type='submit' >Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default Contacts;