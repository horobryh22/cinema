import { IMenuItem } from '../../model/types';

import { getGenreUrl } from 'api/url';
import { useFetchGenresQuery } from 'services/genre.service';

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
