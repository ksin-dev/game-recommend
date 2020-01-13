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
	Theme,
	Tooltip
} from "@material-ui/core";

import StarIcon from "@material-ui/icons/Star";
import { yellow } from "@material-ui/core/colors";

const useStyles = makeStyles({
	card: {
		display: "inline-block",
		marginLeft: "10px",
		cursor: "pointer",
		maxHeight: "323px"
	},
	cover: {
		width: "166px",
		height: "238px"
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
	isSearch?: boolean,
	description?: string,
	responsive?: boolean, //default true
	onClick: (event: React.MouseEvent<HTMLElement>) => any
};

export default forwardRef((props: Props, ref) => {
	const classes = useStyles();
	const responsive = typeof props.responsive === "boolean" ? props.responsive : true;
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
		<Tooltip title={props.title} placement="top" >

			<Card
				className={classes.card}
				onClick={(event) => { props.onClick(event); }}
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

					{props.description &&
						<Typography gutterBottom variant="caption" className={classes.title}>
							{props.description}
						</Typography>
					}

					{props.rating &&
						<Box
							display="flex"
							flexDirection="row"
							justifyContent="flex-start"
							className={classes.starText}
						>
							<StarIcon />
							<Typography>{props.rating}</Typography>
						</Box>
					}
				</CardContent>
			</Card>
		</Tooltip>
	);
});
