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