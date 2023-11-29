import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, ImageList, ImageListItem, TextField } from "@mui/material";
import React from "react";
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';
function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
            style={{ cursor: 'move' }}
        >
            <Paper {...props} />
        </Draggable>
    );
}


export default function AlertDialog({ data }) {
    debugger
    console.log('products :>> ', data);
    const [open, setOpen] = React.useState(false);
    function handleClickOpen(e) {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <React.Fragment>
            <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
            >
                View Details
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-describedby="draggable-dialog-description"
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title">

                <DialogTitle
                    // style={{ cursor: 'move' }} 
                    id="draggable-dialog-title">
                    {data.title}
                </DialogTitle>

                <DialogContent>
                    <DialogContentText style={{ fontWeight: "bold" }} id="alert- dialog - description">
                        {data.description}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        Price    {data.price}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        Discount Percentage    {data.discountPercentage}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        Rating   {data.rating}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        Stock    {data.stock}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        Brand {data.brand}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        Category {data.category}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        <ImageList sx={{ width: 500, height: 450 }} cols={1} rowHeight={164}>
                            <ImageListItem key={data.images}>
                                <img
                                    src={data.images[0]}
                                    alt={data.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </ImageList>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </React.Fragment >
    );
}
