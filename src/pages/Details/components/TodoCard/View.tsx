import ModalDeleteTodo from "../ModalDeleteTodo/View";
import ModalEditTodo from "../ModalEditTodo/View";
import useView from "./View.hook";
import * as css from "./View.styles";
import { TodoCardProps } from "./View.types";

const TodoCard = (props: TodoCardProps) => {
	const { todo, refetch } = props;
	const {
		isOpenDeleteModal,
		isOpenEditModal,
		setIsOpenDeleteModal,
		setIsOpenEditModal,
		handleDeleteTodoItems,
		handleTodoCheckbox,
		handleOpenEditModal,
		handleEditTodoItems,
		priorityData,
	} = useView(props);

	return (
		<div className={css.todoItemLists}>
			<div className={css.leftSideTodoItem}>
				<input
					className={css.checkbox}
					type="checkbox"
					checked={todo.is_active === 0}
					value={todo.is_active}
					onChange={(e) => {
						console.log(e?.target.checked);
						
						handleTodoCheckbox(e, todo);
					}}
				/>

				<i
					className={css.iconDot(todo.priority)}
				/>
				<h4
					className={css.todoTitle(todo.is_active === 0)}
				>
					{todo.title}
				</h4>
				<div
					className={css.IconPencilTodoItem}
					onClick={handleOpenEditModal}
				/>
			</div>

			<div>
				<button
					className={css.btnDeleteTodoItem}
					onClick={() => setIsOpenDeleteModal(true)}
				/>
				{isOpenDeleteModal && (
					<ModalDeleteTodo
						title={todo.title}
						onDelete={() => handleDeleteTodoItems(todo.id)}
						onClose={() => setIsOpenDeleteModal(false)}
					/>
				)}

				{isOpenEditModal && (
					<ModalEditTodo
						todoData={todo}
						priorityData={priorityData}
						onClose={() => setIsOpenEditModal(false)}
						refetch={refetch}
						onSave={handleEditTodoItems}
					/>
				)}
			</div>
		</div>
	);
};

export default TodoCard;
