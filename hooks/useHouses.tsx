import { useState, useEffect } from "react"; 
import loadingStatus from "../helpers/loadingStatus";
import {House} from '../src/model/house'
import useGetRequest from "./useGetRequest";

const housesArray: House[] = [];

const useHouses = () => {
    const [houses, setHouses] = useState(housesArray);
    const {get, loadingState} = useGetRequest("/api/houses")

    useEffect(() => {
        const fetchHouses = async () => {
            const houses = await get();
            setHouses(houses);
        }
        fetchHouses();
    }, [get]);

    return {houses, setHouses, loadingState}
}

export default useHouses;