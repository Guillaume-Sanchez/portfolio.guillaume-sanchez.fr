import { connect } from 'react-redux';

import LoginForm from 'src/components/Orecipes/LoginForm';

import { changeField, logIn, logOut } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    // console.log(`Changement de valeur pour ${name} : ${value}`);
    dispatch(changeField(value, name));
  },
  handleLogin: () => {
    dispatch(logIn());
  },
  handleLogout: () => {
    dispatch(logOut());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
