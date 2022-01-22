import Index from '..';
import renderer from 'react-test-renderer';



describe('Page: index', () => {
  it('html节点嵌套测试', () => {
    const wrapper = renderer.create(<Index />);
    expect(wrapper.root.children.length).toBe(2);
    const outerLayer = wrapper.root.children[0];
    expect(outerLayer.children.length).toBe(1);
  });
});


describe('简单测试', () => {
  function hasError() {
    throw new Error('错误');
  }

  test('验证抛出错误', () => {
    expect(()=>hasError()).toThrow(); //函数是否抛出错误
    expect(()=>hasError()).toThrow('错误'); //函数是否抛出相同的错误提示
    expect(()=>hasError()).toThrow(/错/); // 错误提示是否匹配到 ‘错’
  });

});