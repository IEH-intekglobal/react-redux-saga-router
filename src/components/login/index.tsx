import {connect } from 'react-redux';
import { Login } from "./login.component";
import { loginAction } from '../../store/actions';

const mapDispatchToProps = {
    onLogin: loginAction
};

export default connect(null, mapDispatchToProps)(Login);