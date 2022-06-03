require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose"); 
const req = require("express/lib/request");

const app = express();

app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(session({
    secret : process.env.SECRET,
    resave : false,
    saveUninitialized : false
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/craftMarketDB");

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    phone :{
        type : Number,
        required : true,
        // min : 10,
        // max : 10
    },
    email : {
        type : String,
        required : true
    } ,
    password : {
        type  :String,
        required : true
    }
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User",userSchema);

passport.use(User.createStrategy());
passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

//=======================
//      R O U T E S
//=======================

app.get("/",(req,res)=>{
    res.send();
});

app.get("/logout",(req,res)=>{
    req.logout((err)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect("/");
        }
    });
});

app.post("/register",(req,res)=>{
    
    User.register(new User({username: req.body.username,email:req.body.email,phone:req.body.phone,password : req.body.password}),req.body.password,function(err,user){
        if(err){
            console.log(err);
            res.send({status:false});
        }
        else{
            passport.authenticate("local")(req,res,()=>{
                User.findOne({username : req.body.username},(err,result)=>{
                    if(!err){
                        res.send(result);
                    }else{
                        console.log(err);
                    }
                })
            })   
        } 
    })
});
app.post("/login",(req,res)=>{
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    req.login(user,(err)=>{
        if(err){
            console.log(err+" customized");
        }else{
            passport.authenticate("local") (req,res,()=>{
                User.findOne({username : user.username},(err,result)=>{
                    if(!err){
                        res.send(result);
                    }else{
                        console.log(err);
                    }
                })
            }) 
        }
    });
});

app.listen("3000",()=>{console.log("Server Up and Running.")})