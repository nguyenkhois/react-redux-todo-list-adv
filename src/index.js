import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './styles.css';
import { todosReducer } from './reducers/todos.reducer';
import { App } from './app';

/**
 * STEP 0 - STRUCTURES
 * 1/ The main STATE object that is an object array
 * let state = {
 *      todos: [{task1}, {task2}, {task3}, {taskn}],
 *      deleted: [{task4}, {taskm}]
 * };
 * 
 * 2/ The ACTION object must has @type property
 * let action = {
 *      type: 'YOUR_TYPE',
 *      task: { id: <task_id>,
 *              description: <task_description>,
 *              isDone: <task_status:true/false> }
 * }
 * 
 * 3/ A task is an object that is an action object property
 * let task = { id: <task_id>,
 *              description: <task_description>,
 *              isDone: <task_status:true/false> }
 */


/**
 * STEP 5 - Creating store
 * View more about createStore() here:
 * https://redux.js.org/api/createstore
 * Tip! View again step 0 to know about @state structure
 */

 // Initial state (Redux state)
const preloadedState = {
    todos: [],
    deleted: []
}; 

// Creating store
const store = createStore(todosReducer, 
                            preloadedState,
                            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/**
 * STEP 6 - Rendering
 */
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
