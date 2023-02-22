const express = require('express');
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3-transform');
const multerS33 = require('multer-s3');
const app = express();

var fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const cors = require('cors');
const moment = require('moment');
const s3 = new AWS.S3();
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const { verifyToken } = require("./utils/jwt");
require("dotenv").config();
var ang123;
let url;
let imgurl;
let inputFile;
let outputFile;

var db;
var 아아아아아아아아ㅏㅇ;


app.use(cors({
  origin: '*',
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
MongoClient.connect('mongodb+srv://xogus100:cjstk100@cluster0.tdazlii.mongodb.net/?retryWrites=true&w=majority', function (에러, client) {
  if (에러) return console.log(에러);
  db = client.db('posting');
  console.log(`db정상실행`);
  console.log(process.env.AWS_ACCESS_KEY_ID)
  console.log(process.env.AWS_SECRET_ACCESS_KEY)

  /* db.collection('post').insertOne({이름 : 'Taylor', 나이 : 24, _id : 99}, function(에러, 결과){
      console.log('저장완료');

  });
  */


});
AWS.config.update({
  apiVersion: "2010-12-01",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "ap-northeast-2"
})

const uploader = multer({
  storage: multerS33({
    s3: s3,
    bucket: "mymarubucket",
    contentType: multerS33.AUTO_CONTENT_TYPE,
    shouldTransform: true,

    key(req, file, cb) {
      file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8')
      console.log('오우오우오우' + file.originalname)
      url = `https://mymarubucket.s3.ap-northeast-2.amazonaws.com/original/${encodeURIComponent(path.basename(file.originalname))}`
      cb(null, `original/${path.basename(file.originalname)}`)

    }
  })
})

const upload = multer({

  storage: multerS3({
    s3: s3,
    bucket: "mymarubucket",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    shouldTransform: true,
    transforms: [
      {
        id: "resized",
        key(req, file, cb) {

          file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8')
          console.log('오우오우오우' + file.originalname)
          imgurl = `https://mymarubucket.s3.ap-northeast-2.amazonaws.com/original/${encodeURIComponent(path.basename(file.originalname))}`
          cb(null, `original/${path.basename(file.originalname)}`)
        },
        transform: function (req, file, cb) {
          cb(null, sharp().resize({ width: 400 }));
        },
      },
    ],
    acl: "public-read-write",
  })
});

const ImageUpload = multer({
  storage: multerS3({
    s3,
    bucket: "mymarubucket",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    shouldTransform: true,
    transforms: [
      {
        id: "resized",
        key: function (req, file, cb) {
          file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8')


          console.log('오우오우오우' + file.originalname)
          imgurl = `https://mymarubucket.s3.ap-northeast-2.amazonaws.com/original/${encodeURIComponent(path.basename(file.originalname))}`
          cb(null, `original/${path.basename(file.originalname)}`)
        },
        transform: function (req, file, cb) {
          cb(null, sharp().resize({ width: 400 }));
        },
      },
    ],
    acl: "public-read-write",
  }),
});



app.listen(8080, function () {
  console.log('listening on 8080')
})

app.post('/img', upload.single('img'), (req, res) => {
  // 해당 라우터가 정상적으로 작동하면 public/uploads에 이미지가 업로드된다.
  // 업로드된 이미지의 URL 경로를 프론트엔드로 반환한다.

  console.log('전달받은 파일', req.file);
  console.log('저장된 파일의 이름', req.file.filename);

  // 파일이 저장된 경로를 클라이언트에게 반환해준다.
  res.json({ url: imgurl });
});

app.get('/', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/react-app/build/index.html'));
});

app.get('/details/:no', function (요청, 응답) {
  //`ObjectId('${parseInt(요청.params.id)}')`
  db.collection('post').findOne({ _id: ObjectId(요청.params.no) }, function (에러, 결과) {
    console.log("파라미터 id입니다.:" + 요청.params.no);
    console.log(결과);
    응답.send(결과);
    return;
  })

});

app.post('/add', uploader.single("file"), function (요청, 응답) {
  const title = 요청.body.title;
  const content = 요청.body.content;
  const fileSize = 요청.body.fileSize;
  var today = new Date();

  var year = today.getFullYear();
  var month = ('0' + (today.getMonth() + 1)).slice(-2);
  var day = ('0' + today.getDate()).slice(-2);

  var dateString = year + '-' + month + '-' + day;

  console.log('url:' + url);
  console.log(title);
  console.log(요청.body);
  console.log(dateString);
  응답.send('전송완료')

  db.collection('post').insertOne({ 제목: title, 내용: content, url: url, fileSize: fileSize, 날짜: dateString }, function () {
    console.log('저장완료')
  });
});

app.post('/edit/:no', uploader.single("file"), function(요청, 응답){
  //ObjectId('${parseInt(요청.params.id)}')
  const title = 요청.body.title;
  const content = 요청.body.content;
  const fileSize = 요청.body.fileSize;
  console.log(title);
  console.log(요청.body);
  응답.send('전송완료')
  db.collection('post').updateOne( { _id : ObjectId(요청.params.no)}, {$set : { 제목 : title, 내용 : content, url : url, fileSize : fileSize }} , function(에러, 결과){
    console.log('저장완료')
  })

});

app.post('/delete/:no', function(요청, 응답){
  //`ObjectId('${parseInt(요청.params.id)}')`
  db.collection('post').deleteOne( { _id : ObjectId(요청.params.no)} , function(에러, 결과){
    console.log(결과);
  })
  응답.send(결과);

});


app.get('/list', function (요청, 응답) {
  db.collection('post').find().sort({ _id: -1 }).toArray(function (에러, 결과) {
    응답.send(결과);
  })
})

//토큰 유효성 체크
app.get('/checkuser', function (req, res, next) {
  //console.log("쿠키: " + JSON.stringify(req.cookies));
  //res.send(req.cookies.accessToken);

  const accessToken = verifyToken(req.cookies.accessToken, process.env.ACCESS_SECRET);
  //const accessToken1 = jwt.verify(req.cookies.accessToken, process.env.ACCESS_SECRET);
  const refreshToken = verifyToken(req.cookies.refreshToken, process.env.REFRESH_SECRET);


  //console.log("토큰1" + JSON.stringify(accessToken1));
  console.log("엑세스 토큰: " + JSON.stringify(accessToken));
  console.log("리프레쉬 토큰: " + JSON.stringify(refreshToken));
  
  if(accessToken === null) {
    if(refreshToken === null) {
      res.status(404).json("Not Access Token");
      console.log("엑세스 토큰, 리프레쉬 토큰 모두 만료");
    } else {
      const data = verifyToken(req.cookies.refreshToken, process.env.REFRESH_SECRET);
      console.log("아이디" + data.id);
      db.collection('login').findOne({id:data.id}, function(에러, 결과){
        if(에러) {
          res.status(500).json({ message: '에러!' });
        } else if(결과) {
          const newAccessToken = jwt.sign({
            id : data.id,
          }, process.env.ACCESS_SECRET, {
            expiresIn : '30m',
            issuer : 'Maru',        
          });
          console.log("리프레쉬 토큰 유효, 엑세스 토큰 새로 발급!")
          res.cookie("accessToken", newAccessToken,{
            secure : false,
            httpOnly : true,
            maxAge : 60*60*24*30,
          });
          res.status(202).json("New Access Token");
        }
      })
    }
    //res.status(200).json("Access Token");
  } else {
    if(refreshToken === null) {
      const newRefreshToken = jwt.sign({
        id : id,
      }, process.env.REFRESH_SECRET, {
        expiresIn : '30 days',
        issuer : 'Maru',
      });
      res.cookie("refreshToken", newRefreshToken,{
        secure : false,
        httpOnly : true,
        maxAge : 60*60*24*30,
      });
      res.status(202).json("New Access Token");
      console.log("엑세스 토큰 유효, 리프레쉬 토큰 새로 발급!");
    }
    res.status(202).json("Access Token");
    console.log("엑세스 토큰, 리프레쉬 토큰 모듀 유효");
  }
  console.log("엑세스 토큰 유효성: " + JSON.stringify(accessToken));
  //console.log("리프레쉬 토큰 유효성: " + JSON.stringify(refreshToken));
});

app.use(express.static(path.join(__dirname, 'react-app/build')));


app.get('*', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/react-app/build/index.html'));
});

// access token을 secret key 기반으로 생성
const generateAccessToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "15m",
  });
};

