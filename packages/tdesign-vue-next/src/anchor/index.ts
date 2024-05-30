import { withInstall } from '@td/adapter-vue';
import type { TdAnchorItemProps, TdAnchorProps, TdAnchorTargetProps } from '@td/components/anchor/type';
import _Anchor from '@td/components-common/src/anchor/anchor';
import _AnchorItem from '@td/components-common/src/anchor/anchor-item';
import _AnchorTarget from '@td/components-common/src/anchor/anchor-target';

import '@td/components-common/src/anchor/style';

export * from '@td/components/anchor/type';
export type AnchorProps = TdAnchorProps;
export type AnchorTargetProps = TdAnchorTargetProps;
export type AnchorItemProps = TdAnchorItemProps;

export const Anchor = withInstall(_Anchor);
export const AnchorItem = withInstall(_AnchorItem);
export const AnchorTarget = withInstall(_AnchorTarget);

export default Anchor;
