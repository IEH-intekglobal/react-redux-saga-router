import {connect } from 'react-redux';
import { Login } from "./login.component";
import { loginAction } from '../../store/actions';

const mapDispatchTo2Props = {
    onLogin: loginAction
};

export default connect(null, mapDispatchTo2Props)(Login);