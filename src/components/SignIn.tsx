import React, { useState } from 'react';
import {
	Box, Button, Container, CssBaseline, Link, makeStyles, TextField, Typography
} from '@material-ui/core';

type SignInPropsType = {
	setName: (username: string) => void;
};

export const SignIn: React.FC<SignInPropsType> = props => {
	const { setName } = props;
	const classes = useStyles();
	const [btnDisabeled, setBtnDisabled] = useState(true);

	const onChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setName(value);
		setBtnDisabled(!value);
	};

	const onClickStart = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					ようこそ
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="name"
						label="ニックネーム"
						name="name"
						autoFocus
						onChange={onChangeUserName}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						disabled={btnDisabeled}
						onClick={onClickStart}>
						はじめる
					</Button>
				</form>
			</div>
			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>
	);
};

const Copyright: React.FC = () => {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link
				color="inherit"
				href="https://github.com/nemutas/idobatakaigi"
				target="_blank"
				rel="noopener">
				nemutas
			</Link>
		</Typography>
	);
};

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));
