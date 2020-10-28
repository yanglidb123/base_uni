/**
 * 获取指定范围内的随机数
 * @param min 必须为 Number 类型
 * @param max 必须为 Number 类型
 * @returns {number}
 */

const getRandom = (min = 0, max = 100) => {
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Argument(s) is illegal !')
    }
    if (min > max) {
        [min, max] = [max, min]
    }
    return Math.floor(Math.random() * (max - min + 1) + min)
};

export default getRandom
