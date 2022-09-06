var app = new Vue({
    el: '#app',
    data:{
        bool1:true,
        bool2:false,
        bool3:false,
        message: 'Hola coder!',
        num:0,
        sum:10,
        style:'green bg-red',
        text:'Hola coder',
        html:'CoderHouse',
        list:[
            ['a','b','c'],
            ['d','e','f'],
            ['i','h','g'],
        ],
        classes:{
            'blue':true,
            //'bg-red':true,
            'bold':true
        },
        styles:{
            'color':'red',
            'font-size':'32px'
        },
        matesList:[
            {oferta:false,id:1,name:'rosa',width:20,height:50,price:500},
            {oferta:false,id:2,name:'plateado',width:16,height:45,price:1000},
            {oferta:false,id:3,name:'dorado',width:13,height:23,price:250},
            {oferta:false,id:4,name:'azul',width:25,height:33,price:468},
            {oferta:false,id:5,name:'de vidrio',width:10,height:42,price:1500},
            {oferta:false,id:6,name:'de cuero',width:30,height:32,price:800},
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