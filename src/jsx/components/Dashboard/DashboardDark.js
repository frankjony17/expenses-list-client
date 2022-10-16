import React,{ useContext, useEffect} from 'react';

//Import Components
import { ThemeContext } from "../../../context/ThemeContext";


const DashboardDark = () => {
	const { changeBackground } = useContext(ThemeContext);
	useEffect(() => {
		changeBackground({ value: "dark", label: "Dark" });
	},// eslint-disable-next-line
	[]);

	return(
		<>
			<div className="row">
				Dark
			</div>	
		</>
	)
}
export default DashboardDark;