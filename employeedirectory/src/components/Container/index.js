import React from "react";

const Container = (props) => {
	const { style, children } = props;
	return (
		<div className="container-fluid" style={style}>
			{children}
		</div>
	);
};

export default Container;
