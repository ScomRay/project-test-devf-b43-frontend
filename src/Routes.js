import React, {Fragment} from 'react'
import { Route, Redirect } from 'react-router-dom'
import UserView from './views/UserView'
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView'

function Routes () {
    return(
        <Fragment>
            <Redirect from='/' to='register' />
            <Route exact path='/users' component={UserView} />
            <Route exact path='/register' component={RegisterView} />
            <Route exact path='/login' component={LoginView} />
        </Fragment>
    )
}

export default Routes