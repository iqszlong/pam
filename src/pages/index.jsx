import { Component } from 'react';
import { Image,Menu } from 'antd';
import Style from './index.css';
import RatioBox from '../components/RatioBox';

function PhotoItems(props) {
  const data = props.data || [];
  const listItems = data.map((item, index) => (
    <RatioBox className={Style.item} key={index} width="1" height="1">
      <Image
      width='100%'
      height='100%'
      src={item.min}
      alt={item.id}
      preview={{
        src: item.path,
      }}
    />
      {/* <img className={Style.img} src={item.min} alt={item.id} /> */}
    </RatioBox>
  ));
  return <Image.PreviewGroup>{listItems}</Image.PreviewGroup>;
}



class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current:'RQ-star241',
      menu:[],
      list: [],
    };
  }

  componentDidMount() {
    //
    const menuReq = new Request('http://localhost:3000/menu');
    fetch(menuReq)
      .then(res => res.json())
      .then(data => {
        //获取数据
        console.info(data);
        this.setState({
          menu: data,
        });
      })
      .catch(error => {
        console.error(`${menuReq.url}请求错误`, error);
      });
    //
    const apiReq = new Request('http://localhost:3000/qiniu');
    fetch(apiReq)
      .then(res => res.json())
      .then(data => {
        //获取数据
        // console.info(data);
        this.setState({
          list: data['RQ-star241'],
        });
      })
      .catch(error => {
        console.error(`${apiReq.url}请求错误`, error);
      });
  }

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };
  

  render() {
    return (
      <>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          {
            this.state.menu.map((item)=>
              <Menu.Item key={`${item.dir}${item.cag}`}>
              {item.dir}{item.cag}
            </Menu.Item>
            ) 
           
          }
        </Menu>
        <div className={Style.layout}>
          <PhotoItems data={this.state.list}></PhotoItems>
        </div>
      </>
    );
  }
}

export default index;
