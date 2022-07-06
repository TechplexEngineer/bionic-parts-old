import { Column, HasOne, Table, Model } from 'sequelize-typescript';
import { CommonProps } from './commonProps';
import { Order } from './order';

export enum InventoryChangeType {
	Acquire = 1,
	Consume = 2,
	Adjust = 3
}

@Table
export class InventoryChange extends Model {
	@Column
	type: InventoryChangeType;

	@HasOne(() => Order)
	order: Order;

	@Column
	quantity: number;
}
