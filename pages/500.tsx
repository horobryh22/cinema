import { Meta } from 'app/seo/ui/Meta';
import { ReturnComponentType } from 'shared/types';
import { Heading } from 'shared/ui';

const Error500 = (): ReturnComponentType => {
    return (
        <Meta title="Page not found">
            <Heading title="500 - Server-side error occurred" />
        </Meta>
    );
};

export default Error500;
