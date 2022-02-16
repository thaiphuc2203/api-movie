// import React, { Component } from 'react';

// export default class Login extends Component {
//   render() {
//     return <div>Login</div>;
//   }
// }
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/Auth/userSlice';
import LoginForm from '../components/form-control/LoginForm/index';


Login.propTypes = {
    closeDialog: PropTypes.func
};

function Login(props: any ) {

    const dispatch = useDispatch();
    // hiển thị thông báo

    const { enqueueSnackbar } = useSnackbar();

    const showNoti = (message: any , variant: any) => {
        enqueueSnackbar(message, { variant: variant })
    }

    const handleSubmit = async (values: any) => {
        try {
            const action = login(values)
            const resultAction: any = await dispatch(action);
            const user = unwrapResult(resultAction);

            //close Dia log
            const {closeDialog} = props;
            if(closeDialog){
                closeDialog()
            }
            //do something here when register success
            console.log(user)
        } catch (error: any) {
            showNoti(error.message, "error");
            console.log("error: ", error)
        }
    }

    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;
