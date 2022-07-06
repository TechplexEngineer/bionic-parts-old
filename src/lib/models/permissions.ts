import { Column, Table, Model } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';
import { CommonProps } from './commonProps';

@Table
export class Permission extends Model {
	@Column(DataType.STRING)
	name: string;

	@Column(DataType.BOOLEAN)
	read: boolean;

	@Column(DataType.BOOLEAN)
	write: boolean;

	@Column(DataType.BOOLEAN)
	delete: boolean;

	@Column(DataType.JSON)
	resources: string[];
}
