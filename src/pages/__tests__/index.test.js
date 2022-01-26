import Index from '..';
import renderer from 'react-test-renderer';




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