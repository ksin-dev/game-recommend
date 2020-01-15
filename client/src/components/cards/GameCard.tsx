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
	Tooltip,
	CardHeader
} from "@material-ui/core";

import StarIcon from "@material-ui/icons/Star";
import { yellow } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) => createStyles({
	card: {
		cursor: "pointer",
		display: "inline-block",
		marginRight: theme.spacing(1),
		width: 108,
		[theme.breakpoints.up("sm")]: {
			width: 144,
		},
		[theme.breakpoints.up("md")]: {
			width: 192
		},
		[theme.breakpoints.up("lg")]: {
			width: 240
		}
	},
	cover: {
		height: 144,

		[theme.breakpoints.up("sm")]: {
			height: 196,

		},
		[theme.breakpoints.up("md")]: {
			height: 256
		},
		[theme.breakpoints.up("lg")]: {
			width: 320
		}
	},
	starText: {
		color: yellow[600]
	},
	title: {
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
		overflow: "hidden"
	},
	content: {
		height: "47px"
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
				<CardContent className={classes.content}>
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
