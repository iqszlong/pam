import RatioBox from '..';
import renderer from 'react-test-renderer';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";


// import { shallow, render, mount } from 'enzyme';


let container = null;
beforeEach(() => {
    // 创建一个 DOM 元素作为渲染目标
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // 退出时进行清理
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});



describe('React 渲染测试', () => {
    test('渲染默认值', () => {
        act(() => {
            render(<RatioBox />, container);
        });
        const wrapper = container.querySelectorAll('div')[0]; //获取最外层div
        const cssName = wrapper.attributes[0];  //获取第一个属性 className
        const styleName = wrapper.attributes[1];//获取第二个属性style
        
        expect(cssName.value).toMatch("layout");//验证 className 的值
        expect(styleName.value).toMatch("56.25%");//验证计算后的 style 的值
    });
});



// describe('属性测试', () => {
//     test('className', () => {
//         const wrapper = shallow(<RatioBox className="test_css" width="10" height="5" />);
//         // console.log(wrapper.debug());
//         const outerLayer = wrapper.find('.layout');
//         // console.log(outerLayer.debug());
//         expect(outerLayer.prop('className')).toMatch('test_css');
//         expect(outerLayer.prop('style')).toEqual({ paddingTop: "50%" });
//     });
// });

