import * as css from "./View.styles";
// import ActivityEmptyState from "../../assets/activity-empty-state.png";
import ActivityEmptyState from "../../assets/create-todo.png";
import TodoItemEmptyState from "../../assets/list-todo.jpg";
import { EmptyStateProps } from "./View.types";

const EmptyState = ({ page, onAddTodo }: EmptyStateProps) => {
	return (
		<div
			className={css.container}
		>
			{page === "dashboard" && (
				<img
					className={css.logo}
					src={ActivityEmptyState}
					alt="activity empty state"
					onClick={onAddTodo}
				/>
			)}

			{page === "detail" && (
				<img
					src={TodoItemEmptyState}
					alt="todo item empty state"
					onClick={onAddTodo}
				/>
			)}
		</div>
	);
};

export default EmptyState;
