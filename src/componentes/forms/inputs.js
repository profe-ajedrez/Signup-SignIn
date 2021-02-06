import React, { Component } from 'react'
import { v4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

export class IconInput extends Component {

  state = {
    color: this.props.idleColor,
    value: this.props.initialValue
  };

  static defaultProps = {
    icon: '', 
    containerClass : 'input-container', 
    type: 'text', 
    placeholder: '', 
    name: 'name-' + v4(),
    iconStyle: {},
    className: 'form-control',
    id: 'id-' + v4(),
    idleColor: "#7f8c8d",
    successColor: "#2ecc71",
    errorColor: "#e74c3c",
    initialValue: "",
    validateRule: () => { return true; },
    onChange: (event) => { return event.target.value },
    onError: () => {},
    onSuccess: () => {},
  };

  handleChange = (event) => {
    const value = this.props.onChange(event);
    this.setState({ value: value });    
  };

  onBlur = () => {
    if (this.props.validateRule(this.state.value)) {
      this.setState({ color: this.props.successColor });
      this.props.onSuccess();
      return;
    }
    this.setState({ color: this.props.errorColor });
    this.props.onError();
  };
  
  getIcon = () => {
    if (!!this.props.icon) {
      const iconStyle = {
        paddingTop: "10px",
        marginRight: "-1.5em",
        zIndex:"999",
        position: "relative",
        color: this.state.color,
        ...this.props.iconStyle 
      };
      return <i className={`fa ${this.props.icon} icon`} style={iconStyle}></i>
    }
    return null;
  };

  getLabel = () => {
    if (!!this.props.label) {
      return <label 
        htmlFor={ this.props.id } 
        className="form-label">{ this.props.label }</label>
    }
    return null;
  };

  render = () => {
    const { containerClass, className, icon, type, placeholder, name } = this.props;
    const style = {
      paddingLeft: "1.75em",
      display: "inline-block",
      borderColor: this.state.color,
      ...this.props.style
    };
    
    return <div className={ `ps-3 ${containerClass}` }>
      <div>
        { this.getLabel() }
      </div> 
      <div>     
        { this.getIcon() }
        <input 
          className={className} 
          style={ style }
          type= { type } 
          onChange={ this.handleChange }
          onBlur={ this.onBlur }
          placeholder= { placeholder }
          value={ this.state.value }
          name= { name } />
      </div>  
    </div>
  };  
}
