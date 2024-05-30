import { withInstall } from '@td/adapter-vue';
import type { Data, TdFormItemProps, TdFormProps } from '@td/components/form/type';
import _Form from '@td/components-common/src/form/form';
import _FormItem from '@td/components-common/src/form/form-item';

import '@td/components-common/src/form/style';

export * from '@td/components/form/type';

// vue23:todo 临时加一个
// export * from '@td/components-common/src/form/form-model';

export type FormProps<FormData extends Data = Data> = TdFormProps<FormData>;
export type FormItemProps = TdFormItemProps;

export const Form = withInstall(_Form);
export const FormItem = withInstall(_FormItem);
export default Form;
