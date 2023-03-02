import {Model, Table, Column, DataType} from "sequelize-typescript";
import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany } from 'sequelize-typescript';
import { User } from "src/users/users.model";
import { UserRoles } from "src/roles/user-roles.model";

interface RoleCreationAttrs {
    value: string;
    description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs> {
    @ApiProperty({ example: '1', description: 'Unique identifier' })
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({ example: 'ADMIN', description: 'User role' })
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({ example: 'Has access to any data', description: 'What rights this role has' })
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}