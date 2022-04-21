// noinspection JSFileReferences
/// <reference types="next" />
/// <reference types="next/image-types/global" />

import {CustomNavigation} from './components/CustomNavigation';
import {Logo} from './components/Logo';
import './next-env';

export const components/*: AdminConfig['components']*/ = {
  Logo: Logo,
  Navigation: CustomNavigation,
};
