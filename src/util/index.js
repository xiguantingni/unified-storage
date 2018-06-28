/**
 * Created by RCC on 2018/6/28.
 * 常用方法
 */

export const findInArray = (arr, item) => {
    for (let i = 0; i < arr.length; i ++) {
        if (item === arr[i]) {
            return i;
        }
    }
    return -1;
};
