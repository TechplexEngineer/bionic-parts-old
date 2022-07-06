import type { ModelCtor } from 'sequelize-typescript';

import { InventoryCategory } from './inventoryCategory';
import { InventoryChange } from './inventoryChange';
import { InventoryItem } from './inventoryItem';
import { Order } from './order';
import { Part } from './parts';
import { PartStatus } from './partStatus';
import { Permission } from './permissions';
import { Project } from './projects';
import { Role } from './roles';
import { User } from './users';
import { Vendor } from './vendors';

export * from './commonProps';
export * from './inventoryCategory';
export * from './inventoryChange';
export * from './inventoryItem';
export * from './order';
export * from './partStatus';
export * from './parts';
export * from './permissions';
export * from './projects';
export * from './roles';
export * from './users';
export * from './vendors';

export const Models: ModelCtor[] = [
	InventoryCategory,
	InventoryChange,
	InventoryItem,
	Order,
	PartStatus,
	Part,
	// Permission,
	Project,
	Role,
	User,
	Vendor
];
