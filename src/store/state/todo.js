// import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";


// const todoAdapter = createEntityAdapter();

// const todoSlice = createSlice({
//   name: "todo",
//   initialState: todoAdapter.getInitialState({
//     status: "idle",
//   }),
//   reducers: {
//     getTodoRequest(state) {
//       state.status = "loading";
//     },
//     getTodoSuccess(state, { payload }) {
//       const { todo } = payload;
//       state.status = "success";
//       todoAdapter.addMany(state, todo);
//     },
//     getTodoFail(state) {
//       state.status = "fail";
//     },
//     toggleCompleteTodo(state, { payload }) {
//       const { id, completed } = payload;
//       todoAdapter.updateOne(state, {
//         id,
//         changes: {
//           completed,
//         },
//       });
//     },
//     deleteTodo(state, { payload }) {
//       const { id } = payload;
//       todoAdapter.removeOne(state, id);
//     },
//     addTodo(state, { payload }) {
//       const { title } = payload;
//       todoAdapter.addOne(state, {
//         id: generateId(),
//         title
//       });
//     }
//   },
// });

// const rootSelector = (state) => state.todo;

// export const { selectAll: allTodoSelector } =
//   todoAdapter.getSelectors(rootSelector);

// export const {
//   getTodoRequest,
//   getTodoSuccess,
//   toggleCompleteTodo,
//   deleteTodo,
//   addTodo
// } = todoSlice.actions;

// export default todoSlice.reducer;
