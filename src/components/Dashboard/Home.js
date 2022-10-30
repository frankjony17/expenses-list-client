import React,{ useContext, useEffect} from 'react';

//Import Components
import { ThemeContext } from "../../context/ThemeContext";

import { store } from '../../store';

const Home = () => {
	const { changeBackground } = useContext(ThemeContext);

	useEffect(() => {
		changeBackground(store.getState().auth.themeContext);
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