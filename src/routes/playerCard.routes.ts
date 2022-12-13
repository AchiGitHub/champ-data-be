import { Router } from 'express';

import validate from '../middleware/validateResource';
import {
  createPlayerCardHandler,
  deletePlayerCardHandler,
  updatePlayerCardHandler,
  getAllPlayerCardsHandler,
  getPlayerCardHandler,
} from '../controller/playerCard.controller';
import { createPlayerCardSchema, deletePlayerCardSchema, getPlayerCardSchema, updatePlayerCardSchema } from '../schemas/playerCard.schema';

const router = Router();

router.route('/all').get(getAllPlayerCardsHandler);
router.route('/view/:playerCardId').get(validate(getPlayerCardSchema), getPlayerCardHandler);
router.route('/create').post(validate(createPlayerCardSchema), createPlayerCardHandler);
router.route('/update/:playerCardId').put([validate(updatePlayerCardSchema)], updatePlayerCardHandler);
router.route('/delete/:playerCardId').delete([validate(deletePlayerCardSchema)], deletePlayerCardHandler);

export default router;
