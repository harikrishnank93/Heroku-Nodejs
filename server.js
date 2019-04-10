var exp=require('express')
var exph=require('express-handlebars')
var app=exp() 

app.engine('handlebars',exph({defaultLayout:'mainpage'}))
app.set('view engine','handlebars')
app.use(express.static('views/static'))
app.use(express.urlencoded())

app.post('/getdata',(req.res)=>{
    var name=req.body.getname
    var adress=req.body.getadd
    var place=req.body.getpls
    var mobile=req.body.getmob
    var email=req.body.getemi
    res.send(name + '&nbsp'+ address + '&nbsp')
})
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/contact',(req)=>{
    res.render('contact')
})
app.get('/gallery',(req,res)=>{
    res.render('gallery')
})

app.listen(3000)
