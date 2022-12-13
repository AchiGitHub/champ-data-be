import { Express } from 'express';

import playerCardRoutes from './playerCard.routes';

const routes = (app: Express): void => {
  app.use('/api/v1/playercard', playerCardRoutes);
};

export default routes;
