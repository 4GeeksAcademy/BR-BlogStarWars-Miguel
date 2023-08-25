import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CardCharacter from "../component/CardCharacter";



export const Detail = () => {
    const [characters, setCharacters] = useState([])
    const params = useParams();

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <button className="btn btn-success ">{params.characterUid}</button>
        </div>
    )
};