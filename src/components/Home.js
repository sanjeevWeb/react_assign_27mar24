

import React, { useState, useEffect } from 'react';
import "./style.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart } from '../redux/features/cartSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import Headers from './Headers'; // Import the Headers component

const Home = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    // add to cart 
    const send = (e) => {
        dispatch(addToCart(e));
        toast.success("Item added In Your Cart");
    };

    const fetchAllData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const allData = await response.json();
            setData(allData.products);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAllData();
    }, []);

    // Filter products based on the search query
    const filteredProducts = data.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Headers setSearchTerm={setSearchTerm} /> {/* Pass setSearchTerm as a prop */}
            <section className='iteam_section mt-4 container'>
                <h2 className='px-4' style={{ fontWeight: 400 }}>Look At These Products...</h2>
                <div className='row mt-2 d-flex justify-content-around align-items-center'>
                    {filteredProducts.map((element, index) => {
                        return (
                            <Card key={index} style={{ width: "22rem", border: "none" }} className='hove mb-4'>
                                <Card.Img variant='top' className='cd' src={element.images[0]} />

                                <div className="card_body">
                                    <div className="lower_data d-flex justify-content-between ">
                                        <h5>{element.title}</h5>
                                        <span>₹ {element.price}</span>
                                    </div>
                                    <div className="extra"></div>

                                    <div className="last_data d-flex justify-content-between align-items-center">
                                        <img src={element.arrimg} className='limg' alt="" />
                                        <Button 
                                            style={{ width: "150px", background: "#FFEBB2", border: "none", color: 'brown' }} 
                                            variant='outline-light'
                                            className='mt-2 mb-2'
                                            onClick={() => send(element)}
                                        >
                                            Add To Cart
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Home;
