import express from 'express';
import bodyParser from 'body-parser';

import user from '../controllers/user.js';

const router = express.Router();


router
  .get('/',user.onGetAllUsers)
  .post('/',user.onCreateUser)
  .get('/:id',user.onGetUserById)
  .delete('/:id',user.onDeleteUserById)

export default router;