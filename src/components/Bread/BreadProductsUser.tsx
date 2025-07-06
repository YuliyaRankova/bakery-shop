import {useAppSelector} from "../../redux/hooks.ts";
import {Grid} from "@mui/material";
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@mui/material";
import {ProductType} from "../../utils/shop-types.ts";
import {useNavigate} from "react-router-dom";
import {addProductUnitToCart} from "../../firebase/firebaseCartService.ts";

const BreadProductsUser = () => {

    const {currProds} = useAppSelector(state => state.products);
    const navigate = useNavigate();
    const {authUser} = useAppSelector(state => state.auth);

    return (
        <Grid container>
            {currProds.map((prod:ProductType) =>
            <Grid key={prod.id!} size={{xs:12, sm: 6, md: 4}}>
                <Card sx={{ maxWidth: 345,
                    height: '100%',
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-between"
                }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={"/images/" + prod.img!}
                        title={prod.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {prod.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {prod.category}
                        </Typography>
                        <Typography variant="body2">
                            {prod.cost} ILS
                        </Typography>
                    </CardContent>
                    <CardActions sx={{justifyContent:"space-around"}}>
                        <Button size="small" variant={"outlined"} sx={{
                            fontSize: "1.2rem",
                            padding: "0 20px",
                            color:"black",
                            borderColor: "black"
                        }}
                        onClick={async () => {
                        if(!authUser) navigate('/login')
                            await addProductUnitToCart(`${authUser.email}_collection`, prod.id)
                        }}
                        >+</Button>
                        <Typography sx={{fontSize: "1.2rem"
                        }}>0</Typography>
                        <Button size="small"variant={"outlined"} sx={{
                            fontSize: "1.2rem",
                            color:"black",
                            borderColor: "black",
                            padding: "0 20px"
                        }}>-</Button>
                    </CardActions>
                </Card>
            </Grid>
            )}
        </Grid>
    );
};

export default BreadProductsUser;