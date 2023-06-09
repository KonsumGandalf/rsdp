import { Transform } from 'class-transformer';
import { IsDate, IsString, MinDate } from 'class-validator';

/**
 * Data transfer object for representing a challenge.
 */
export class ChallengeDto {
	/**
	 * The name of the challenge.
	 * @type {string}
	 */
	@IsString()
	@Transform(({ value }) => value.trim())
	name: string;

	/**
	 * The name of the semester of the challenge.
	 * @type {string}
	 */
	@IsString()
	semesterName: string;

	/**
	 * The date when the challenge is targeted to be completed.
	 * @type {Date}
	 * @param {string|Date} value - The value of the property being validated.
	 */
	@Transform(({ value }) => value && new Date(value))
	@IsDate()
	@MinDate(new Date())
	targetedCompletionDate: Date;
}
