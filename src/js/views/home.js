import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useState, useEffect } from "react";
import CardCharacter from "../component/CardCharacter";



export const Home = () => {
	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([])
	const [vehicles, setVehicles] = useState([])

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people/")
			.then((res) => res.json())
			.then((data) => {
				setCharacters(data.results);
			})
			.catch((err) => console.error(err));
		fetch("https://www.swapi.tech/api/planets/")
			.then((prop) => prop.json())
			.then((planets) => {
				setPlanets(planets.results);
			})
			.catch((err) => console.error(err));
		fetch("https://www.swapi.tech/api/vehicles/")
			.then((vehi) => vehi.json())
			.then((vehicles) => {
				setVehicles(vehicles.results);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<>
			<div className="text-center mt-5">
				<h1>Characters</h1>
				{characters.map((character, index) => (
					<CardCharacter key={index} character={character.name} />

				))}

			</div >
			<div className="text-center mt-5">
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

			</div >
		</>
	);
};
