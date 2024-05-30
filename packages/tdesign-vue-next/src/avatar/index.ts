import { withInstall } from '@td/adapter-vue';
import type { TdAvatarGroupProps, TdAvatarProps } from '@td/components/avatar/type';
import _Avatar from '@td/components-common/src/avatar/avatar';
import _AvatarGroup from '@td/components-common/src/avatar/group';

import '@td/components-common/src/avatar/style';

export * from '@td/components/avatar/type';

export type AvatarProps = TdAvatarProps;
export type AvatarGroupProps = TdAvatarGroupProps;

export const Avatar = withInstall(_Avatar);
export const AvatarGroup = withInstall(_AvatarGroup);

export default Avatar;
