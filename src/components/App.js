import React from 'react'
import Main from './Main';
import TopNavbar from './TopNavbar';

const App = () => {
    return (
        <div>
            <TopNavbar />
            <div className="todo-list">
                <Main />
            </div>
        </div>
    )
}

export default App;