/**
 * 打乱数组顺序
 * @param array
 * @returns {*}
 */

const arrayShuffle = array => {
    if (!Array.isArray(array)) {
        throw new Error('Argument must be an array');
    }
    let end = array.length;
    if (!end) {
        return array
    }
    while (end) {
        let start = Math.floor(Math.random() * end--);
        [array[start], array[end]] = [array[end], array[start]];
    }
    return array
};

export default arrayShuffle
