import { createStore } from "redux";
import { bookmarkReducer } from "./bookmarkActions";

// 리덕스 스토어 생성
const store = createStore(bookmarkReducer);

export default store;