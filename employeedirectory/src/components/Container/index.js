import React from "react";

const Container = (props) => {
	const { style, children } = props;
	return (
		<div className="container" style={style}>
			{children}
		</div>
	);
};

export default Container;
