import { Column, HasOne, Model, Table } from 'sequelize-typescript';
import { CommonProps } from './commonProps';
import { PartStatus } from './partStatus';
import { Project } from './projects';

export enum PartType {
	Part = 1,
	Assembly = 2
}

@Table
export class Part extends Model {
	@Column
	partNumber: string;

	@HasOne(() => Project)
	project: Project;

	@Column
	type: PartType;

	@Column
	name: string;

	@HasOne(() => Part)
	parentPartId: Part;

	@Column
	notes: string;

	@HasOne(() => PartStatus)
	status: PartStatus;

	@Column
	quantity: number;

	// @HasMany(() => Hobby)
	// hobbies: Hobby[]

	// source_material	varchar(255)
	// have_material	int(11)
	// quantity	varchar(255)
	// cut_length	varchar(255)
	// priority	int(11)
	// drawing_created	int(11)
	// gcode_link	varchar(255)
	// gcode_created	varchar(255)
	// drawing_link	varchar(255)
	// cnc_part	int(11)
	// assignee	varchar(255)
	// print_part	int(11) [0]
	// milestone_id	varchar(255)
}
