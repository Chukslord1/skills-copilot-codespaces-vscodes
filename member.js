function skillsMember()
{
    // Here we are creating a new member object
    var member = new Object();
    // Here we are adding properties to the member object
    member.name = "John Doe";
    member.age = 25;
    member.skills = ["HTML", "CSS", "JavaScript"];
    member.showSkills = function () {
        // Here we are using the this keyword to refer to the object
        // that this function is a part of
        for (var i = 0; i < this.skills.length; i++) {
            console.log(this.skills[i]);
        }
    };
    // Here we are returning the member object
    return member;
}