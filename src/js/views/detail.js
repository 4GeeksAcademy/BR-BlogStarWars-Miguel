import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import CardCharacter from "../component/CardCharacter";



export const Detail = () => {
    const [characters, setCharacters] = useState([])
    const params = useParams();
    const { store } = useContext(Context);


    // Retrieve the character details from the global store
    const characterDetails = store.characterDetails || {};

    return (
        // <div className='d-flex justify-content-center align-items-center'>
        //     <button className="btn btn-success ">{params.characterUid}</button>
        // </div>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src="https://placehold.co/600x400" className="card-img-top"></img>
                </div>
                <div className="col-6 text-center">
                    <h2>{characterDetails.name}</h2>
                    <p>Aenean venenatis eleifend urna, aliquam ultricies urna viverra iaculis. Phasellus posuere laoreet diam vitae tristique.
                        Curabitur ultrices cursus tristique. Ut viverra in dolor et elementum. Fusce nisi erat, aliquam ac velit nec,
                        dapibus porta turpis. Morbi posuere varius suscipit. Curabitur vel ante vitae leo tincidunt condimentum eu quis massa.</p>

                </div>
            </div>
            <div className="divider mt-2 bg-danger w-100"><hr /></div>
            <div className="row text-danger">
                <div className="col">
                    <p className="text-center mb-0">Name</p>
                    <p className="text-center">Example to test larger things than expected{characterDetails.name}</p>
                </div>
                <div className="col">
                    <p>Gender: {characterDetails.gender}</p>
                </div>
                <div className="col">
                    <p>Hair Color: {characterDetails.hair_color}</p>
                </div>
                <div className="col">
                    <p>Eye Color: {characterDetails.eye_color}</p></div>
            </div>





        </div>
    )
};