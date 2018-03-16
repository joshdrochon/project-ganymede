export class User
{
  constructor(name, birthday)
  {
    this.name = name;
    this.birthday = birthday;
    this.age = new Date(birthday).getTime()/1000;
  }

  getAgeInSeconds()
  {
    let date = new Date().getTime()/1000;
    let ageSeconds = date - this.age;

    return ageSeconds;
  }

  getMercury()
  {
    return this.date * .24;
  }

  getVenus()
  {
    return this.date * .62;
  }

  getMars()
  {
    return this.date * 1.88;
  }

  getJupiter()
  {
    return this.date * 11.86;
  }

  getYearsLeft()
  {
    //code goes here
  }


}// end class

//first spec will be to calcalute everything in earth time

//program should convert usee's age into seconds
//program should be able to convert the user's age with the current date in seconds
//program should be able to take user's age and calculate how many years old they are in 4 planets
//program should tell a user how many years they have left to live on each planet
