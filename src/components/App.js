import React, {useState}from 'react'
import TodayRecord from './api/TodayRecord';
import SettingRecord from './api/SettingRecord';
import Signup from './auth/Signup';
import Login from './auth/Login';

import Cookies from 'universal-cookie';
import TopNavbar from './layout/TopNavbar';
import { Route, Switch} from 'react-router-dom';


const App = () => {

    const cookies = new Cookies();
    const [isLogined, setIsLogined] = useState(cookies.get("id"));

    const changeLoginState = () =>{
        setIsLogined(true);
    }

    const changeLogoutState = () => {
        setIsLogined(false);
    }
    
    return (
        <div>
            <TopNavbar isLogined = {isLogined} changeLogoutState = {changeLogoutState}/>
            <div className="todo-list">
                <Switch>
                    <Route exact path="/" component={TodayRecord} />
                    <Route path="/setting/record" component={SettingRecord} />
                    <Route path="/signup" component={Signup} />\
                    <Route path="/login" component={() =><Login changeLoginState= {changeLoginState} />} />
                </Switch>
            </div>

 
        </div>
    )
}

export default App;