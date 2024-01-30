import type { ComponentClass, FunctionComponent } from 'react';

import { ReactComponent as MessageIcon } from './MessageIcon.svg';

type IStringKey = Record<string, any>;
interface IIconIndex extends IStringKey {
  MessageIcon: string | FunctionComponent<any> | ComponentClass<any, any>;
}

const Icon: IIconIndex = {
  MessageIcon,
};

export default Icon;
