import { IMenuItem } from '../../../../Menu/model/types';
import { useFetchGenresQuery } from '../../../api';

import { getGenreUrl } from 'shared/lib';

interface IUsePopularGenresResult {
    isLoading: boolean;
    genres: IMenuItem[];
}

export const usePopularGenres = (): IUsePopularGenresResult => {
    const { isLoading, genres } = useFetchGenresQuery(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            genres:
                data
                    ?.map(genre => {
                        const { icon, name, slug } = genre;

                        return {
                            icon,
                            link: getGenreUrl(slug),
                            title: name,
                        } as IMenuItem;
                    })
                    .splice(0, 4) ?? [],
            isLoading,
        }),
    });

    return { isLoading, genres };
};
