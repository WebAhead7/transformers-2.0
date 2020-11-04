const supertest = require("supertest");
const test = require("tape");
const fs = require("fs");
const path = require("path");
const router = require("../../src/router");
const getCarByName=require("../handlers/getCarHandler").getCarsByName;


//testing home page html file
test("home page html file", t => {
    supertest(router)
        .get("/")
        .expect(200)
        .expect("content-type", "text/html")
        .end((error, response) => {
            if (error)
                t.error(error);
            fs.readFile(path.join(__dirname, "..", "..", "index.html"), "utf-8", (error, data) => {
                if (error)
                    console.log("Something went wrong!");
                t.equal(response.text, data);
                t.end();
            });
        });
});


//testing css file query
test("testing css file query", t => {
    supertest(router)
        .get("/public/style.css")
        .expect(200)
        .expect("content-type", "text/css")
        .end((error, response) => {
            if (error)
                t.error(error);
            fs.readFile(path.join(__dirname, "..", "..", "public/style.css"), "utf-8", (error, data) => {
                if (error)
                    console.log("Something went wrong!");
                t.equal(response.text, data);
                t.end();
            });
        });
});


//testing home page javascript file
test("testing javaScript file query", t => {
    supertest(router)
        .get("/public/index.js")
        .expect(200)
        .expect("content-type", "application/javascript")
        .end((error, response) => {
            if (error)
                t.error(error);
            fs.readFile(path.join(__dirname, "..", "..", "public/index.js"), "utf-8", (error, data) => {
                if (error)
                    console.log("Something went wrong!");
                t.equal(response.text, data);
                t.end();
            });
        });
});

//testing something that doesnt found in public
test("testing something that doesnt found in public", t => {
    supertest(router)
        .get("/public/hehe.png")
        .expect(404)
        .expect("content-type", "text/html")
        .end((error, response) => {
            if (error)
                t.error(error);
            t.equal(response.text, "<h1>Not Found</h1>");
            t.end();

        });
});


//testing something that doesnt found in public
test("testing something that doesnt found in public", t => {
    supertest(router)
        .get("/public/hehe.png")
        .expect(404)
        .expect("content-type", "text/html")
        .end((error, response) => {
            if (error)
                t.error(error);
            t.equal(response.text, "<h1>Not Found</h1>");
            t.end();

        });
});


//testing file extension that doesnt exist in public api
test("file extension that doesnt exist in public api", t => {
    supertest(router)
        .get("/public/hehe.txt")
        .expect(404)
        .expect("content-type", "text/html")
        .end((error, response) => {
            if (error)
                t.error(error);
            t.equal(response.text, "<h1>Not Found</h1>");
            t.end();

        });
});


//testing valid get car api
test("valid get car api ", t => {
    supertest(router)
        .get("/getcar/?name=mazda")
        .expect(200)
        .expect("content-type", "application/json")
        .end((error, response) => {
            if (error)
                t.error(error);
            t.equal(response.text,JSON.stringify(getCarByName("mazda")));
            t.end();

        });
});


//testing valid getcar api
test("valid get car api with default count query variable", t => {
    supertest(router)
        .get("/getcar/?name=mazda")
        .expect(200)
        .expect("content-type", "application/json")
        .end((error, response) => {
            if (error)
                t.error(error);
            t.equal(JSON.parse(response.text).length, 5);
            t.end();

        });
});