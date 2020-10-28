/**
 * 去尾法
 * @param val
 * @param num
 * @returns {string|number}
 */

const filterDecimal = (val, num = 4) => {
    let res = 0;
    if (!val || val === '0') return res.toFixed(num);
    if (num === 0) {
        try {
            return parseInt(val);
        } catch (e) {
            return res;
        }
    }

    try {
        let v1 = parseFloat(val);
        let v2 = v1 + '';
        let arr = v2.split('.');
        if (arr.length === 1) {
            return v1.toFixed(num)
        }
        if (arr.length === 2) {
            let [a1, a2] = arr;
            a2 = a2.slice(0, num);
            while (a2.length < num) {
                a2 += '0';
            }
            return a1 + '.' + a2;
        }
        return res.toFixed(num);
    } catch (e) {
        return res.toFixed(num);
    }
};

export default filterDecimal
