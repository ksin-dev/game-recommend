import React from "react";
import { blue } from "@material-ui/core/colors";
import {
	Dialog,
	DialogTitle,
	List,
	makeStyles,
	ListItem,
	ListItemText
} from "@material-ui/core";

const useStyle = makeStyles({
	avatar: {
		backgroundColor: blue[100],
		color: blue[600]
	}
});


export interface SimpleDialogProps {
	open: boolean;
	selectedValue: string;
	onClose: (value: string) => void;
}

function ReviewCategoryDialog(props: SimpleDialogProps) {
	const classes = useStyle();
	const { onClose, selectedValue, open } = props;

	const handleClose = () => {
		onClose(selectedValue);
	};

	const handleListItemClick = (value: string) => {
		onClose(value);
	};

	return (
		<Dialog
			onClose={handleClose}
			aria-labelledby="simple-dialog-title"
			open={open}
		>
			<DialogTitle id="simple-dialog-title">게임</DialogTitle>
			<List>
				{["랜덤 게임", "맞춤 추천게임"].map(email => (
					<ListItem
						button
						onClick={() => handleListItemClick(email)}
						key={email}
					>
						<ListItemText primary={email} />
					</ListItem>
				))}
			</List>
		</Dialog>
	);
}
export default ReviewCategoryDialog;
