import { withInstall } from '@td/adapter-utils';
import type { TdCheckboxGroupProps, TdCheckboxProps } from '@td/intel/components/checkbox/type';
import _CheckboxGroup from './group';
import _Checkbox from './checkbox';

import './style';

export type CheckboxProps = TdCheckboxProps;
export type CheckboxGroupProps = TdCheckboxGroupProps;
export * from '@td/intel/components/checkbox/type';

export const Checkbox = withInstall(_Checkbox);

export const CheckboxGroup = withInstall(_CheckboxGroup);

export default Checkbox;
