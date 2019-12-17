import * as createPallet from "@material-ui/core/styles/createPalette";
declare module "@material-ui/core/styles/createPallete" {
	interface PaletteColor {
		100?: string;
	}

	interface PaletteOptions {
		third?: any;
	}
}
