export const randomizeNumbersString = (str) => {
    let newStr = str.replace(/[0-9]/g, `${Math.floor(Math.random() * 10)}`);

    return newStr;
};