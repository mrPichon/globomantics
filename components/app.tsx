import React from 'react';
import Banner from './banner';
import HouseList from './houseList';
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {useState} from 'react'
import HouseDetail from './houseDetail'
import {House} from '../src/model/house'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const App = () => {
    const [selectedHouse, setSelectedHouse] = useState<House>()

    return (
        <>
            <Container fixed>
                <Stack spacing={2}>
                    <Item>
                        <Banner headerText="Providing houses all over the world" />
                    </Item>
                    <Item>
                        {selectedHouse ? <HouseDetail house={selectedHouse} /> : 
                        <HouseList selectHouse={setSelectedHouse}/>}
                        
                    </Item>
                </Stack>
            </Container>
        </>
    );
};

export default App;