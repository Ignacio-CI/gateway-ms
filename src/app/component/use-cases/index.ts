import createPost from './post';
import createProtected from './protected';
import config from '../../config';
import { logger } from '../../libs/logger';
import { makeInputObj } from '../entities';
import {
  setCache,
  getCache,
  makeFetch
} from '../data-access';
import { insertOneDocument } from '../../libs/mongodb';

const errorMsgs = config.ERROR_MSG;

const protectedRoutes = ({ token, data }) =>
  createProtected({ getCache, makeInputObj }).protectedRoutes({ token, data, cacheConfig: config.CACHE_CONFIG })

const post = ({ params, path }) =>
  createPost({
    makeInputObj,
    makeFetch,
    setCache,
    logger
  }).post({
    params,
    path,
    JWTSecret: config.JWT_SECRET,
    cacheConfig: config.CACHE_CONFIG,
    errorMsgs: errorMsgs.post
  });

export {
  post,
  protectedRoutes
}
