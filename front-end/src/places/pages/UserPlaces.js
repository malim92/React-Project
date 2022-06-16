import React from "react";
import { useParams } from "react-router-dom";

//import PlaceItem from "../components/PlaceItem";
import '../components/PlaceList';
import PlaceList from "../components/PlaceList";

const DUMMY = [{
    id:'p1',
    title:'name example',
    description:'description example',
    imageUrl:'https://lp-cms-production.imgix.net/2021-11/shutterstockRF_221218363.jpg?format=auto&crop=entropy&fit=crop&h=800&sharp=10&vib=20&w=1200',
    address:'name example',
    location:{
        lat:40.24324,
        lng:-73.4234
    },
    creator:'u1'
},
{
    id:'p2',
    title:'Property 2',
    description:'description for prop 2',
    imageUrl:'https://lp-cms-production.imgix.net/2021-11/shutterstockRF_221218363.jpg?format=auto&crop=entropy&fit=crop&h=800&sharp=10&vib=20&w=1200',
    address:'name example',
    location:{
        lat:40.24324,
        lng:-73.4234
    },
    creator:'u1'
}]

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces}></PlaceList>;
}

export default UserPlaces;