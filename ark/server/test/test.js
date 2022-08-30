const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");

//Assertion
chai.should();
chai.use(chaiHttp);

describe("Testing register route to create an account", () => {
  //test case will fail if user exist in the database
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

describe("Testing login route for users to log into their account", () => {
  it("It should verify the email and password of an account", (done) => {
    const user = {
      email: "test@gmail.com",
      password: "123456"
    };
    chai
      .request(server)
      .post("/login")
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("token");
      });
    done();
  });

  it("It should verify the email and password of an account", (done) => {
    const user2 = {
      email: "test@gmail.com",
      password: "12345" //wrong password
    };
    chai
      .request(server)
      .post("/login")
      .send(user2)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.property("error");
      });
    done();
  });
});

describe("Testing searching route for bosses", () => {
  it("It should find a boss called necromancer's-origin", (done) => {
    const card = {
      name: "necromancer's-origin"
    };
    chai
      .request(server)
      .post("/searchDungeon")
      .send(card)
      .end((err, res) => {
        res.should.have.status(200);
      });
    done();
  });

  it("It shouldn't find a boss called notABoss", (done) => {
    const card2 = {
      name: "notABoss"
    };
    chai
      .request(server)
      .post("/searchDungeon")
      .send(card2)
      .end((err, res) => {
        res.should.have.status(200); //Also 200 as nothing displays if not found, not error
      });
    done();
  });
});





// describe("Testing creating a post", () => {
//   it("it should return a post", (done) => {

//     let title = "The title";
//     let date = new Date;
//     let name = "bob";
//     let user_id = "627b1c25564ec2f7fc69f920";
//     let content = "The content of the base";
//     let raiting = 1;
//     let vote = { user_id: "627b1c25564ec2f7fc69f920", rait: 1 };

//     const post={
//       title,date,name,user_id,content,raiting,vote
//     }

//     chai
//       .request(server)
//       .post("/createPost")
//       .send(post)
//       .end((err, res) => {
//         res.should.have.status(200);
//       });
//     done();
//   });

//   it("It shouldn't post a invalid post", (done) => {
//     const post2 = {
//     };
//     chai
//       .request(server)
//       .post("/createPost")
//       .send(post2)
//       .end((err, res) => {
//         res.should.have.status(200);
//       });
//     done();
//   });
// });