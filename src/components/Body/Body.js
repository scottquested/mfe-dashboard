import { Header as Head, Button } from "components/Components";

import "./Body.scss";

const Body = () => {
	return (
		<div className="mfe-dashboard-body">
			This is the Dashboard MFE
			<Head someText="A header component in Dashboard" />
			<Button text="A button component in Dashboard" />
		</div>
	);
};

export default Body;
