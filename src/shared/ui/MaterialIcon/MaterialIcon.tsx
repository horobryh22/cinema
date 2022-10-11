import * as MaterialIcons from 'react-icons/md';

import { MaterialIconName, ReturnComponentType } from 'shared/types';

interface MaterialIconProps {
    name: MaterialIconName;
}

export const MaterialIcon = (props: MaterialIconProps): ReturnComponentType => {
    const { name } = props;

    const IconComponent = MaterialIcons[name];

    return <IconComponent /> || <MaterialIcons.MdDragIndicator />;
};
