import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from 'mongoose';

import PlayerCardModel, { IPlayerCard } from '../models/playerCard.model';

const createPlayerCard = async (input: DocumentDefinition<Omit<IPlayerCard, 'createdAt' | 'updatedAt'>>) => {
  return PlayerCardModel.create(input);
};

const findAllPlayerCards = async () => {
  return PlayerCardModel.find();
};

const findPlayerCard = async (query: FilterQuery<IPlayerCard>, options: QueryOptions = { lean: true }) => {
  return PlayerCardModel.findOne(query, {}, options);
};

const findAndUpdatePlayerCard = async (query: FilterQuery<IPlayerCard>, update: UpdateQuery<IPlayerCard>, options: QueryOptions) => {
  return PlayerCardModel.findOneAndUpdate(query, update, options);
};

const findAndDeletePlayerCard = async (query: FilterQuery<IPlayerCard>) => {
  return PlayerCardModel.deleteOne(query);
};

export { createPlayerCard, findAllPlayerCards, findPlayerCard, findAndUpdatePlayerCard, findAndDeletePlayerCard };
