import { Dog } from '../../../shared/domain/dog.type';

export type CreateDogPayload = Omit<Dog, 'id'>;
