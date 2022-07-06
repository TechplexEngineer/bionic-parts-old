import { Column, HasMany, Table, Model } from 'sequelize-typescript';
import { CommonProps } from './commonProps';
import { Part } from './parts';

@Table
export class Project extends Model {
	@Column
	name: string;

	@Column
	partNumberPrefix: string;

	@HasMany(() => Part)
	parts: Part[];
}
