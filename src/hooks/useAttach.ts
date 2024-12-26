import { computed } from 'vue';
import { useConfig } from './useConfig';
import type { AttachNode } from '../common';

const defaultAttach = 'body';
/**
 * useAttach
 * @param attach
 * @param name
 * @returns
 * props attach -> globalConfig.attach.component -> globalConfig.attach -> default = 'body'
 */
const useAttach = (name: string, attach: AttachNode) => {
  const { globalConfig } = useConfig();

  const attachVal = computed(
    () => attach || globalConfig.value.attach?.[name] || globalConfig.value.attach || defaultAttach,
  );

  return attachVal;
};

export default useAttach;
