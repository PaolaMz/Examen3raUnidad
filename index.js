const express=require ('express');
const hbs=require('hbs');
const mongoose=require('mongoose');

const PUERTO=process.env.PORT || 3000;

let pintoresRouter=require('/routes/pintor');

const app=express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

app.use('/', pintoresRouter);

/*la conexion con mongfo db*/
mongoose.Promise=global.Promise;
const cadena="mongodb+srv://Examen:0512131518@munozpaola-g-xtrxq.mongodb.net/<dbname>?retryWrites=true&w=majority"
mongoose.connect(cadena,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log('Conexión establecida :)');
})
.catch(err=>console.log(err));

app.listen(PORT, () =>{
    console.log('Escuchando el puerto 3000');
});

