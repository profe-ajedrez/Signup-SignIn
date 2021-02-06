import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export class ButtonLoader extends Component {
  state = {
    loading: false
  };

  static defaultProps = {
    className: 'btn btn-primary',
    style: {},
    content: '',
    onClick: (desLoader) => { desLoader(); },
    contentOnloading: 'Cargando',
    icon:"",
  };
  
  onClickHandler = () => {
    this.setState({ loading: true });

    this.props.onClick(
      () => this.setState({ loading: false })
    );    
  };

  contentOnIdle = () => {
    if (this.props.icon !== '') {
      return <span>
        <i
          className={`fa ${this.props.icon}`}
          style={{ marginRight: "5px" }}
        /> {this.props.content}
      </span>;
    }
    return <span>{ this.props.content } </span>;
  };

  contentOnLoading = () => {
    return <span>
      <i
        className="fa fa-refresh fa-spin"
        style={{ marginRight: "5px" }}
      /> {this.props.contentOnloading}
    </span>;
  };

  getContent = () => {
    if (this.state.loading) {
      return this.contentOnLoading();
    }
    return this.contentOnIdle();
  };

  render() {
    const { className, style } = this.props;
    const { loading } = this.state;
    console.log(this.props);

    return (      
        <button 
          className={ className } 
          onClick={ this.onClickHandler } 
          style={ style }
          disabled={ loading }>
          {this.getContent()}
        </button>
    );
  }
}


export class ButtonLoaderWithMessage extends Component {
  state = {
    loading: false
  };

  onClickHandler = (desLoader) => {
    this.setState({ loading: true });
    this.props.onClick(
      () => {
        desLoader();
        this.setState({ loading: false });
      }
    );
  };

  render = () => {
    const { className, style, content, msgOnLoading, msgOnIdle, classOnLoading, classOnIdle } = this.props;
    const { loading } = this.state;

    return <div>
      <ButtonLoader  
        className={ className } 
        onClick={ this.onClickHandler }
        content={ content }
        style={ style }
      />
      {loading && <p className={classOnLoading} >{msgOnLoading}</p>}
      {!loading && <p className={classOnIdle}>{msgOnIdle}</p>}
    </div>
  };
}
