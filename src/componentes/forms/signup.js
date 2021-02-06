import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconInput } from "./inputs";
import validator from "validator";
import "./css/signup_form.css";
import { ButtonLoader } from "./buttons";
import RandomLottie from "../lotties/RandoLottie";

export class SignupForm extends Component {
  state = {
    valueMail: "",
    valuePassword: "",
    valueConfirmPassword: "",
  };

  static defaultProps = {
    containerClassName: "",
    formClassName: "",
    title: '',
  };

  handleChangeMail = (value) => {
    this.setState({ valueMail: value });
  };

  handleChangePass = (value) => {
    this.setState({ valuePassword: value });
  };

  handleChangeConfirm = (value) => {
    this.setState({ valueConfirmPassword: value });
  };

  getMailInput = () => {
    return (
      <IconInput
        label="Correo"
        icon="fa-user-circle-o"
        containerClass="mb-3"
        type="text"
        placeholder="usuario@domain.tld"
        name="userText"
        className="form-control"
        validateRule={(value) => {
          if (validator.isEmail(value)) {
            this.handleChangeMail(value);
            return true;
          }
          return false;
        }}
      />
    );
  };

  getPassInput = () => {
    return (
      <IconInput
        label="Password"
        icon="fa-lock"
        containerClass="mb-3"
        type="text"
        placeholder="Al menos 8 caracteres"
        name="passText"
        className="form-control"
        validateRule={(value) => {
          if (!validator.isEmpty(value) && value.length >= 8) {
            this.handleChangePass(value);
            return true;
          }
          return false;
        }}
      />
    );
  };

  getPassConfirm = () => {
    return (
      <IconInput
        label="Confirme Password"
        icon="fa-lock"
        containerClass="mb-3"
        type="text"
        placeholder="Confirme su password"
        name="passConfirmText"
        className="form-control"
        validateRule={(value) => {
          if (
            !validator.isEmpty(value) &&
            value.length >= 8 &&
            value === this.state.valuePassword
          ) {
            this.handleChangeConfirm(value);
            return true;
          }
          return false;
        }}
      />
    );
  };

  getLabel = () => {
    if (!!this.props.title) {
      return <h4 className="mb-5 p-1 border-bottom">{this.props.title}</h4>;
    }
    return null;
  };

  handleSubmit = (event) => { event.preventDefault(); };

  render = () => {
    const { containerClassName, formClassName } = this.props;

    return (
      <div>
        <div className={`vso-signupForm ${containerClassName}`}>          
          {this.getLabel()}
          <div className="p2">
            <RandomLottie />
          </div>
          <form className={formClassName} onSubmit={this.handleSubmit}>
            <div className="ps-2 mb-5">
              {this.getMailInput()}
              {this.getPassInput()}
              {this.getPassConfirm()}
            </div>

            <div className="mt-2 mb-2 pe-2 ps-2">
              <ButtonLoader
                className="btn btn-primary form-control"
                content="Registrarse"
                icon="fa-user-plus"
                contentOnloading="loading"
                onClick={(callback) => {
                  setTimeout(callback, 2000);
                }}
              />
            </div>

            <div className="mt-2 mb-2 pe-2 ps-2">
              <ButtonLoader
                className="btn form-control google"
                content="Acceder con Google"
                icon="fa-google"
                contentOnloading="loading"
                onClick={(callback) => {
                  setTimeout(callback, 2000);
                }}
              />
            </div>
          </form>
        </div>
      </div>
    );
  };
}
