import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import {House} from '../src/model/house'
import currencyFormatter from '../helpers/currencyFormatter';

interface myProps {
    house: House,
    selectHouse: any
}

// const HouseRow  = ({house}: {house:House}, selectedHouse: any) => {
const HouseRow  = ({house, selectHouse}: myProps) => {
  
    return (
        <TableRow onClick={() => selectHouse(house)}
            sx={{ '&:last-child td, &:last-child th': {border: 0} }}
            >
                <TableCell component="th" scope="house">{house.id}</TableCell>
                <TableCell>{house.address}</TableCell>
                <TableCell>{house.country}</TableCell>
                {/* && = not zero or undefined */}
                {house.price && (
                <TableCell className={`${house.price >= 500000 ? "text-red" : ""}`}>
                    {currencyFormatter.format(house.price)}
                </TableCell>
                )}
            </TableRow>
    );
};

// pending to check
// const HouseRowMem = React.memo(HouseRow);
// export {HouseRowMem};

export default HouseRow;