import type { ComponentClass, FunctionComponent } from 'react';

import { ReactComponent as MessageIcon } from './MessageIcon.svg';
import { ReactComponent as MemberIcon } from './MemberIcon.svg';
import { ReactComponent as ExitIcon } from './ExitIcon.svg';

type IStringKey = Record<string, any>;
interface IIconIndex extends IStringKey {
  MessageIcon: string | FunctionComponent<any> | ComponentClass<any, any>;
  MemberIcon: string | FunctionComponent<any> | ComponentClass<any, any>;
  ExitIcon: string | FunctionComponent<any> | ComponentClass<any, any>;
}

const Icon: IIconIndex = {
  MessageIcon,
  MemberIcon,
  ExitIcon,
};

export default Icon;
