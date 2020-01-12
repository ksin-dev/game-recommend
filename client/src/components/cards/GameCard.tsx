import React, { forwardRef } from "react";
import {
	makeStyles,
	createStyles,
	Card,
	CardMedia,
	CardContent,
	Typography,
	Box,
	useMediaQuery,
	Theme
} from "@material-ui/core";

import StarIcon from "@material-ui/icons/Star";
import { yellow } from "@material-ui/core/colors";

const useStyles = makeStyles({
	card: {
		display: "inline-block",
		marginLeft: "10px",
		cursor: "pointer"
	},
	cover: {
		width: "100%"
	},
	starText: {
		color: yellow[600]
	},
	title: {
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
		overflow: "hidden"
	}
});

type Props = {
	title: string,
	image: string,
	rating: Number,
	onClick: (event: React.MouseEvent<HTMLElement>) => any
};

export default forwardRef((props: Props, ref) => {
	const classes = useStyles();
	const lg = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));
	const md = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
	const sm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
	const xs = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));

	function getCardSize() {
		if (xs) {
			return "28%";
		} else if (sm) {
			return "20%";
		} else if (md) {
			return "12%";
		} else if (lg) {
			return "10%";
		} else {
			return "8%";
		}
	}
	return (
		<Card
			className={classes.card}
			onClick={(event) => { props.onClick(event); }}
			style={{ width: getCardSize() }}
			ref={ref}
		>
			<CardMedia
				component="img"
				className={classes.cover}
				image={props.image}
				title="Contemplative Reptile"
			/>
			<CardContent>
				<Typography gutterBottom variant="body2" className={classes.title}>
					{props.title}
				</Typography>

				<Box
					display="flex"
					flexDirection="row"
					justifyContent="flex-start"
					className={classes.starText}
				>
					<StarIcon />
					<Typography>{props.rating}</Typography>
				</Box>
			</CardContent>
		</Card>
	);
});
