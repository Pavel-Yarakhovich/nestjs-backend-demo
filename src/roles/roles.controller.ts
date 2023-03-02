import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
    constructor(private roleServide: RolesService) {}

    @Post()
    create(@Body() dto: CreateRoleDto) {
        return this.roleServide.createRole(dto);
    }

    // dynamic value
    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.roleServide.getRoleByValue(value);
    }
}
