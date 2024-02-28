"use client";

import { Grid, Card, CardMedia, Button } from "@mui/material";
import { AddToBasket } from "../Store/Slices/AddToBasket"
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/Store/store"


const Products = () => {
    const images = [
        {
            url: 'https://bucket-store.vercel.app/red-tshirt.png',
            title: 'Red',
            Price: 799,
            desc: "The only product on our site that might actually be worth buying"
        },
        {
            url: 'https://bucket-store.vercel.app/yellow-tshirt.png',
            title: 'Yellow',
            Price: 499,
            desc: "This unique t-shirt is guaranteed to fit nobody, not even new born babies"
        },
        {
            url: 'https://bucket-store.vercel.app/blue-tshirt.png',
            title: 'Blue',
            Price: 399,
            desc: "No fancy sizing charts here, one t-shirt size to rule them all"
        },
    ];

    const dispatch = useDispatch()

    let objectsArray: any[] = [];
    const Products = useAppSelector((state) => state.AddingProducts.products);


    function handleAddToBasket(product: object) {
        let currentObject: any = product;
        if (currentObject) {
            objectsArray.push(currentObject);
            currentObject = null
        }
        let newObject: object = product
        // currentObject = newObject;
        console.log("Updated Objects Array: ", objectsArray);
        dispatch(AddToBasket(objectsArray));
    }



    return (
        <Grid container spacing={0} justifyContent="center">
            {images.map((pro, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ position: "relative" }}>
                        <CardMedia
                            component="img"
                            src={pro.url}
                            title={pro.title}
                            sx={{ width: "100%", height: "200px", objectFit: "cover" }}
                        />
                        <Button
                            onClick={() => {
                                objectsArray = [];
                                handleAddToBasket(pro);
                            }}
                            disabled={Products.some((item) => item.title === pro.title)}
                            variant="outlined"
                            color="primary"
                            sx={{
                                backgroundColor: "white",
                                position: "absolute",
                                fontWeight: "bold",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                opacity: 1,
                                transition: "opacity 0.3s",
                                outline: "none",
                                border: "none",
                                "&:hover": {
                                    backgroundColor: "transparent",
                                    border: "1px solid white"
                                },
                            }}
                        >
                            {pro.title}
                        </Button>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default Products;
