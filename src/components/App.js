import React from 'react'
import TodayRecord from './api/TodayRecord';
import SettingRecord from './api/SettingRecord';
import Signup from './auth/Signup';
import Login from './auth/Login';

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
                    <Route path="/signup" component={Signup} />\
                    <Route path="/login" component={Login} />
                </Switch>
            </div>

 
        </div>
    )
}

export default App;