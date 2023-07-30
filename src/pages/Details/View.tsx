import { useNavigate } from "react-router-dom";
import useView from "./View.hook";
import * as css from "./View.styles";
import TemplateLayout from "../../components/Template/View";
import IconBackButton from "../../assets/icon-todo-back-button.svg";
import IconPlus from "../../assets/icon-plus.svg";
import { sortOptionLists, KEY_ENTER } from "../../constants";
import EmptyState from "../../components/EmptyState/View";
import ModalAddTodo from "./components/ModalAddTodo/View";
import TodoCard from "./components/TodoCard";
import Alert from "../../components/Alert/View";

const DetailPages = () => {
	const navigate = useNavigate();

	const {
		isEdit,
		setIsEdit,
		isOpenSortList,
		setIsOpenSortList,
		todoItems,
		sortedTodoItems,
		setTodoItems,
		handleAddTodoItems,
		handleChangeActivityTitle,
		handleUpdateActivityTitle,
		handleSelectSortItem,
		isOpenModalAdd,
		setIsOpenModalAdd,
		activityTitle,
		checkedList,
		setCheckedList,
		setShowAlert,
		showAlert,
		refetch,
		sortedTodos,
		titleRef,
	} = useView();

	return (
		<TemplateLayout pageTitle="Detail">
			<div className={css.detail}>
				<div className={css.detailHeader}>
					<div className={css.leftSideHeader}>
						<div
							className={css.iconBackWrapper}
							onClick={() => navigate(-1)}
						>
							<img
								src={IconBackButton}
								width="16px"
								height="24px"
								alt="icon back button"
							/>
						</div>
						{isEdit ? (
							<input
								type="text"
								ref={titleRef}
								className={css.editTodoTitleInput}
								value={activityTitle}
								onChange={handleChangeActivityTitle}
								placeholder={activityTitle === "" ? "Tidak boleh kosong" : ""}
								onKeyDown={(e) =>
									e.key === KEY_ENTER &&
									activityTitle !== "" &&
									handleUpdateActivityTitle()
								}
								onBlur={handleUpdateActivityTitle}
							/>
						) : (
							<h1
								className={css.activityTitle}
								onClick={() => setIsEdit(true)}
							>
								{activityTitle}
							</h1>
						)}
						<i
							className={css.btnEditActivityTitle}
							onClick={() => setIsEdit(true)}
						/>
					</div>

					<div className={css.rightSideHeader}>
						{sortedTodoItems.length > 0 && (
							<div className={css.sortButtonWrapper}>
								<button
									className={css.btnSortList}
									onClick={() => setIsOpenSortList(!isOpenSortList)}
								>
									<span className={css.iconSort} />
								</button>

								{isOpenSortList && (
									<ul
										className={css.sortOptionListsContainer}
									>
										{sortOptionLists.map((option) => (
											<li
												key={option.id}
												className={css.sortOptionLists}
												onClick={() => handleSelectSortItem(option.value)}
											>
												<div className={css.iconOptions(option.icon)} />
												<p className={css.sortOptionTitle}>{option.name}</p>

												{sortedTodos === option.value && (
													<i className={css.iconCheck} />
												)}
											</li>
										))}
									</ul>
								)}
							</div>
						)}

						<button
							className={css.addButton}
							onClick={() => setIsOpenModalAdd(true)}
						>
							<img src={IconPlus} className={css.iconPlus} alt="icon plus" />
							Tambah
						</button>

						{isOpenModalAdd && (
							<ModalAddTodo
								todoData={todoItems}
								onSave={handleAddTodoItems}
								onClose={setIsOpenModalAdd}
							/>
						)}
					</div>
				</div>

				<div className={css.container}>
					{todoItems.length > 0 ? (
						<>
							{todoItems.map((todo, idx) => (
								<TodoCard
									key={todo.id}
									todo={todo}
									todoItems={todoItems}
									refetch={refetch}
									checkedList={checkedList}
									setCheckedList={setCheckedList}
									setTodoItems={setTodoItems}
									setShowAlert={setShowAlert}
								/>
							))}
						</>
					) : (
						<EmptyState
							page="detail"
							onAddTodo={() => setIsOpenModalAdd(true)}
						/>
					)}
				</div>

				{showAlert && <Alert isOpen={showAlert} text="Todo berhasil dihapus" />}
			</div>
		</TemplateLayout>
	);
};

export default DetailPages;
