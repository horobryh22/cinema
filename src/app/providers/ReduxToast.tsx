import ReduxToastr from 'react-redux-toastr';

import { ReturnComponentType } from 'shared/types';

export const ReduxToast = (): ReturnComponentType => {
    return (
        <ReduxToastr
            newestOnTop={false}
            preventDuplicates
            progressBar
            closeOnToastrClick
            timeOut={4000}
            transitionIn="fadeIn"
            transitionOut="fadeOut"
        />
    );
};
