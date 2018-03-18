import { User } from '../src/user.js'; //class

describe('User', function()
{
  it('should build a User object and check that it has values', function()
  {
    const newUser = new User("Quack Sparrow", "03/14/2016", "male", "white", "false");
    expect(newUser.name).toEqual("Quack Sparrow");
    expect(newUser.birthday).toEqual("03/14/2016");
    expect(newUser.gender).toEqual("male");
    expect(newUser.ethnicity).toEqual("white");
    expect(newUser.isSmoker).toEqual("false");
  });

  it('should return user object age in Earth years', function()
  {
    const newUser = new User("name", "1989,02,14");
    expect(newUser.getAge()).toEqual(29);
  });

  it('should return user object age in Mercury years', function()
  {
    const newUser = new User("name", "1989,02,14");
    expect(newUser.getMercury()).toEqual(121);
  });

  it('should return user object age in Venus years', function()
  {
    const newUser = new User("name", "1989,02,14");
    expect(newUser.getVenus()).toEqual(47);
  });

  it('should return user object age in Mars years', function()
  {
    const newUser = new User("name", "1989,02,14");
    expect(newUser.getMars()).toEqual(15);
  });

  it('should return user object age in Jupiter years', function()
  {
    const newUser = new User("name", "1989,02,14");
    expect(newUser.getJupiter()).toEqual(2.4);
  });

  it('should return user object life expectancy', function()
  {
    const newUser = new User("Josh", "03/14/2016", "male", "white", "false");
    expect(newUser.getExpectancy()).toEqual(78.9);
  });

});
