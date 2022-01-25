import RatioBox from '..';
import renderer from 'react-test-renderer';

import { shallow ,render,mount} from 'enzyme';



describe('html测试', () => {
    it('标签测试', () => {
        const wrapper = renderer.create(<RatioBox/>);
        expect(wrapper.root.children.length).toBe(1);
        const outerLayer = wrapper.root.children[0];
        expect(outerLayer.type).toBe('div');
    });
    test('渲染测试', () => {
        const wrapper = mount(<RatioBox></RatioBox>);
        expect(wrapper).toMatchSnapshot();
    });
});

describe('属性测试', () => {
    test('className', () => {
        const wrapper = shallow(<RatioBox className="test_css" width="10" height="5" />);
        // console.log(wrapper.debug());
        const outerLayer = wrapper.find('.layout');
        // console.log(outerLayer.debug());
        expect(outerLayer.prop('className')).toMatch('test_css');
        expect(outerLayer.prop('style')).toEqual({paddingTop:"50%"});
    });
});