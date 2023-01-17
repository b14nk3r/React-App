const express = require('express');
const app = express();
var fs = require('fs');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
var ang123;
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
MongoClient.connect('mongodb+srv://xogus100:cjstk100@cluster0.tdazlii.mongodb.net/?retryWrites=true&w=majority', function(에러, client){
    if(에러) return console.log(에러);
    db = client.db('posting');
    console.log(`db정상실행`);

    /* db.collection('post').insertOne({이름 : 'Taylor', 나이 : 24, _id : 99}, function(에러, 결과){
        console.log('저장완료');

    });
    */

    
});


app.get('/', function(요청, 응답) { 
    db.collection('post').find().toArray(function(에러, 결과){
        console.log(결과)
        응답.send('success!');
      })
  })
  app.post('/add', function(요청, 응답){
    const title = 요청.body.title;
    const content = 요청.body.content;
    console.log(title);
    응답.send('전송완료')
    db.collection('post').insertOne( { 제목 : title, 내용 : content } , function(){
      console.log('저장완료')
    });
  });
  app.get('/list', function(요청, 응답){
    db.collection('post').find().toArray(function(에러, 결과){
      응답.send(결과);
    })
  })
  app.listen(8000, function() {
    console.log('listening on 8000')
})
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
