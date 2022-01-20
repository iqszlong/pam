import React from 'react';
import Style from './style.css';

class RatioBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        ratio:(9/16)*100,
    };
  }

  static getDerivedStateFromProps(props, state) {
      const data = state;
    //渲染之前修改state值
    if(props.width !== undefined && props.height !== undefined){
        data.ratio = (props.height/props.width)*100
        return data;
    }
    // console.info(props, state);
    return null;
  }

  shouldComponentUpdate(newProps, newState) {
    // console.log('shouldComponentUpdate');
    //提高性能 默认返回true this.state !== newState
    
    return this.props !== newProps;
  }


  render() {
    return (
      <>
        <div className={`${Style.layout} ${this.props.className || ''}`} style={{paddingTop:`${this.state.ratio}%`}}>
          <div className={Style.inner}>{this.props.children}</div>
        </div>
      </>
    );
  }

  componentDidMount() {
    //挂载完成之后，请求数据更新state
    // console.log(this.props);

  }
}

export default RatioBox;
