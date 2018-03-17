export class User
{
  constructor(name, birthday)
  {
    this.name = name;
    this.birthday = birthday;
    this.age = new Date(birthday).getTime()/1000;
  }

  getAge()
  {
    let yrs = 31536000; //userAgeSeconds/60/60/24/365
    let date = new Date().getTime()/1000;
    let age = Math.round((date - this.age)/yrs);

    return age;
  }

  getMercury()
  {
    return this.age * .24;
  }

  getVenus()
  {
    return this.age * .62;
  }

  getMars()
  {
    return this.age * 1.88;
  }

  getJupiter()
  {
    return this.age * 11.86;
  }

  getYearsLeft()
  {
    //code goes here
  }


}// end class
