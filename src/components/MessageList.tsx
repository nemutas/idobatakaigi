import React from 'react';
import { makeStyles } from '@material-ui/core';

export const MessageList: React.FC = () => {
	const classes = useStyles();

	return <div className={classes.root}>MessageList</div>;
};

const useStyles = makeStyles({
	root: {
		gridRow: 1
	}
});
