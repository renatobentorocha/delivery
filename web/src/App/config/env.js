import path from 'path';

require('dotenv').config({
  path:
    process.env.NODE_ENV === 'development'
      ? path.resolve(__dirname, '..', '..', '.env.development')
      : path.resolve(__dirname, '..', '..', '.env'),
});
