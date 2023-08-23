import React from "react";

const CardCharacter = ({ character }) => {

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{character}</h5>
                <p className="card-text">{character}</p>

            </div>
        </div>
    )
}

export default CardCharacter;