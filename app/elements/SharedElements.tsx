function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}

const SafeView: React.FC<CustomElementProps> = ({
	children,
	className,
	style,
}) => {
	return (
		<div
			className={classNames(
				"bg-white dark:bg-black transition-all",
				className
			)}
			style={style}
		>
			{children}
		</div>
	);
};

const MyText: React.FC<CustomTextProps> = ({
	children,
	className,
	style,
	title,
	justify,
}) => {
	return (
		<p
			className={classNames(
				"text-black dark:text-white text-lg",
				className,
				justify && "text-justify"
			)}
			style={{ fontSize: title ? 34 : 18, ...style }}
		>
			{children}
		</p>
	);
};

const HoverView: React.FC<CustomElementProps> = ({
	children,
	className,
	style,
}) => {
	return (
		<div
			className={classNames(
				"rounded-lg dark:hover:bg-gray-700 hover:bg-gray-50 transition-all",
				className
			)}
			style={style}
		>
			{children}
		</div>
	);
};

export { SafeView, MyText, HoverView };
