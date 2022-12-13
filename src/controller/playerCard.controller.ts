/* eslint-disable @typescript-eslint/ban-types */
import { Request, Response } from 'express';
import { CreatePlayerCardInput, UpdatePlayerCardInput, DeletePlayerCardInput, GetPlayerCardInput } from '../schemas/playerCard.schema';
import {
  createPlayerCard,
  findAllPlayerCards,
  findAndDeletePlayerCard,
  findAndUpdatePlayerCard,
  findPlayerCard,
} from '../services/playerCard.service';
import logger from '../utils/logger';

const createPlayerCardHandler = async (req: Request<{}, {}, CreatePlayerCardInput['body']>, res: Response) => {
  const body = req.body;

  try {
    //add user role verification
    const appointment = await createPlayerCard({ ...body });
    return res.send(appointment);
  } catch (err) {
    logger.error('Error creating appointment', err);
    return res.status(500).send(err);
  }
};

const getPlayerCardHandler = async (req: Request<GetPlayerCardInput['params']>, res: Response) => {
  const playerCardId = req.params.playerCardId;
  const playerCard = await findPlayerCard({ playerCardId });

  if (!playerCard) {
    return res.status(404).send({ message: 'Appointment not found' });
  }

  return res.send(playerCard);
};

const getAllPlayerCardsHandler = async (_req: Request, res: Response) => {
  const playerCards = await findAllPlayerCards();

  if (!playerCards) {
    return res.status(404).send({ message: 'No player cards found' });
  }

  return res.send(playerCards);
};

const updatePlayerCardHandler = async (req: Request<UpdatePlayerCardInput['params']>, res: Response) => {
  const playerCardId = req.params.playerCardId;
  const update = req.body;

  const playerCard = await findPlayerCard({ playerCardId });

  if (!playerCard) {
    return res.status(404).send({ message: 'Player Card not found' });
  }

  try {
    //add user role verification
    const updatedCard = await findAndUpdatePlayerCard({ playerCardId }, { ...update }, { new: true });
    return res.send(updatedCard);
  } catch (err) {
    logger.error('Error updating card', err);
    return res.status(500).send(err);
  }
};

const deletePlayerCardHandler = async (req: Request<DeletePlayerCardInput['params']>, res: Response) => {
  //add user role verification
  const playerCardId = req.params.playerCardId;

  const client = await findPlayerCard({ playerCardId });

  if (!client) {
    return res.status(404).send({ message: 'Appointment not found' });
  }

  try {
    await findAndDeletePlayerCard({ playerCardId });
    return res.sendStatus(204);
  } catch (err) {
    logger.error('Error deleting card', err);
    return res.status(500).send(err);
  }
};

export { createPlayerCardHandler, getPlayerCardHandler, getAllPlayerCardsHandler, updatePlayerCardHandler, deletePlayerCardHandler };
