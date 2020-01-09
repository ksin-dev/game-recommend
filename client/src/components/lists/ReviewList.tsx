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

type IProps = {
	items: any[]
}

export default function ReviewList(props: IProps) {
	const { items } = props;
	const classes = useStyles();
	return (
		<List>
			{items.map((item) => {
				return (
					<>
						<ListItem className={classes.listItem}>
							<Grid item>
								<img
									className={classes.img}
									alt="Travis Howard"
									src={item.subImage}
								/>
							</Grid>
							<Grid container className={classes.container} direction="column">
								<Grid item className={classes.title}>
									<Typography variant="body1" color="textPrimary">
										{item.title}
									</Typography>
									<Typography variant="caption">{item.productionYear} {item.ProductionNation.name}</Typography>
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
