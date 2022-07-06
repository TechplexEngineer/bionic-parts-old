import { Column, HasMany, HasOne, Table, Model } from 'sequelize-typescript';
import { CommonProps } from './commonProps';
import { InventoryCategory } from './inventoryCategory';
import { InventoryChange } from './inventoryChange';
import { Vendor } from './vendors';

@Table
export class InventoryItem extends Model {
	@HasOne(() => InventoryCategory)
	category: InventoryCategory;

	@Column
	name: string;

	@Column
	description: string;

	@Column
	amountToStock: number;

	@Column
	partNumber: string;

	@HasMany(() => Vendor)
	suppliers: Vendor[];

	@HasMany(() => InventoryChange)
	inventoryChanges: InventoryChange[];
}