// refersh token을 secret key  기반으로 생성
const generateRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "180 days",
  });
};

// login 요청 및 성공시 access token, refresh token 발급
app.post("/login", (req, res) => {
  let id = createHashedPassword(req.body.id);
  let pw = createHashedPassword(req.body.pw);
  console.log(id);
  console.log(pw);

  db.collection('login').findOne({ id:id, pw:pw }, function (에러, 결과) {
    if (에러) {
      res.status(500).json({ message: '에러!' });
      console.log("로그인실패");
    } else if (결과) {
      //access token 발급
      const accessToken = jwt.sign({
        id : id,
      }, process.env.ACCESS_SECRET, {
        expiresIn : '30m',
        issuer : 'Maru',
      })

      //refresh token 발급
      const refreshToken = jwt.sign({
        id : id,
      }, process.env.REFRESH_SECRET, {
        expiresIn : '30d',
        issuer : 'Maru',
      })

      //토큰 전송
      res.cookie("accessToken", accessToken,{
        secure : false,
        httpOnly : true,
        maxAge : 60*60*24*30,
      });

      res.cookie("refreshToken", refreshToken,{
        secure : false,
        httpOnly : true,
        maxAge : 60*60*24*30,
      });
      
      res.status(200).json("login success");
      console.log("로그인성공");


    } else {
      res.status(404).json({ message: '유저 없음!' });
      console.log("로그인실패");
    }
  })

  //res.json({ accessToken, refreshToken });
});

app.post("/logout", (req, res) => {
  try {
    res.clearCookie('refreshToken');
    res.clearCookie('accessToken');
    res.status(200).json("Logout Success");
  } catch (error) {
    res.status(500).json(error)
  }

  //res.json({ accessToken, refreshToken });
});


const createHashedPassword = (password) => {
  return crypto.createHash("sha256").update(password).digest("base64");
};



  
/*app.use(bodyParser.urlencoded({extended : true}));
app.listen(8080, function() {
    console.log('listening on 8080')
})

app.get('/', function(요청, 응답) { 
  응답.sendFile(__dirname +'/index.html')
})

app.get('/write', function(요청, 응답) { 
    응답.sendFile(__dirname +'/write.html')
});

app.post('/add', function(요청, 응답){
  console.log(요청.body);
  응답.send('전송완료')
  db.collection('post').insertOne( { 이름 : 요청.body.name, 나이 : 요청.body.age } , function(){
    console.log('저장완료')
  });
});
app.get('/list', function(요청, 응답){
    db.collection('post').find().toArray(function(에러, 결과){
      console.log(결과)
      응답.render('start.ejs', { posts : 결과 })
    })
  })

app.use(express.static(__dirname + "/public"));
*/