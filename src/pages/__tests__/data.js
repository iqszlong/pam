const mockFn = {
    getData: async function (fn) {
        const res = await this.getPost();
        const data = await res.json();
        return fn(data);
    },
    getPost: function () {
        return fetch('https://v1.hitokoto.cn');
    },
}

export default mockFn;