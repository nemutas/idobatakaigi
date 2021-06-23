import React, { useRef, useState } from 'react';
import { Avatar, Grid, makeStyles, TextField } from '@material-ui/core';
import { pushMessage } from '../firebase';
import { gravatarPath } from '../gravatar';

type MessageInputFieldPropsType = {
	username: string;
};

export const MessageInputField: React.FC<MessageInputFieldPropsType> = ({ username }) => {
	const classes = useStyles();
	const [text, setText] = useState('');
	const isComposed = useRef(false);

	const avaterPath = gravatarPath(username);

	const pushMessageToFirebase = () => {
		if (!text) return;
		pushMessage(username, text);
		setText('');
	};

	const onKeyDownInputText = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			!isComposed.current && pushMessageToFirebase();
		}
	};

	return (
		<div className={classes.root}>
			<Grid container>
				<Grid item xs={1}>
					<Avatar src={avaterPath} />
				</Grid>
				<Grid item xs={10}>
					<TextField
						fullWidth
						value={text}
						onChange={e => setText(e.target.value)}
						onKeyDown={onKeyDownInputText}
						onCompositionStart={() => {
							isComposed.current = true;
						}}
						onCompositionEnd={() => {
							isComposed.current = false;
						}}
					/>
				</Grid>
				<Grid item xs={1}>
					ボタン
				</Grid>
			</Grid>
		</div>
	);
};

const useStyles = makeStyles({
	root: {
		gridRow: 2,
		margin: '26px'
	}
});
