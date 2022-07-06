import { Column, Table, Model } from 'sequelize-typescript';
import { CommonProps } from './commonProps';

@Table
export class Vendor extends Model {
	@Column
	name: string;

	@Column
	partPrefix: string;

	@Column
	description: string;

	@Column
	icon: Buffer;
}
