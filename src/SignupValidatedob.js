function validateDOB(values) {
    let check={};
    var dateString = values.age;
    var parts = dateString.split("/"); // not testing if the format is correct here
    var now = new Date();
    var birthday = new Date(now.getFullYear(),parts[1]-1,parts[0]);
    var age = now.getFullYear()-parts[2];
    if (now<birthday) age--;
    if (age<18) {
      alert("You must be over 18 to register");
      return false
    }
    // other validation
    return true;
  }