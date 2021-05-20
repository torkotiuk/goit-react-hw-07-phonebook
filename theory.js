// theory from hw-6 async redux, how to write middleware // next - method for
// sending to the next middlware (from fn programming: currying ) // const
// const myMiddleware = store => next => action => {
//   console.log('My middleWare...........', action);
//   next(action);
// };

// --- action ---
// const asyncActionCreator = args => dispatch => {
// possible http gets, & from result will dispatch actions
// f.e.
// fetch()
//   .then(x => dispatch(actionMy(x)))
//   .catch(y => dispatch(fn(y))); ---- here sending data
// };
// f.e in component dispatch(asyncActionCreator(5)) /// args = 5 >>> dispatch => {}
