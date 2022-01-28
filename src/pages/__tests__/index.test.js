import Index from '..';
import renderer from 'react-test-renderer';

import mockFn from './data';


describe('简单测试', () => {
  function getPost() {
    return fetch('https://v1.hitokoto.cn');
  }

  test('请求测试', async () => {
    try {
      const response = await getPost();
      const data = await response.json();
      expect(data.id).not.toBeNull();
    } catch (error) {
      expect(error.toString().indexof('404') > -1).toBeTruthy();
    }

  });


  test('请求测试2', () => {
    return getPost().then((response) => response.json()).then((data) => {
      expect(data.id).not.toBeNull();
    }).catch((e) => {
      expect(e.toString().indexof('404') > -1).toBeTruthy();
    });
  });


});


describe('模拟函数基本', () => {
  test('测试jest.fn()返回固定值', () => {
    let mockFn = jest.fn().mockReturnValue('default');
    // 断言mockFn执行后返回值为default
    expect(mockFn()).toBe('default');
  });

  test('测试jest.fn()返回Promise', async () => {
    let mockFn = jest.fn().mockResolvedValue('default');
    let result = await mockFn();
    // 断言mockFn通过await关键字执行后返回值为default
    expect(result).toBe('default');
    // 断言mockFn调用后返回的是Promise对象
    expect(Object.prototype.toString.call(mockFn())).toBe("[object Promise]");
  })
});


describe('简单模拟函数测试', () => {
  //原函数add
  function add(a, b) {
    return a + b;
  }

  //模拟函数
  const mockadd = jest.fn((a, b) => {
    return add(a, b)
  });

  test('模拟测试', () => {
    let result = mockadd(1, 2);
    expect(mockadd).toBeCalled(); //模拟函数已被调用
    expect(mockadd).toBeCalledTimes(1); //模拟函数被调用过1次
    expect(mockadd).toHaveBeenCalledWith(1, 2); //模拟函数的参数为1,2
    expect(result).toBe(3); //验证模拟函数结果
  });

});


describe('外部函数测试', () => {
  // console.log(mockFn);

  test('代理测试', async () => {
    expect.assertions(1);
    let mockReq = jest.fn();
    await mockFn.getData(mockReq);
    expect(mockReq).toBeCalled();
  });

});
