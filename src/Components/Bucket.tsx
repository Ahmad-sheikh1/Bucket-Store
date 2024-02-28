"use client"

import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    ListItemButton,
    Box,
    Divider,
    Typography
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppSelector } from "@/Store/store"
import { useDispatch } from "react-redux";
import { DeleteFromBasket } from "@/Store/Slices/AddToBasket";

const Bucket = () => {
    const Products = useAppSelector((state) => state.AddingProducts.products);
    console.log("ahmad", Products);

    const dispatch = useDispatch();

    // Delete Icon
    const handleDelete = (index: number) => {
        dispatch(DeleteFromBasket(index));
    };

    const totalPrice = Products.reduce((total, product) => total + product.Price, 0);

    return (
        <>
            <Box sx={{ display: "grid", placeItems: "center", margin: "15px 0", alignItems: "center" }}>
                <Typography color={"blue"} component={"h1"}>
                    Shopping Basket
                </Typography>
                <Typography component={"p"}>
                    You have {Products.length} items in your basket
                </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <List sx={{ width: "80%" }}>
                    {Products != null ? Products.map((product: any, index: number) => (
                        <div key={index}>
                            <ListItem sx={{ width: "100%" }}>
                                <ListItemAvatar>
                                    <Avatar src={product.url} />
                                </ListItemAvatar>
                                <ListItemText primary={product.title} secondary={product.desc} />
                                <ListItemButton onClick={() => handleDelete(index)}>
                                    <Avatar>
                                        <DeleteIcon />
                                    </Avatar>
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                        </div>
                    )) : "don;t have products to show"}
                </List>
            </Box>
            <Box sx={{ display: "grid", placeItems: "center", margin: "15px 0" }}>
                <Typography component={"p"}>
                    Total Price: ${totalPrice}
                </Typography>
            </Box>
        </>
    );
}

export default Bucket;
