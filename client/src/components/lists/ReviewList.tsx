import React from "react";
import { makeStyles, createStyles } from "@material-ui/styles";
import {
	Theme,
	List,
	ListItem,
	ListItemText,
	Typography,
	Divider,
	ListItemAvatar,
	Avatar,
	ListItemIcon,
	Grid
} from "@material-ui/core";

import { Rating } from "@material-ui/lab";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		img: {
			width: "76px",
			height: "110px",
			marginRight: "16px"
		},
		container: {
			height: "110px"
		},
		title: {
			flexGrow: 1
		},
		listItem: {
			paddingLeft: 0,
			paddingRight: 0
		}
	})
);

export default function ReviewList() {
	const classes = useStyles();
	return (
		<List>
			{[1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10].map(() => {
				return (
					<>
						<ListItem className={classes.listItem}>
							<Grid item>
								<img
									className={classes.img}
									alt="Travis Howard"
									src="https://static.metacritic.com/images/products/games/6/2478450bf23c6bbe3c9b7aaeaab47571-98.jpg"
								/>
							</Grid>
							<Grid container className={classes.container} direction="column">
								<Grid item className={classes.title}>
									<Typography variant="body1" color="textPrimary">
										레드데드 리뎀션
									</Typography>
									<Typography variant="caption">2010 미국</Typography>
								</Grid>
								<Grid item>
									<Rating name="size-large" value={2} size="large" />
								</Grid>
							</Grid>
						</ListItem>
						<Divider />
					</>
				);
			})}
		</List>
	);
}
