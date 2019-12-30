import React from 'react'
import TodayRecord from './Skill/TodayRecord';
import SettingRecord from './Skill/SettingRecord';

import TopNavbar from './TopNavbar';
import { Route, Switch} from 'react-router-dom';


const App = () => {
    return (
        <div>
            <TopNavbar />
            <div className="todo-list">
                <Switch>
                    <Route exact path="/" component={TodayRecord} />
                    <Route path="/setting/record" component={SettingRecord} />
                </Switch>
            </div>

 
        </div>
    )
}

export default App;