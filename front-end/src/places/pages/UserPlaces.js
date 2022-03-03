import React from "react";
import PlaceItem from "../components/PlaceItem";

import '../components/PlaceList';
import PlaceList from "../components/PlaceList";

const DUMMY = [{
    id:'p1',
    title:'name example',
    description:'description example',
    imageUrl:'p1',
    address:'name example',
    location:{
        lat:40.24324,
        lng:-73.4234
    },
    creator:'u1'
}]
const UserPlaces = () => {
    return <PlaceList items={DUMMY}></PlaceList>;
}

export default UserPlaces;