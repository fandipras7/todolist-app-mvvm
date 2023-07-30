import { css } from "@emotion/css";
import IconSort from "../../assets/icon-sort.svg";
// import IconSort from "../../assets/icon-sort.svg";
import IconCheckList from "../../assets/icon-checklist.svg";
import IconPencilEdit from "../../assets/icon-pencil.svg";

export const detail = css`
	width: 100%;
	positon: relative;
	margin: 0 auto;
	padding-top: 43px;
	@media (min-width: 1400px) {
		max-width: 1320px;
	}

	@media (min-width: 1024px) {
		max-width: 1000px;
	}
`;

export const detailHeader = css`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 55px;
`;

export const addButton = css`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 159px;
	border: none;
	font-weight: 600;
	font-size: 18px;
	background-color: #16abf8;
	border-radius: 45px;
	line-height: 27px;
	color: #ffffff;
	cursor: pointer;
`;

export const iconBackWrapper = css`
	margin-right: 36px;
	cursor: pointer;
`;

export const btnEditActivityTitle = css`
	display: inline-block;
	width: 24px;
	height: 24px;
	background: url(${IconPencilEdit});
	background-repeat: no-repeat;
	background-size: 100%;
	cursor: pointer;
`;

export const iconPlus = css`
	width: 14px;
	height: 14px;
	margin-right: 11px;
`;

export const activityTitle = css`
	font-weight: 700;
	line-height: 54px;
	font-size: 36px;
	margin-right: 28px;
`;

export const editTodoTitleInput = css`
	font-size: 36px;
	min-width: 300px;
	border: none;
	border-bottom: 1px solid rgb(136, 136, 136);
	background: transparent;
	margin-right: 28px;

	&:focus {
		outline: none;
	}
`;

export const leftSideHeader = css`
	display: flex;
	flex-direction: row;
	align-items: baseline;
`;

export const rightSideHeader = css`
	display: flex;
	flex-direction: row;
`;

export const sortButtonWrapper = css`
	display: flex;
	position: relative;
`;

export const btnSortList = css`
	border: 1px solid #e5e5e5;
	border-radius: 50%;
	width: 54px;
	height: 54px;
	background: transparent;
	margin-right: 18px;
	cursor: pointer;
`;

export const iconSort = css`
	width: 18px;
	height: 14px;
	background-image: url(${IconSort});
	background-repeat: no-repeat;
	background-size: 100%;
	display: inline-block;
	vertical-align: middle;
`;

export const sortOptionListsContainer = css`
	display: block;
	width: 235px;
	border: 1px solid #e5e5e5;
	border-radius: 6px;
	background: #ffffff;
	position: absolute;
	top: 65px;
	left: 0;
	list-style: none;
	box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
`;

export const sortOptionLists = css`
	display: flex;
	flex-direction: row;
	align-items: center;
	border-bottom: 1px solid #e5e5e5;
	padding: 21px 24px;
	cursor: pointer;
`;

export const iconOptions = (icon: string) => css`
	display: block;
	width: 15px;
	height: 10px;
	background: url(${icon});
	background-size: 100%;
	background-repeat: no-repeat;
	vertical-align: middle;
	margin-right: 18px;
`;

export const sortOptionTitle = css`
	font-size: 16px;
	line-height: 24px;
	color: #4a4a4a;
	margin: 0;
`;

export const container = css`
	width: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 10px;
`;

export const generateColor = (type: string) => {
	switch (type) {
		case "very-high":
			return "#ED4C5C";

		case "high":
			return "#FFCE31";

		case "normal":
			return "#00A790";

		case "low":
			return "#43C4E3";

		case "very-low":
			return "#B01AFF";
		default:
			return;
	}
};

export const iconDot = (type: string) => css`
	display: block;
	width: 9px;
	height: 9px;
	margin-right: 16px;
	background-color: ${generateColor(type)};
	border-radius: 50%;
`;

export const iconCheck = css`
	display: inline-block;
	position: absolute;
	width: 11px;
	height: 8px;
	right: 25px;
	background: url(${IconCheckList});
	background-size: 100%;
	background-repeat: no-repeat;
`;
