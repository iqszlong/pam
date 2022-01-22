// import React from 'react';
import BasicLayout from '..';
import renderer from 'react-test-renderer';


describe('Layout: BasicLayout', () => {
  it('html节点嵌套测试', () => {
    const wrapper = renderer.create(<BasicLayout />);
    expect(wrapper.root.children.length).toBe(1);
    const outerLayer = wrapper.root.children[0];
    // expect(outerLayer.type).toBe(<React.Fragment/>);
    const andt_config = outerLayer.children[0];
    // expect(andt_config).toBe(<config-provider />);
    
  });
});
