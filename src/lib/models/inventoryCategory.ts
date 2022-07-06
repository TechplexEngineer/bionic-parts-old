import { Column, HasOne, Table, Model } from 'sequelize-typescript';
import { CommonProps } from './commonProps';

@Table
export class InventoryCategory extends Model {
	@Column
	name: string;

	@Column
	description: string;

	@HasOne(() => InventoryCategory)
	parentCategory: InventoryCategory;
}
