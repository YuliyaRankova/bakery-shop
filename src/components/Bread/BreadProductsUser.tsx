import {useAppSelector} from "../../redux/hooks.ts";
import {Grid} from "@mui/material";
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@mui/material";
import {ProductType} from "../../utils/shop-types.ts";

const BreadProductsUser = () => {

    const {currProds} = useAppSelector(state => state.products);

    return (
        <Grid container>
            {currProds.map((prod:ProductType) =>
            <Grid key={prod.id!} size={{xs:12, sm: 6, md: 4}}>
                <Card sx={{ maxWidth: 345 }}>
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
                    </CardContent>
                    <CardActions>
                        <Button size="small">+</Button>
                        <Typography>0</Typography>
                        <Button size="small">-</Button>
                    </CardActions>
                </Card>
            </Grid>
            )}
        </Grid>
    );
};

export default BreadProductsUser;