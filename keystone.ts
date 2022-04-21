import {config} from '@keystone-6/core';
import {withAuth} from './auth';
import {session} from './session';
import {User} from './models/User';
import {Post} from './models/Post';
import {KeystoneContext} from '@keystone-6/core/types';

export default config(
  withAuth(
    {
      server: {
        port: 4000,
      },
      db: {
        provider: 'sqlite',
        url: 'file:./database/sqlite.db',
      },
      experimental: {
        generateNextGraphqlAPI: true,
        generateNodeAPI: true,
      },
      session,
      ui: {
        isAccessAllowed: (context: KeystoneContext) => Boolean(context.session?.data),
      },
      lists: {
        User, Post
      },
    }
  )
);
