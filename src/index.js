import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Ap} from './Ap';
import Nap from './App_old_sl';
import Lap from './Att';
import * as serviceWorker from './serviceWorker';
import { withFormik } from 'formik';
import Yup ,{ object, mixed, string, boolean} from "yup"

import Chy from './Chy';
import Grid from './Ghy';

import Grap from './Grap'

const mPTC = ({ email, password }) => {
    return {
        email: email || 'nevermind',
        password: password || '123',
        checkbox: false,
        sel: "c"
    };
};

const handleSubmit = (values, formikBag) => {
    formikBag.props.val(values);
    formikBag.setSubmitting(false);
  };

const validationSchema = object().shape({
    password: object().required('password de na bhai!'),
    email: string().required('email de na bhai!'),
    
  });

//can be accessed via values props on validated form
const FormikApp = withFormik({
    mapPropsToValues: mPTC,
    validationSchema,
   // handleSubmit: (values) => { console.log('pakoda'); }
    handleSubmit
})(App);

ReactDOM.render(<FormikApp handleChange = {()=>{console.log("changinh");return false;}} 
email = "" />, document.getElementById('root'));

//ReactDOM.render(<Grid />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
