import { Body, Controller, Get, Param, Post, Put, Query, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard, Role, RoleGuard, UserRole } from '@rspd/shared/backend/utils';
import { IComplexUser, IEmail, IUser } from '@rspd/user/backend/common-models';
import { IRequestLogin } from '@rspd/user/backend/common-models';
import {
	ICheckAvailability,
	IResponseAuthentication,
	IUserIntermediate,
} from '@rspd/user/common/models';

import { LoginUserDto } from '../models/dtos/login-user.dto';
import { RegisterUserDto } from '../models/dtos/register-user.dto';
import { LocalAuthGuard } from '../models/guards/local-auth.guard';
import { IAuthJwt } from '../models/interfaces/auth-jwt.interface';
import { AuthService } from '../services/auth.service';

/**
 * Controller for handling authentication related requests.
 */
@ApiTags('auth')
@Controller()
export class AuthController {
	constructor(private readonly _authService: AuthService) {}

	/**
	 * Register a new user.
	 * @async
	 * @function
	 * @param {RegisterUserDto} userDto - User registration details.
	 */
	@Post('register')
	async register(@Body() userDto: RegisterUserDto): Promise<void> {
		return await this._authService.register(userDto);
	}

	/**
	 * Authenticates a user with the LocalAuthStrategy.
	 * @async
	 * @function
	 * @param {LoginUserDto} request - Requirements for the user to login, however this is used by the LocalAuthGuard, this is mainly named for Swagger Documentation purposes!
	 * @param {IRequestLogin} request - User authentication details.
	 * @param userDto
	 * @returns {Promise<IResponseAuthentication>} Promise resolving to a response object containing a JWT token.
	 */
	@UseGuards(LocalAuthGuard)
	@Post('login')
	async login(
		@Request() request: IRequestLogin,
		@Body() userDto: LoginUserDto,
	): Promise<IResponseAuthentication> {
		return await this._authService.login({
			username: request.user.username,
			id: request.user.id,
		} as IUser);
	}

	/**
	 * Get the current logged-in user.
	 * @async
	 * @function
	 * @param {IAuthJwt} req - User authentication details.
	 * @returns {Promise<IUser>} Promise resolving to the current logged-in user object.
	 */
	@UseGuards(JwtAuthGuard)
	@Get()
	async getUser(@Request() req: IAuthJwt): Promise<IUserIntermediate> {
		return await this._authService.getUser(req.user.username);
	}

	/**
	 * Request a confirmation email.
	 * @async
	 * @function
	 * @param {IAuthJwt} req - User authentication details.
	 * @returns {Promise<void>} Promise resolving to void.
	 */
	@UseGuards(JwtAuthGuard)
	@Post('confirmation-mail')
	async requestConfirmation(@Request() req: IAuthJwt): Promise<void> {
		await this._authService.requestConfirmationMail(req.user.username);
	}

	/**
	 * Confirm an email.
	 * @async
	 * @function
	 * @param {string} token - Email confirmation token.
	 * @returns {Promise<IEmail>} Promise resolving to an email object.
	 */
	@Get('confirmation-mail/:token')
	async confirmMail(@Param('token') token: string): Promise<IEmail> {
		return await this._authService.confirmMail(token);
	}

	@Get('check')
	async checkSourceAvailability(@Query() source: ICheckAvailability): Promise<boolean> {
		return await this._authService.checkSourceAvailability(source);
	}

	@UseGuards(JwtAuthGuard)
	@Put('update')
	async updateUser(
		@Request() req: IAuthJwt,
		@Body() updateUserDto: RegisterUserDto,
	): Promise<IResponseAuthentication> {
		return await this._authService.updateUser(req.user.username, updateUserDto);
	}
}
