export class User
{
  constructor(name, birthday, gender, ethnicity, isSmoker)
  {
    this.name = name;
    this.birthday = birthday;
    this.gender = gender;
    this.ethnicity = ethnicity;
    this.isSmoker = isSmoker;
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
    return Math.round(this.getAge() / .24);
  }

  getVenus()
  {
    return Math.round(this.getAge() / .62);
  }

  getMars()
  {
    return Math.round(this.getAge() / 1.88);
  }

  getJupiter()
  {
    return Number.parseFloat((this.getAge() / 11.86).toFixed(1));
  }

  getExpectancy()
  {
    let ethnicity = this.ethnicity;

    let expectancy = ethnicity == "asian" ? expectancy = 86.5 :
    ethnicity == "black" ? expectancy = 74.1 :
    ethnicity == "hispanic" ? expectancy = 82.6 :
    expectancy = 78.9; //if white

    return expectancy;
  }

  getYearsLeft()
  {
    let expectancy = this.getExpectancy();

    if(this.gender === "female")
    {
      expectancy += 5;
    }
    expectancy = this.isSmoker ? expectancy -= 3 : expectancy

    return Number.parseFloat((expectancy - this.getAge()).toFixed(1));
  }

}

//nested keys can't be referenced
