export const getRandomItems = (array: Array<any>, count: number): Array<any> => {
    const shuffledArray = array?.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
};