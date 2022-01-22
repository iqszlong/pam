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
