import {useAppSelector} from "../../redux/hooks.ts";
import {GridColDef} from "@mui/x-data-grid";
import {Avatar, Box} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";

const BreadProductsAdmin = () => {
    const {currProds} = useAppSelector(state => state.products);

    const rows = currProds;
    const columns: GridColDef<(typeof rows)[number]>[] =[
        { field: 'id', headerName: 'ID', width: 90, flex: 0.3 },
        { field: 'title', headerName: 'Product Name', width: 90, flex:1 },
        { field: 'category', headerName: 'Category', width: 90, flex:0.4 },
        { field: 'unit', headerName: 'Unit', width: 90, flex:0.4  },
        { field: 'cost', headerName: 'Price in ILS', width: 90, flex:0.4  },
        { field: 'img', width: 200, flex:0.5, renderCell: (params) =>{
            return(
                <Avatar src={"/images/" + params.value}/>
            )
            } }
    ]

    return (
        <Box>
            <DataGrid columns={columns} rows={rows}/>
        </Box>
    );
};

export default BreadProductsAdmin;