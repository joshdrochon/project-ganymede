import { User } from '../src/user.js'; //class

describe('User', function()
{
  it('should build a User object and check that it has values', function()
  {
    const newUser = new User("Quack Sparrow", "03/14/2016");
    expect(newUser.name).toEqual("Quack Sparrow");
    expect(newUser.birthday).toEqual("03/14/2016");
  });

  it('should return user object age in years', function()
  {
    const newUser = new User("name", "1989,02,14");
    expect(newUser.getAge()).toEqual(29);
  });


});
