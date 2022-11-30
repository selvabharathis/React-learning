import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { random, commerce } from 'faker'
import { Container, Col, Row } from 'reactstrap'
import myData from './PEXELS.json';
import CartItem from './CartItem';

const apiKey = "INSERT_YOUR_KEY_HERE";

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"
const localUrl = "https://api.jsonserve.com/-nHX1B"

const BuyPage = ({ addInCart }) => {
    const [product, setProduct] = useState([])

    // const fetchPhotos = async () => {
    //     const response = await Axios.get(url, {
    //         header: {
    //             Authorization: apiKey
    //         }
    //     })
    // }

    const fetchPhotos = async () => {
        // const { data } = await Axios.get(localUrl, {
        //     header: {
        //         "Access-Control-Allow-Origin": '*'
        //     }
        // });

        const data = myData


        const { photos } = data;

        const allProducts = photos.map(photo => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: random.word(),
            productPrice: commerce.price(),
            id: random.uuid()
        }))

        setProduct(allProducts)
    }


    useEffect(() => {
        fetchPhotos();
    }, [])

    return (
        <Container fluid>
            <h1 className="text-success text-center">Buy Page</h1>
            <Row>
                {product.map(product => (
                    <Col md={4} key={product.id}>
                        <CartItem product={product} addInCart={addInCart} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default BuyPage;