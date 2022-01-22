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

  function sleep(delay) {
    var start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {
      // 使用  continue 实现；
      continue;
    }
  }

  function main(fn) {
    sleep(1000);
    console.log('等待结束');
    fn('getData');
  }

  test('异步测试', (done) => {
    function get(res) {
      try {
        expect(res).toBe('getData');
        done();
      } catch (error) {
        done(error);
      }
    }


    main(get);
  });


});