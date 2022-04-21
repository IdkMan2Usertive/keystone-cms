/// <reference types="next" />
/// <reference types="next/image-types/global" />
/** @jsxRuntime classic */
/** @jsx jsx */
// noinspection ES6UnusedImports
import {jsx} from '@keystone-ui/core';
import {memo, Fragment} from 'react';
import whiteLogoSrc from '../../assets/logo-dark.png';
import Image from 'next/image';
import { Global } from '@emotion/react';

function Logo() {
  return (
    <Fragment>
      <div css={{position: 'relative'}}>
        <Image
          src={whiteLogoSrc}
          alt={'logo'}
          layout={'intrinsic'}
          height={whiteLogoSrc.height * 0.55}
          width={whiteLogoSrc.width * 0.55}
        />
      </div>

      <Global styles={{
        '& a': {
          color: '#7860D7'
        },
        '& header': {
          '& > h1': {
            color: '#574D80 !important'
          },
        },
        '& aside': {
          borderRight: '1px solid #e1e5e9',
          '& div[class$="AuthenticatedItemDialog"]': {
            '& > div[class$="AuthenticatedItemDialog"]': {
              color: '#2B224A'
            },
            '& button[aria-label="Links and signout"]': {
              backgroundColor: '#574D80',
              '& svg': {
                color: '#FBF9FF'
              },
            },
          },
          '& nav > ul > li': {
            '& > a': {
              backgroundColor: '#F8F5FF !important',
              color: '#574D80 !important'
            },
            '& > a:hover': {
              backgroundColor: '#E9E6F5 !important',
              transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)'
            },
            '& > a[aria-current=location]': {
              backgroundColor: '#DBD2FF !important',
              color: '#2B224A !important'
            },
          },
        },
        '& main': {
          '& div[class$="ListCard"]': {
            '& > a': {
              borderColor: '#7860D7 !important',
              '> *': {
                color: '#7860D7',
              },
              '&:hover > *': {
                color: '#574D80'
              },
            },
            '& > button:hover': {
              backgroundColor: '#7860D7'
            },
          },
        },
      }} />
    </Fragment>
  );
}

export default memo(Logo);
