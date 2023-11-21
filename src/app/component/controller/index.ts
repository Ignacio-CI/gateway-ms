import { logger } from '../../libs/logger';
import { post } from '../use-cases';
import ROUTES from '../../config';
const baseUrl = '/api/v1/services';

const postEP = async (req, res) => {
  try {
    const path = req.path
    const method = req.method
    
    let results = await post({ params: req.body, path });
    console.log(results);
    res.json({ err: 0, data: results });
    
  } catch (err) {
    logger.error(`[EP][POST] ${req.method }: ${err.message}`)
    res.status(403)
    res.json({ err: 1, data: err.message })
   }
}

const routes = [
  { path: `${baseUrl}/registration`, method: 'post', component: postEP },
  { path: `${baseUrl}/auth`, method: 'post', component: postEP }
];

export {
  routes
}
