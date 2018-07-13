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

export const getBrowser = () => {
    let Sys = {};
    const ua = navigator.userAgent.toLowerCase();
    let s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] : (s = ua.match(/msie ([\d\.]+)/)) ? Sys.ie = s[1] : (s = ua.match(/edge\/([\d\.]+)/)) ? Sys.edge = s[1] : (s = ua.match(/firefox\/([\d\.]+)/)) ? Sys.firefox = s[1] : (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? Sys.opera = s[1] : (s = ua.match(/chrome\/([\d\.]+)/)) ? Sys.chrome = s[1] : (s = ua.match(/version\/([\d\.]+).*safari/)) ? Sys.safari = s[1] : 0;
    // 根据关系进行判断
    if (Sys.ie) return ('IE:' + Sys.ie);
    if (Sys.edge) return ('EDGE:' + Sys.edge);
    if (Sys.firefox) return ('Firefox:' + Sys.firefox);
    if (Sys.chrome) return ('Chrome:' + Sys.chrome);
    if (Sys.opera) return ('Opera:' + Sys.opera);
    if (Sys.safari) return ('Safari:' + Sys.safari);
    return '';
};

// 常用正则
export const regex = {
    isName: /^[\u4E00-\u9FA5A-Za-z0-9_]{2,20}$/, // 2~20字符，支持英文大小写、数字、中文以及下划线
    isPassword: /^[\S]{6,20}$/, // 6-20字符，必须包含英文大小写、数字；另外支持符号
    isTel: /^(?:(?:0\d{2,3}[- ]?[1-9]\d{6,7})|(?:[48]00[- ]?[1-9]\d{6}))$/,
    isMobile: /^1[3-9]\d{9}$/,
    isEmail: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
    isIdentifyCode: /^\d{6}$/,
    isPositiveInteger: /^\+?[1-9][0-9]*$/,
    isNumber: /^\d+$/,
    isIP: /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/,
    isPort: /^([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-5]{2}[0-3][0-5])$/,
    isCidr: /^((0{0,2}\d|0?\d{2}|1\d{2}|2[0-4]\d|25[0-5])\.){3}(0{0,2}\d|0?\d{2}|1\d{2}|2[0-4]\d|25[0-5])\/(\d|[12][0-9]|3[0-2])$/, // 0.0.0.0/32
    isCidr2: /^((0{0,2}\d|0?\d{2}|1\d{2}|2[0-4]\d|25[0-5])\.){3}(0{0,2}\d|0?\d{2}|1\d{2}|2[0-4]\d|25[0-5])\/(\d|[12][0-9])$/, // 0.0.0.0/29 子网掩码最大29
    isMask: /^(254|252|248|240|224|192|128|0)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(254|252|248|240|224|192|128|0)$/,
    isWeight: /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|[1-9])$/, // 1~255,
    isUrl: /((http|https):\/\/([\w\-]+\.)+[\w\-]+(\/[\w\u4e00-\u9fa5\-\.\/?\@\%\!\&=\+\~\:\#\;\,]*)?)/ig
};