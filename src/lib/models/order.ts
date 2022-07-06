import { Column, HasOne, Table, Model } from 'sequelize-typescript';
import type { DECIMAL } from 'sequelize/types';
import { CommonProps } from './commonProps';
import { Project } from './projects';
import { Vendor } from './vendors';

export enum OrderStatus {
	Open = 0,
	Ordered = 1,
	Received = 2
}

@Table
export class Order extends Model {
	@HasOne(() => Project)
	project: Project;

	@HasOne(() => Vendor)
	vendor: Vendor;

	@Column
	status: OrderStatus;

	@Column
	notes: string;

	@Column
	paidForBy: string;

	@Column
	reimbursed: Date | null;

	@Column
	orderedAt: Date;

	@Column(DECIMAL(10, 2))
	taxCost: number;

	@Column(DECIMAL(10, 2))
	shippingCost: number;
}
