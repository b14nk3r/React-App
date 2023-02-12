const express = require('express');
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const app = express();
var fs = require('fs');
const path = require('path');   
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const cors = require('cors');
const moment = require('moment');
const s3 = new AWS.S3();
require("dotenv").config();
var ang123;
let url;
let imgurl;


var db;
var 아아아아아아아아ㅏㅇ;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
MongoClient.connect('mongodb+srv://xogus100:cjstk100@cluster0.tdazlii.mongodb.net/?retryWrites=true&w=majority', function(에러, client){
    if(에러) return console.log(에러);
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
  storage: multerS3({
    s3: s3,
    bucket: "myreactawsbucket",
    key(req, file, cb) {  
      file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8')
      console.log('오우오우오우'+file.originalname)
      url = `https://myreactawsbucket.s3.ap-northeast-2.amazonaws.com/original/${encodeURIComponent(path.basename(file.originalname))}`
      cb(null, `original/${path.basename(file.originalname)}`)

  }
  })
})

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "myreactawsbucket",
    key(req, file, cb) {  
      file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8')
      console.log('오우오우오우'+file.originalname)
      imgurl = `https://myreactawsbucket.s3.ap-northeast-2.amazonaws.com/original/${encodeURIComponent(path.basename(file.originalname))}`
      cb(null, `original/${path.basename(file.originalname)}`)

  }
  })
});


app.listen(8080, function() {
    console.log('listening on 8080')
})

app.post('/img', upload.single('img'), (req, res) => {
  // 해당 라우터가 정상적으로 작동하면 public/uploads에 이미지가 업로드된다.
  // 업로드된 이미지의 URL 경로를 프론트엔드로 반환한다.
  console.log('전달받은 파일', req.file);
  console.log('저장된 파일의 이름', req.file.filename);

  // 파일이 저장된 경로를 클라이언트에게 반환해준다.
  const IMG_URL = `http://localhost:4050/uploads/${req.file.filename}`;
  console.log(IMG_URL);
  res.json({ url: imgurl });
});

app.get('/', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/react-app/build/index.html'));
});

app.get('/details/:no', function(요청, 응답){
  //`ObjectId('${parseInt(요청.params.id)}')`
  db.collection('post').findOne( { _id : ObjectId(요청.params.no)} , function(에러, 결과){
    console.log("파라미터 id입니다.:"+ 요청.params.no);
    console.log(결과);
    응답.send(결과);
    return;
  })
  
});

  app.post('/add', uploader.single("file"), function(요청, 응답){
    const title = 요청.body.title;
    const content = 요청.body.content;
    var today = new Date();

    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);

    var dateString = year + '-' + month  + '-' + day;

    console.log('url:' + url);
    console.log(title);
    console.log(요청.body);
    console.log(dateString);
    응답.send('전송완료')
  
    db.collection('post').insertOne( { 제목 : title, 내용 : content, url : url, 날짜: dateString } , function(){
      console.log('저장완료')
    });
  });
  
  app.get('/list', function(요청, 응답){
    db.collection('post').find().sort({ _id: -1 }).toArray(function(에러, 결과){
      응답.send(결과);
    })
  })

  app.use(express.static(path.join(__dirname, 'react-app/build')));

  app.get('*', function (요청, 응답) {
    응답.sendFile(path.join(__dirname, '/react-app/build/index.html'));
  });

  
  
  
  
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