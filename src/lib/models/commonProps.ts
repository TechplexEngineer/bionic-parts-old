import { Model, HasOne, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { User } from './users';

export class CommonProps extends Model {
	@HasOne(() => User)
	createdBy: User;

	@CreatedAt
	creationDate: Date;

	@UpdatedAt
	updatedOn: Date;

	@DeletedAt
	deletionDate: Date;
}
