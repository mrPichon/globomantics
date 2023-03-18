import Image from "next/image";
import { useContext } from "react";
import currencyFormatter from "../helpers/currencyFormatter";
import defaultPhoto from "../helpers/defaultPhoto";
// import { navigationContext } from "./app";
import {House} from '../src/model/house'

const HouseDetail = ({house}: {house:House}) => {
  return (
    <div className="row">
      <div className="col-6">
        <div className="row">
          <Image
            width="500" height="500"
            src={
              house.photo ? `/houseImages/${house.photo}.jpeg` : defaultPhoto
            }
            alt="House pic"
          />
        </div>
      </div>
      <div className="col-6">
        <div className="row mt-2">
          <h5 className="col-12">{house.country}</h5>
        </div>
        <div className="row">
          <h3 className="col-12">{house.address}</h3>
        </div>
        <div className="row">
          <h2 className="themeFontColor col-12">
            {currencyFormatter.format(house.price)}
          </h2>
        </div>
        <div className="row">
          <div className="col-12 mt-3">{house.description}</div>
        </div>
      </div>
    </div>
  );
};

export default HouseDetail;
