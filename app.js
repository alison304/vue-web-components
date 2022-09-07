Vue.component('meals-card',{
    props:{
        producto:Object
    },
    template:`<div align="center">
        <img height="200" :src="producto.portada" :alt="producto.titulo">
        <h3> {{producto.titulo}} </h3>
        <p>$ <b> {{producto.costo}} </b> </p>
        <button class="btn btn-success" @click="console(producto.id)">Me gusta</button>
    </div>`,
    methods:{
        console(id){
            console.log('id',id);
        }
    }
})

var app = new Vue({
    el: '#app',
    data:{
        bool1:true,
        bool2:false,
        bool3:false,
        html: '<h3> {{titulo}} </h3>',
        num:0,
        sum:10,
        style:'green bg-red',
        list:[
            ['a','b','c'],
            ['d','e','f'],
            ['i','h','g'],
        ],
        classes:{
            'blue':true,
            'bold':true
        },
        styles:{
            'color':'red',
            'font-size':'32px'
        },
        prodList:[
            {oferta:false,id:1,name:'Limón',width:20,height:50,price:10},
            {oferta:false,id:2,name:'Ají',width:16,height:45,price:9},
            {oferta:false,id:3,name:'Mayonesa',width:13,height:23,price:8},
            {oferta:false,id:4,name:'Vinagreta',width:25,height:33,price:7},
            {oferta:false,id:5,name:'Guacamole',width:10,height:42,price:7},
            {oferta:false,id:6,name:'Huancaina',width:30,height:32,price:8},
        ],
        meals: [
            {
                id: 1,
                titulo: "Pollo a la brasa",
                costo: 50.00,
                portada: "https://www.comida-peruana.com/base/stock/Recipe/218-image/218-image_web.jpg"
            },
            {
                id: 2,
                titulo: "Bistec a lo pobre",
                costo: 60.00,
                portada: "data:image/jpeg;base64,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"
            },
            {
                id: 3,
                titulo: "Anticucho bife peruano",
                costo: 35.00,
                portada: "https://www.peru.travel/Contenido/General/Imagen/pe/61/1.1/Anticucho.jpg"
            },
            {
                id: 4,
                titulo: "Mostrito de chaufa",
                costo: 45.00,
                portada: "https://www.comidastipicasperuanas.com/wp-content/uploads/2022/06/Receta-de-mostrito-de-chaufa-Comidas-Peruanas.jpg"
            }
        ]
    },
    methods:{
        toggleOferta(item){
            item.oferta = !item.oferta
        },
        tamaño(width,height){
            return (width*height)/2
        },
        tamañoColor(promedio){
            if(promedio >= 400){
                return {'color':'red'}
            }
            if(promedio < 400 && promedio >= 200){
                return {'color':'blue'}
            }
            if(promedio < 200){
                return {'color':'green'}
            }
        },
        getColor(index){
            return index % 2 ? 'gris' : 'blanco'
        },
        sumar10(item){
            item.price += 10
        },
        toggleBool1(){
            this.bool1 = !this.bool1
        },
        toggleBool2(){
            this.bool2 = !this.bool2
        },
        toggleBool3(){
            this.bool3 = !this.bool3
        },
        consola(texto){
            console.log(texto)
            return 'funcion consola'
        },
        sumar(){
            this.num = parseInt(this.num)+parseInt(this.sum)
            this.num = +(this.num)+(this.sum)
            //this.num++
        },
        restar(){
            this.num = parseInt(this.num)-parseInt(this.sum)
            //this.num--
        },
        methodsBool(){
            return false
        },
    },
    computed:{
        computedBool(){
            return (this.bool1 && this.bool2) || this.bool3
        },
        text2(){
            return `<span style="color:red;">coder</span>`
        },
        calculoMatematico(){
            return true ? this.num1 : this.num2
        }
    },
})