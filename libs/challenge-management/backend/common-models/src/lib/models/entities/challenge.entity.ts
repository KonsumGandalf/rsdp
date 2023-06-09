import { Assignment } from '@rspd/challenge-management/backend/common-models';
import { BaseEntity } from '@rspd/shared/backend/utils';
import { ChallengeSubmission } from '@rspd/student-submissions/backend/common-models';
import { Tutor } from '@rspd/user/backend/common-models';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { UnionAssignment } from '../types/union-assignment.type';
import { Semester } from './semester.entity';

/**
 * Represents a challenge that a user can complete.
 * @class
 * @extends BaseEntity
 * @name Challenge
 */
@Entity()
export class Challenge extends BaseEntity {
	/**
	 * The name of the challenge.
	 *
	 * @member {string}
	 */
	@Column()
	name: string;

	/**
	 * The date when the challenge is targeted to be completed.
	 * @member {Date}
	 */
	@Column({ type: 'timestamptz' })
	targetedCompletionDate: Date;

	/**
	 * The list of assignments associated with this challenge.
	 *
	 * @type {Assignment[]}
	 */
	@OneToMany(() => Assignment, (assignment) => assignment.challenge)
	assignments: UnionAssignment[];

	/**
	 * The tutor who created this challenge.
	 *
	 * @type {Tutor}
	 */
	@ManyToOne(() => Tutor, (tutor: Tutor) => tutor.challenges)
	@JoinColumn()
	tutor: Tutor;

	/**
	 * The challenge submission which states if a submission has been completed
	 *
	 * @type {Assignment[]}
	 */
	@OneToMany(
		() => ChallengeSubmission,
		(challengeSubmission: ChallengeSubmission) => challengeSubmission.challenge,
	)
	@JoinColumn()
	submissions: ChallengeSubmission[];

	@ManyToOne(() => Semester, (semester: Semester) => semester.challenges)
	@JoinColumn()
	semester: Semester;
}
