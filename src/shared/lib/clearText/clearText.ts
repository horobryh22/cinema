import { Nullable } from '../../types';

export const clearText = (string: string, limit: Nullable<number>): string => {
    let result = string
        .replace(/<[^>]+>/g, '')
        .replace(/&[^;]+./g, '')
        .replace(
            /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
            '',
        );

    if (limit) result = result.slice(0, limit) + '...';

    return result;
};
