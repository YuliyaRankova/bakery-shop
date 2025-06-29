import {RouteType} from "../../utils/shop-types.ts";
import {FC, useState} from "react";
import {AppBar, Box, Tab, Tabs, Toolbar} from "@mui/material";
import {Link, Outlet} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks.ts";
import Button from "@mui/material/Button";

type Props = {
    items: RouteType[],
    sub?:string
};

const NavigatorDeskTop:FC<Props> = ({items}) => {

    const[value, setValue] = useState(0);
    const {authUser} = useAppSelector(state => state.auth);

    // useEffect(() => {
    //     const index = items.findIndex(item => item.path === pathname.substring(1) )
    //     console.log(value)
    //     console.log(index)
    //     if(value !== index)
    //         setValue(Math.max(index, 0));
    // }, [pathname]);

    const handleOnChange = (_e: React.SyntheticEvent, newValue:number)=>{
        setValue(newValue)
    };

    return (
        <Box sx={{mt: "30px"}}>
            <AppBar sx={{backgroundColor: "lightgrey"}}>
                <Toolbar>
                <Tabs value={value} onChange={handleOnChange} sx={{flexGrow: 1}}>
                {
                    items.map(item =>
                    <Tab key={item.path} component={Link} to={item.path} label={item.title}/>
                )}
                </Tabs>
                <Button variant={"text"}>{authUser?.displayName || authUser?.email}</Button>
                {/*{authUser && (*/}
                {/*    <Typography sx={{ fontWeight: "bold" }}>*/}
                {/*        Current User: {authUser.displayName || "Guest"}*/}
                {/*    </Typography>*/}
                {/*)}*/}
                </Toolbar>
            </AppBar>
            <Outlet/>
        </Box>
    );
};

export default NavigatorDeskTop;