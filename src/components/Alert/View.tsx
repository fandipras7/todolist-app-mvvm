import * as css from "./View.styles";

const Alert = ({ isOpen, text }: { isOpen: boolean; text: string }) => {
	return (
		<div className={css.alertContainer}>
			<div className={css.alert(isOpen)}>
				<div className={css.alertContent}>
					<i className={css.iconInformation} />
					<p>{text}</p>
				</div>
			</div>
		</div>
	);
};

export default Alert;
