var express = require("express");
var router = express.Router();
var mysql = require("mysql");
console.log("hello")


router.get("/get-std", function (req, res, next) {
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "student",
});

con.connect(function (err, succ) {
if (err) {
res.send("DB connection error");
} else {

var q = "select *from students";
con.query(q, function (e, s) {
if (e) {
res.send(e);
} else {
res.send(s);
}
});
}
});
});

router.post("/insert-std", function (req, res, next) {
var i= req.body.stu_id;
var n = req.body.stu_name;
var l = req.body.stu_location;
var c = req.body.stu_class;

var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "student",
});
con.connect(function (err, succ) {
if (err) {
res.send("db conn eror");
} else var q = `insert into students(stu_id,stu_name ,stu_class ,stu_location) values('${i}','${n}','${c}','${l}')`;
con.query(q, function (e, s) {
if (e) {
res.send(e);
} else {
res.send(s);
}
});
});
});

router.put("/update-std", function (req, res, next) {
    var i= req.query.stu_id;
    var n = req.body.stu_name;
    var l = req.body.stu_location;
    var c = req.body.stu_class;
    console.log("Hii from backend update");
    console.log(i);
    
    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "student",
    });
    con.connect(function (err, succ) {
    if (err) {
    res.send("db conn eror");
    } else var q = `update students set stu_name='${n}',stu_class='${c}',stu_location='${l}' where stu_id=${i}`;
    con.query(q, function (e, s) {
    if (e) {
    res.send(e);
    } else {
    res.send(s);
    }
    });
    });
    });

router.delete("/delete-std", function (req, res, next) {
        var i= req.query.id;
        var n = req.body.stu_name;
        var l = req.body.stu_location;
        var c = req.body.stu_class;
        
        var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "student",
        });
        con.connect(function (err, succ) {
        if (err) {
        res.send("db conn eror");
        } else var q = `delete from students where stu_id=${i}`;
        con.query(q, function (e, s) {
        if (e) {
        res.send(e);
        } else {
        res.send("delete sucessfelly");
        }
        });
        });
        });

module.exports = router;