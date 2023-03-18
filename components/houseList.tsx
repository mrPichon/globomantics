import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import HouseRow from './houseRow';
import { useEffect, useState } from 'react';

import {House} from '../src/model/house'
import useHouses from '../hooks/useHouses';
import LoadingIndicator from './loadingIndicator';
import loadingStatus from '../helpers/loadingStatus';



const HouseList = ({selectHouse} : any) => {
    // const [counter, setCounter] = useState(0);
    // setCounter(current => counter + 1);
    const {houses, setHouses, loadingState} = useHouses();

    if (loadingState !== loadingStatus.loaded)
        return <LoadingIndicator loadingState={loadingState} />

    const addHouse = () => {
        console.log(houses)
        setHouses([
            ...houses,
            new House(3, "parlier", "USA", 600000),
        ])
    };

    return (
        <>
            {/* A div shuould be declared in a component
             <div>
             React.Fragment
             <> ....</> or empty node*/}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Country</TableCell>
                            <TableCell>Asking Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        
                        {houses.map((h)=>(
                           <HouseRow key={h.id} house={h} selectHouse={selectHouse}/> 
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div>
                <Button variant="contained" onClick={addHouse}>Add new house</Button>
            </div>

        </>
    );
};

export default HouseList;
export {House};