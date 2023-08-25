import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useState, useEffect } from "react";
import CardCharacter from "../component/CardCharacter";



export const Home = () => {
	const [characters, setCharacters] = useState([]);
	const [properties, setProperties] = useState([])
	const [planets, setPlanets] = useState([])
	const [vehicles, setVehicles] = useState([])

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people/")
			.then((res) => {
				if (!res.ok) throw Error(res.statusText);
				return res.json();
			})
			.then((data) => {
				setCharacters(data.results);

				const listCharactersPromises = data.results.map((person) => {
					return fetch(`https://www.swapi.tech/api/people/${person.uid}`)
						.then((res) => {
							if (!res.ok) throw Error(res.statusText);
							return res.json();
						})
						.then((prop) => {
							return prop.result.properties;
						})
						.catch((error) => console.log("error", error));
				});
				return Promise.all(listCharactersPromises)

			})
			.then((listProperties) => setProperties(listProperties))
			.catch((err) => console.error(err));



		// fetch("https://www.swapi.tech/api/planets/")
		// 	.then((prop) => prop.json())
		// 	.then((planets) => {
		// 		setPlanets(planets.results);
		// 	})
		// 	.catch((err) => console.error(err));
		// fetch("https://www.swapi.tech/api/vehicles/")
		// 	.then((vehi) => vehi.json())
		// 	.then((vehicles) => {
		// 		setVehicles(vehicles.results);
		// 	})
		// 	.catch((err) => console.error(err));
	}, []);

	return (
		<>
			<div className="container  mt-5">
				<h1 className="text-danger">Characters</h1>
				<div className="row">
					<div className="col-md-12">
						<div className="d-flex scrolling-container">
							{properties.map((property, index) => (
								<CardCharacter key={index} uid={property.url[property.url.length-1]} character={property.name} hairColor={property.hair_color} eyeColor={property.eye_color} gender={property.gender}/>

							))}

						</div>
					</div>
				</div>

			</div >
			{/* <div className="text-center mt-5">
				<h1>Planets</h1>
				{planets.map((planets, index) => (
					<CardCharacter key={index} character={planets.name} />

				))}

			</div >
			<div className="text-center mt-5">
				<h1>Vehicles</h1>
				{vehicles.map((vehicles, index) => (
					<CardCharacter key={index} character={vehicles.name} />

				))}

			</div > */}
		</>
	);
};
