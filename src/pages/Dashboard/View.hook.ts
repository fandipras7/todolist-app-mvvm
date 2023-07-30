import { useEffect, useState } from "react";
import type { Todos } from "./View.types";

const useView = () => {
	const [todos, setTodos] = useState<Todos>([]);
	const [loading, setLoading] = useState(false);
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [showAlert, setShowAlert] = useState(false);

	const getTodos = async () => {
		try {
			setLoading(true);
			const fetchData = await fetch(
				"http://localhost:4000/v1/activity-groups?email=fandi@gmail.com"
			);

			const res = await fetchData.json();				
			const data = res.data.data;
			setTodos(data);
			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getTodos();
	}, []);

	const handleAddTodos = async () => {
		try {
			const postData = await fetch(
				"http://localhost:4000/v1/activity-groups",
				{
					method: "POST",
					headers: {
						"Content-type": "application/json; charset=UTF-8",
					},
					body: JSON.stringify({
						title: "New Activity",
						email: "fandi@gmail.com",
					}),
				}
			);

			const status = postData.status;
			if(status) getTodos()
			return
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		const handleShowAlert = () => {
			if (showAlert) {
				setTimeout(() => {
					setShowAlert(false);
				}, 3000);
			}
		};

		handleShowAlert();
	}, [showAlert]);

	return {
		todos,
		setTodos,
		handleAddTodos,
		loading,
		isOpenModal,
		setIsOpenModal,
		showAlert,
		setShowAlert,
	};
};

export default useView;
