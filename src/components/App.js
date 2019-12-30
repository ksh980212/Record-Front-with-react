import React from 'react'
import TodayRecord from './api/TodayRecord';
import SettingRecord from './api/SettingRecord';
import Signup from './auth/Signup';

import TopNavbar from './layout/TopNavbar';
import { Route, Switch} from 'react-router-dom';


const App = () => {
    return (
        <div>
            <TopNavbar />
            <div className="todo-list">
                <Switch>
                    <Route exact path="/" component={TodayRecord} />
                    <Route path="/setting/record" component={SettingRecord} />
                    <Route path="/signup" component={Signup} />
                </Switch>
            </div>

 
        </div>
    )
}

export default App;