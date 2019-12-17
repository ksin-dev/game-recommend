import React, {
	useCallback,
	useRef,
	useEffect,
	useState,
	createRef
} from "react";
import { makeStyles, createStyles, Theme, Grid, Fab } from "@material-ui/core";
import GameCard from "~/components/cards/GameCard";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { grey } from "@material-ui/core/colors";
const useStyels = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: "100%",
			display: "block",
			whiteSpace: "nowrap",
			overflow: "hidden",
			position: "relative"
		},
		after: {
			right: "0",
			position: "absolute",
			top: "calc(50% - 20px)",
			margin: "0 16px"
		},
		begin: {
			left: "0",
			position: "absolute",
			margin: "0 16px",
			top: "calc(50% - 20px)"
		},
		fab: {
			opacity: "0.8"
		}
	})
);

type IProps = {
	onClick: (target: React.MouseEvent<HTMLElement>) => void;
	onPrev: (target: React.MouseEvent<HTMLElement>) => void;
	onNext: (target: React.MouseEvent<HTMLElement>) => void;
};

export default function ListCarousels(props) {
	const classes = useStyels();
	const divRef = useRef<HTMLDivElement>(null);
	const cardRef = createRef<HTMLDivElement>();

	const [carouselsWidth, setCarouselsWidth] = useState(0);
	const [cardWidth, setCardWidth] = useState(0);

	const [translateX, setTranslateX] = useState(0);

	useEffect(() => {
		function handleResize() {
			if (divRef !== null && divRef.current !== null && cardRef.current) {
				const ref = divRef.current;
				const ParentWidth = ref.getBoundingClientRect().width;
				const childWidth = cardRef.current.getBoundingClientRect().width;

				setCarouselsWidth(ParentWidth);
				setCardWidth(childWidth + 10);
			}
		}
		handleResize();

		window.addEventListener("resize", handleResize);
	}, []);

	function prevClick(target: React.MouseEvent) {
		setTranslateX(translateX + (carouselsWidth / cardWidth) * cardWidth);
	}

	function nextClick(target: React.MouseEvent) {
		setTranslateX(translateX - (carouselsWidth / cardWidth) * cardWidth);
	}

	return (
		<div className={classes.root} ref={divRef}>
			<div
				style={{
					transform: `translateX(${translateX}px)`,
					transition: "500ms"
				}}
			>
				{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1, 1, 1].map(() => {
					return <GameCard ref={cardRef} />;
				})}
			</div>

			<div className={classes.begin}>
				<Fab
					aria-label="add"
					size="small"
					color="secondary"
					className={classes.fab}
					onClick={prevClick}
				>
					<KeyboardArrowLeftIcon />
				</Fab>
			</div>
			<div className={classes.after}>
				<Fab
					aria-label="add"
					size="small"
					color="secondary"
					className={classes.fab}
					onClick={nextClick}
				>
					<KeyboardArrowRightIcon />
				</Fab>
			</div>
		</div>
	);
}
