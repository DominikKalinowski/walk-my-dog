import { DogRent } from '../../../shared/domain/dog-rent.type';

export type CreateRentPayload = Omit<DogRent, 'id' | 'userId'>;
