import { Column, Table, Model } from 'sequelize-typescript';
import { CommonProps } from './commonProps';

@Table
export class PartStatus extends Model {
	@Column
	name: string;

	@Column
	description: string;
}
