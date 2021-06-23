import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MessageInputField } from './MessageInputField';
import { MessageList } from './MessageList';

type ChatAreaPropsType = {
	username: string;
};

export const ChatArea: React.FC<ChatAreaPropsType> = ({ username }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<MessageList />
			<MessageInputField username={username} />
		</div>
	);
};

const useStyles = makeStyles({
	root: {
		display: 'grid',
		height: '100vh',
		gridTemplateRows: '1fr auto'
	}
});
