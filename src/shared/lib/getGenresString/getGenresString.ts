export const getGenresString = (index: number, length: number, name: string): string => {
    return index + 1 === length ? name : name + ', ';
};
