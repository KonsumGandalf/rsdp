import { Body, Controller, Delete, Get, Param, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Assignment } from '@rspd/challenge-management/backend/common-models';
import {
	IDeleteResponse,
	JwtAuthGuard,
	Role,
	RoleGuard,
	UserRole,
} from '@rspd/shared/backend/utils';

import { AssignmentDto } from '../models/dto/assignment.dto';
import { AssignmentService } from '../services/assignment.service';

/**
 * Assignment controller
 */
@Controller('assignment')
@ApiTags('assignment')
@ApiBearerAuth()
@Role(UserRole.TUTOR)
@UseGuards(JwtAuthGuard, RoleGuard)
export class AssignmentController {
	constructor(private readonly _assignmentService: AssignmentService) {}

	/**
	 * Retrieve an assignment by ID
	 * @param id The ID of the assignment to retrieve
	 * @returns The assignment matching the ID
	 */
	@Get(':id')
	@ApiFoundResponse({ description: 'Assignment was found', type: Assignment })
	async getAssignment(@Param('id') id: string): Promise<Assignment> {
		return this._assignmentService.getAssignmentById(id);
	}

	/**
	 * Delete an assignment by ID
	 * @param id The ID of the assignment to delete
	 * @returns The number of affected rows and the deleted assignment
	 */
	@Delete(':id')
	@ApiOkResponse({ description: 'Assignment was deleted', type: Assignment })
	async deleteAssignment(@Param('id') id: string): Promise<IDeleteResponse<Assignment>> {
		return this._assignmentService.deleteAssignment(id);
	}

	/**
	 * Update an assignment by ID
	 * @param id The ID of the assignment to update
	 * @param assignment The new assignment information
	 * @returns The updated assignment
	 */
	@Put(':id')
	@ApiOkResponse({ description: 'Assignment was updated', type: Assignment })
	async updateAssignment(
		@Param('id') id: string,
		@Body() assignment: AssignmentDto,
	): Promise<Assignment> {
		return this._assignmentService.updateAssignment(id, assignment);
	}
}
