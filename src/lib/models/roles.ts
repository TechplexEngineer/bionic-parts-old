import { Column, HasMany, Table, Model } from 'sequelize-typescript';
import { CommonProps } from './commonProps';
import { Permission } from './permissions';

@Table
export class Role extends Model {
	@Column
	name: string;

	@Column
	description: string;

	@HasMany(() => Permission)
	permissions: Permission[];
}
