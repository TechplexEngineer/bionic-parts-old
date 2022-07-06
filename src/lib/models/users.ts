import { Table, Column, HasMany } from 'sequelize-typescript';
import { CommonProps } from './commonProps';
import { Role } from './roles';

@Table
export class User extends CommonProps {
	@Column
	name: string;

	@Column
	email: string;

	@Column
	password: string;

	@Column
	salt: string;

	@HasMany(() => Role)
	roles: Role[];
}
