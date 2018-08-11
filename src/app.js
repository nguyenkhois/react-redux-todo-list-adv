import React from 'react';

import { TodoX } from './components/todos.component';
import { DeletedTaskX } from './components/deleted-tasks.component';
import { Footer } from './footer';

export const App = () => (
    <div>
        <TodoX/>
        <DeletedTaskX/>
        <Footer/>
    </div>
);