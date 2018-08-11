/**
 * STEP 1 - Creating reducer
 * Input: @state, @action 
 * Output: a new @state
 * Tip! View again step 0 to know about @state and @action structures
 */
export const todosReducer = (state, action) => {
    // state === undefined ? state = { todos: [], deleted: [] } : null;

    switch (action.type) {
        case 'ADD_TASK':
            return ({
                ...state,
                todos: state.todos.concat(action.task)
            });
        case 'REMOVE_TASK':
            return ({
                ...state,
                todos: state.todos.filter((item) => item.id !== action.task.id),
                deleted: state.deleted.concat(action.task)
            });
        case 'CHECKED':
            const itemIndex = state.todos.findIndex((item) => item.id === action.task.id);
            const newTodos = state.todos.map((item, index) => index === itemIndex ? { ...item, isDone: !item.isDone } : item);
            return ({
                ...state,
                todos: newTodos
            });
        case 'REMOVE_COMPLETED':
            const completedTasks = state.todos.filter((item) => item.isDone);
            return ({
                ...state,
                todos: state.todos.filter((item) => !item.isDone),
                deleted: state.deleted.concat(completedTasks)
            });
        case 'REMOVE_DELETED':
            return ({ ...state, deleted: [] });
        default:
            return state;
    }
};
