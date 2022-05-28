const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");

//Assertion
chai.should();
chai.use(chaiHttp);

describe("Testing register route to create an account", () => {
  it("It should createOne user", (done) => {
    const user = {
      username: "Test",
      email: "test@gmail.com",
      password: "123456",
      confirmpassword: "123456",
    };
    chai
      .request(server)
      .post("/register")
      .send(user)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.have.property("token");
        done();
      });
  });

  it("It should not createOne user", (done) => {
    const user = {
      username: "Test",
      email: "test@gmail.com",
      password: "123456",
      confirmpassword: "12345", //confirm password not matching
    };
    chai
      .request(server)
      .post("/register")
      .send(user)
      .end((err, res) => {
        res.should.have.status(504);
        done();
      });
  });
});
