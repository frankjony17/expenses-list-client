import React,{ useContext, useEffect} from 'react';

//Import Components
import { ThemeContext } from "../../../context/ThemeContext";


const Home = () => {
	const { changeBackground } = useContext(ThemeContext);
	useEffect(() => {
		changeBackground({ value: "light", label: "Light" });
	},// eslint-disable-next-line
	[]);

	return(
		<>
			<div className="row">
				Welcome to the Expenses List
			</div>	
		</>
	)
}
export default Home;