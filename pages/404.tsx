import { Meta } from 'app/seo/ui/Meta';
import { ReturnComponentType } from 'shared/types';
import { Heading } from 'shared/ui';

const Error404 = (): ReturnComponentType => {
    return (
        <Meta title="Page not found">
            <Heading title="404 - Page Not Found" />
        </Meta>
    );
};

export default Error404;
