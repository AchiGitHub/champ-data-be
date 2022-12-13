import { object, string, TypeOf } from 'zod';

const playerCardPayload = {
  body: object({
    swapTime: string({ required_error: 'Swap time is required' }),
    swapReason: string({ required_error: 'Swap reason is required' }),
    oldPlayer: string({ required_error: 'Old player name is required' }),
    newPlayer: string({ required_error: 'New player name is required' }),
  }),
};

const params = {
  params: object({
    playerCardId: string({ required_error: 'Player card id is required' }),
  }),
};

const createPlayerCardSchema = object({
  ...playerCardPayload,
});

const updatePlayerCardSchema = object({
  ...playerCardPayload,
  ...params,
});

const deletePlayerCardSchema = object({
  ...params,
});

const getPlayerCardSchema = object({
  ...params,
});

type CreatePlayerCardInput = TypeOf<typeof createPlayerCardSchema>;
type UpdatePlayerCardInput = TypeOf<typeof updatePlayerCardSchema>;
type DeletePlayerCardInput = TypeOf<typeof deletePlayerCardSchema>;
type GetPlayerCardInput = TypeOf<typeof getPlayerCardSchema>;

export {
  createPlayerCardSchema,
  updatePlayerCardSchema,
  deletePlayerCardSchema,
  getPlayerCardSchema,
  CreatePlayerCardInput,
  UpdatePlayerCardInput,
  DeletePlayerCardInput,
  GetPlayerCardInput,
};
