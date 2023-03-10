import {Model, Table, Column, DataType, HasMany} from "sequelize-typescript";
import { ApiProperty } from '@nestjs/swagger';
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";
import { BelongsToMany } from 'sequelize-typescript';
import { Post } from "src/posts/post.model";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({ example: '1', description: 'Unique identifier' })
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({ example: 'test@mail.com', description: 'User email' })
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({ example: 'passsword1234', description: 'password' })
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({ example: 'true', description: 'If user is banned' })
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({ example: 'Misbehaviour', description: 'A reason why user was banned' })
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

    @HasMany(() => Post)
    posts: Post[]
}