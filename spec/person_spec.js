let myTest = require("../src/person");

let person = new myTest.Person("Ryan", 30, [
  "being a hardarse",
  "agile and ssd hard drives",
]);

describe("Person class", function() {
  it("Should return name", function() {
    expect(person.name).toEqual("Ryan");
  });

  it("Should return age", function() {
    expect(person.age).toEqual(30);
  });

  it("Should return interests", function() {
    expect(person.interests).toEqual([
      "being a hardarse",
      "agile and ssd hard drives",
    ]);
  });
});
describe("Person class", function() {
  it("should return greeting", function() {
    expect(person.hello()).toEqual('Hello, my name is Ryan and I am 30 years old. My interests are being a hardarse,agile and ssd hard drives');
  });
});