const Enzyme = require('enzyme');
const { shallow, render, mount } = Enzyme;
const Adapter = require('enzyme-adapter-react-16');

const { Response, Request, Headers, fetch } = require('whatwg-fetch');

global.Response = Response;
global.Request = Request;
global.Headers = Headers;
global.fetch = fetch;

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;