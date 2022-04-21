import {BaseListTypeInfo} from '@keystone-6/core/dist/declarations/src/types/type-info';

export type FilterOutput<ListTypeInfo extends BaseListTypeInfo> = boolean | ListTypeInfo['inputs']['where'];
