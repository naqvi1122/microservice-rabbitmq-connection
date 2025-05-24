import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ClientProxy } from '@nestjs/microservices';
export declare class UserController {
    private readonly userService;
    private readonly client;
    constructor(userService: UserService, client: ClientProxy);
    create(createUserDto: any): Promise<{
        message: any;
    }>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
