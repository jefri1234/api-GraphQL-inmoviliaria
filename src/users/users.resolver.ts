import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  //search by id and return a user
  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.user(id);
  }

  //search all user and return a list of users

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.users();
  }

  //create a user and return the user created
  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.createUser(createUserInput);
  }

  //update a user and return the user updated
  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.updateUser(updateUserInput.id, updateUserInput);
  }

  //get a user by id and delete it and return the user deleted 
  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.deleteUser(id);
  }
}