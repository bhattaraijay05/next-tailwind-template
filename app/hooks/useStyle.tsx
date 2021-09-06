import colors from "@constants/colors";

export default function useStyle() {
	const theme = colors.light;

	return {
		color:
			theme === colors.darkTheme
				? {
						primary: colors.red,
						main: colors.darkTheme,
						textColor: colors.whiteText,
						distinct: colors.black,
						white: colors.whiteText,
				  }
				: {
						primary: colors.blue,
						main: colors.lightTheme,
						textColor: colors.blackText,
						distinct: colors.white,
						themeSwitch: colors.blackText,
						white: colors.whiteText,
				  },
	};
}
