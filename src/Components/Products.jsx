import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AlertDialog from "./AlertDialog";
import { Container, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Products = () => {
    debugger
    const [products, setProducts] = useState([]);
    const [meraId, setMeraId] = useState(0)
    const location = useLocation();
    const [open, setOpen] = React.useState(false);
    const [clicked, setClicked] = React.useState(false);
    // const [ndata, setnData] = useState("");
    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    function handleClick() {
        setClicked(true);
    }

    const fetchInfo = async () => {
        console.log(location.state, "token")
        const response = await fetch("https://dummyjson.com/auth/products", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${location.state}`, // Include the token in the Authorization header
                "Content-Type": "application/json",
                // Other headers as needed
            },
        })
            .then((res) => res.json())
            .then((data) => {
                // setnData(data.products)
                console.log(data.products, "responseData");
                setProducts(data.products); // Update state with the fetched data
            });
    };

    useEffect(() => {
        console.log(location, "responselogin");
        fetchInfo();
    }, []);

    return (
        <Container>
            <Grid class="container my-4">
                <Grid class="grid grid-cols-3 gap-4">
                    {products.map((ele, index) => {
                        return (
                            <Grid className="max-w-lg rounded overflow-hidden shadow-lg">
                                <Grid className="px-6 py-4">
                                    <img
                                        className="w-full"
                                        src={ele.thumbnail}
                                        onClick={handleClickOpen}
                                        alt="Sunset in the mountains"
                                        style={{ height: "200px", objectFit: "cover", position: "relative" }}
                                    />
                                </Grid>

                                <Grid className="px-6 py-2">
                                    <Link
                                        className="font-bold text-xl mb-2"
                                        style={{ cursor: "move" }}>
                                        {ele.title}
                                    </Link>
                                    <Link
                                        className="font-bold text-xl mb-2"
                                        style={{ cursor: "move" }}>
                                        ₹ {ele.price}
                                    </Link>
                                </Grid>

                                <AlertDialog
                                    data={products[index]}
                                />

                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </Container>
    )
}

export default Products;