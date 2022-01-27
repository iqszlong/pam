import { Component } from 'react';
import { Image, Menu, Button, Tooltip, message } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Style from './index.css';
import RatioBox from '../components/RatioBox';

const host = '//localhost:3004';

function PhotoItems(props) {
  const data = props.data || [];
  const listItems = data.map((item, index) => (
    <RatioBox className={Style.item} key={index} width="1" height="1">
      <Image
        width="100%"
        height="100%"
        src={item.min}
        alt={item.id}
        preview={{
          src: item.path,
        }}
        placeholder={<Image preview={false} src={item.minimal} width="100%" height="100%" />}
      />
      <div className={Style.ctrl}>
        <CopyToClipboard
          onCopy={() => message.success('复制成功')}
          text={item.path.includes('http') ? item.path : `http:${item.path}`}
        >
          <Tooltip title="复制完整路径" placement="bottom">
            <Button size="small">
              <CopyOutlined />
            </Button>
          </Tooltip>
        </CopyToClipboard>
      </div>
      {/* <img className={Style.img} src={item.min} alt={item.id} /> */}
    </RatioBox>
  ));
  return <Image.PreviewGroup>{listItems}</Image.PreviewGroup>;
}

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
      data: {}, //所有数据
      menu: [],
      list: [],
    };
  }

  componentDidMount() {
    //
    const menuReq = new Request(`${host}/menu`);
    fetch(menuReq)
      .then(res => res.json())
      .then(data => {
        //获取数据
        // console.info(data);
        const frist = data[0];
        const key = frist.prop;
        const os_name = frist.os_name;
        this.setState({
          menu: data,
          current: key,
        });
        this.getData(os_name, key);
      })
      .catch(error => {
        console.error(`${menuReq.url}请求错误`, error);
      });
  }

  //导航点击事件
  handleClick = e => {
    // console.log('click ', e);
    const key = e.key;
    const menuItem = this.state.menu.filter(el => `${el.prop}` === key);
    const space_name = menuItem[0]['os_name'];
    // console.log(space_name);
    if (this.state.current !== key) {
      this.getData(space_name, key);
      // this.setState({ current: e.key });
    }
  };

  //获取数据
  // space_name 空间名
  // key 目录属性名 dir+cag
  getData(space_name, key) {
    // this.setState({
    //   list:[]//先清空数据
    // })
    if (this.state.data.hasOwnProperty(key)) {
      this.setState({
        list: this.state.data[`${key}`],
        current: key,
      });
      return;
    }
    const apiReq = new Request(`${host}/${space_name}`);
    fetch(apiReq)
      .then(res => res.json())
      .then(data => {
        //获取数据
        // console.info(data);
        this.setState({
          data: data,
          list: data[`${key}`],
          current: key,
        });
      })
      .catch(error => {
        console.error(`${apiReq.url}请求错误`, error);
      });
  }

  render() {
    return (
      <>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          {this.state.menu.map(item => (
            <Menu.Item key={`${item.prop}`}>
              <span>{item.title || ''}</span>
            </Menu.Item>
          ))}
        </Menu>

        <div className={Style.layout}>
          <PhotoItems data={this.state.list}></PhotoItems>
        </div>
      </>
    );
  }
}

export default index;
