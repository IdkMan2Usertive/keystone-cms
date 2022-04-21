/** @jsxRuntime classic */
/** @jsx jsx */
// noinspection ES6UnusedImports
import {jsx} from '@keystone-ui/core';
import {memo} from 'react';
import type {NavigationProps} from '@keystone-6/core/admin-ui/components';
import {ListNavItems, NavigationContainer, NavItem} from '@keystone-6/core/admin-ui/components';

function CustomNavigation(props: NavigationProps) {
  const {lists, authenticatedItem} = props;

  return (
    <NavigationContainer authenticatedItem={authenticatedItem}>
      <NavItem href="/">Dashboard</NavItem>
      <ListNavItems lists={lists}/>
      <NavItem href="/custom-page">Custom Page</NavItem>
    </NavigationContainer>
  );
}

export default memo(CustomNavigation);
