const setItem = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {}
};

const getItem = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key)) || {};
    } catch (e) {
        return {};
    }
};

export default { setItem, getItem };
