import {
  BaseListTypeInfo,
  CommonFieldConfig,
  FieldData,
  fieldType,
  FieldTypeFunc,
  filters,
  orderDirectionEnum,
} from '@keystone-6/core/types';
import {graphql} from '@keystone-6/core';

export type MyIntFieldConfig<ListTypeInfo extends BaseListTypeInfo> =
  CommonFieldConfig<ListTypeInfo> & {
  isIndexed?: boolean | 'unique';
};

export const myInt = <ListTypeInfo extends BaseListTypeInfo>(options: MyIntFieldConfig<ListTypeInfo> = {}): FieldTypeFunc<ListTypeInfo> =>
  (meta: FieldData) => {
    const {isIndexed, ...config} = options;

    return fieldType({
      kind: 'scalar',
      mode: 'optional',
      scalar: 'Int',
      index: isIndexed === true ? 'index' : isIndexed || undefined,
    })({
      ...config,
      input: {
        where: {arg: graphql.arg({type: filters[meta.provider].Int.optional}), resolve: filters.resolveCommon},
        create: {arg: graphql.arg({type: graphql.Int})},
        update: {arg: graphql.arg({type: graphql.Int})},
        orderBy: {arg: graphql.arg({type: orderDirectionEnum})},
      },
      output: graphql.field({type: graphql.Int}),
      views: require.resolve('./admin/fields/MyInt/index.ts'),
    });
  };
