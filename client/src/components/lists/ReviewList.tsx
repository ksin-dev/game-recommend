import React, { useState } from "react";
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
import { useHistory } from "react-router";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { EDIT_RATING_BY_GAME_CONTENT } from "~/constants";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		img: {
			width: "76px",
			height: "110px",
			marginRight: "16px",
			cursor: "pointer"
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
	const [reviewRatings, setReviewRatings] = useState<any>({});
	const client = useApolloClient();
	const history = useHistory();
	const classes = useStyles();

	async function ratingChange(event: any, value: Number) {
		const id = this.id;
		const result = await client.mutate({
			mutation: EDIT_RATING_BY_GAME_CONTENT,
			variables: {
				gameContentId: id
				rating: value
			}
		});


		setReviewRatings({
			...reviewRatings,
			[id]: result?.data?.editUserRating?.rating || 0
		});

	}
	return (
		<List>
			{items.map((content, idx) => {
				return (
					<ListItem key={content.id} className={classes.listItem}>
						<Grid item>
							<img
								className={classes.img}
								alt="Travis Howard"
								src={content.subImage}
								onClick={() => history.push("/contents/" + content.id)}
							/>
						</Grid>
						<Grid container className={classes.container} direction="column">
							<Grid item className={classes.title}>
								<Typography variant="body1" color="textPrimary">
									{content.title}
								</Typography>
								<Typography variant="caption">{content.productionYear} {content.ProductionNation.name}</Typography>
							</Grid>
							<Grid item>
								<Rating name={content.id} value={reviewRatings[content.id]} onChange={ratingChange.bind(content)} size="large" />
							</Grid>
						</Grid>
					</ListItem>
				);
			})}
		</List >
	)
}
