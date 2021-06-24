import React, { useEffect, useRef } from 'react';
import {
	Avatar, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Typography
} from '@material-ui/core';
import { useFetchData } from '../firebase';
import { gravatarPath } from '../gravatar';

export const MessageList: React.FC = () => {
	const classes = useStyles();
	const { messages } = useFetchData();
	// console.log(messages);
	const length = messages.length;

	return (
		<List className={classes.root}>
			{messages.map(({ key, name, text }, i) => (
				<MessageItem key={key} name={name} text={text} isLastItem={length === i + 1} />
			))}
		</List>
	);
};

const useStyles = makeStyles({
	root: {
		gridRow: 1,
		width: '100%',
		overflow: 'auto'
	}
});

// ==========================================================================
// MessageItem Component

type MessageItemPropsType = {
	name: string;
	text: string;
	isLastItem: boolean;
};

const MessageItem: React.FC<MessageItemPropsType> = ({ name, text, isLastItem }) => {
	const classes = useMessageItemStyles();
	const ref = useRef<HTMLLIElement>(null);
	const avatarPath = gravatarPath(name);

	useEffect(() => {
		if (isLastItem) {
			ref.current?.scrollIntoView({ behavior: 'smooth' });
		}
	}, [isLastItem]);

	return (
		<ListItem divider ref={ref}>
			<ListItemAvatar>
				<Avatar src={avatarPath} />
			</ListItemAvatar>
			<ListItemText
				primary={name}
				secondary={
					<Typography
						component="span"
						variant="body2"
						className={classes.inline}
						color="textPrimary">
						{text}
					</Typography>
				}
			/>
		</ListItem>
	);
};

const useMessageItemStyles = makeStyles({
	inline: {
		display: 'inline'
	}
});
