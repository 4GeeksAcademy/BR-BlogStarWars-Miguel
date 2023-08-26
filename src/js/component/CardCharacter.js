import React from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

const CardCharacter = ({ character, hairColor, eyeColor, gender, uid }) => {
    const params = useParams();
    const { actions } = useContext(Context);

    const fetchDetails = () => {
        actions.fetchCharacterDetails(uid);
    };
    return (
        <div className="card me-2">
            <img src="https://placehold.co/600x400" className="card-img-top"></img>
            <div className="card-body">
                {/* <h5 className="card-title">{name, hair, eye}</h5> */}
                <h2 className="card-text">{character}</h2>
                <div>
                    <p>Gender: {gender} </p>
                    <p>Hair-color: {hairColor} </p>
                    <p>Eye-color: {eyeColor} </p>



                </div>
                <Link to={`/detail/${uid}`}>
                    <button className="btn btn-success me-3" onClick={fetchDetails}>
                        {character}
                    </button>
                </Link>

                <button className="btn btn-warning">Add fav</button>

            </div>
        </div >
    )
}

export default CardCharacter;
