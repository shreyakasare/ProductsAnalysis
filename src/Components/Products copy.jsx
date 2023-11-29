import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const [open, setOpen] = React.useState(false);
    const [clicked, setClicked] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    function handleClick() {
        setClicked(true);
    }

    //   const [token, setToken] = useState("");
    const fetchInfo = async () => {
        debugger;
        // setToken(location.state.token)
        // console.log(location.state.token, "logintoken");
        // console.log(location.state.token, "logintoken");
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
                console.log(data.products, "responseData");
                setProducts(data.products); // Update state with the fetched data
            });
    };
    useEffect(() => {
        debugger;
        console.log(location, "responselogin");
        fetchInfo();
    }, []);

    return (
        <Container>
            <Grid
                container
                item
                xs={12}
                sm={10}
                style={{ justifyContent: "center", gap: "1rem" }}
                className="margin-bottom-center"
            >

                <Grid item xs={12} sm={6}>

                </Grid>


            </Grid>
            <div class="container my-4">
                <div class="grid grid-cols-3 gap-4">
                    {products.map((ele) => {
                        return (
                            <div className="max-w-lg rounded overflow-hidden shadow-lg">
                                <div className="px-6 py-4">
                                    <img
                                        className="w-full"
                                        src={ele.thumbnail}
                                        onClick={handleClickOpen}
                                        alt="Sunset in the mountains"
                                        style={{ height: "200px", objectFit: "cover", position: "relative" }}
                                    />
                                    {/* {openOnAddBox ? */}
                                    <Dialog
                                        open={open}
                                        onClose={handleClose}
                                        fullWidth={true}
                                        maxWidth={"md"}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">
                                            {"Beneficiary Details"}
                                        </DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                <Grid
                                                    container
                                                    direction="row"
                                                    justifyContent="center"
                                                    spacing={1}
                                                    xs={12}
                                                    style={{ marginTop: "10px", marginBottom: "10px" }}
                                                >
                                                    <Grid
                                                        container
                                                        direction="row"
                                                        justifyContent="center"
                                                        spacing={1}
                                                        xs={12}
                                                    >
                                                    </Grid>
                                                    <DialogActions>
                                                        <Button onClick={handleClose}>Disagree</Button>
                                                        <Button onClick={handleClose} autoFocus>
                                                            Agree
                                                        </Button>
                                                    </DialogActions>
                                                </Grid>
                                            </DialogContentText>
                                        </DialogContent>
                                    </Dialog>
                                    {/* : <></>} */}
                                </div>
                                <div className="px-6 py-2">
                                    <Link
                                        className="font-bold text-xl mb-2"
                                        style={{ cursor: "pointer" }}
                                    >
                                        {ele.title}
                                    </Link>
                                    {/* <p className="text-gray-700 text-base truncate ">
                                        {ele.description}
                                    </p> */}
                                </div>
                                <div className="px-6 py-2">
                                    <div className="flex">
                                        <div className="font-bold text-xl mb-2  flex-1">
                                            ₹ {ele.price}
                                        </div>
                                        {/* <p className="text-gray-700 text-base  flex-1">
                                            {ele.discountPercentage}
                                        </p> */}
                                    </div>
                                    <div className="flex">
                                        {/* <p className="text-gray-700 text-base flex-1">
                                            {ele.brand}
                                        </p> */}
                                        {/* <p className="text-gray-700 text-base flex-1">
                                            {ele.category}
                                        </p> */}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div >
        </Container>
    );
};

export default Products;