interface Props {
	children: React.ReactNode;
	className?: string;
}

const Button = ({ children, className: styles }: Props) => {
	return (
		<button
			className={`${styles} text-xs uppercase cursor-pointer rounded-md px-2 py-1 font-semibold bg-gradient-to-tr from-teal-400 to-indigo-400`}
		>
			{children}
		</button>
	);
};

export default Button;
