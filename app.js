Vue.component('codermeals-card',{
    props:{
        producto:Object
    },
    template:`<div align="center">
        <img :src="producto.portada" :alt="producto.titulo">
        <h3> {{producto.titulo}} </h3>
        <p>$ <b> {{producto.costo}} </b> </p>
        <button class="btn btn-success" @click="console(producto.id)">AGREGAR</button>
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
            {oferta:false,id:1,name:'Limón',width:20,height:50,price:10},
            {oferta:false,id:2,name:'Ají',width:16,height:45,price:9},
            {oferta:false,id:3,name:'Mayonesa',width:13,height:23,price:8},
            {oferta:false,id:4,name:'Vinagreta',width:25,height:33,price:7},
            {oferta:false,id:5,name:'Guacamole',width:10,height:42,price:7},
            {oferta:false,id:6,name:'Huancaina',width:30,height:32,price:8},
        ],
        codermeals: [
            {
                id: 1,
                titulo: "Spaghetti alla puttanesca",
                costo: 575.00,
                portada: "https://4.bp.blogspot.com/-D5Wvi_gX_Kg/WLatk_GVnKI/AAAAAAAAA5M/-y0gB26R0Dkb01QmdgfZqQALtd9NMV2DACLcB/s1600/P70301-072354.jpg"
            },
            {
                id: 2,
                titulo: "Pizza Napoletana ai carciofi",
                costo: 675.00,
                portada: "https://static.cookist.it/wp-content/uploads/sites/21/2017/12/istock-480277738.jpg"
            },
            {
                id: 3,
                titulo: "Porchetta umbra a cottura lunga",
                costo: 845.00,
                portada: "https://www.fontecesia.it/wp-content/uploads/2018/11/porchetta-umbra-1920x1280.jpg"
            },
            {
                id: 4,
                titulo: "Orecchiette alle cime di rapa",
                costo: 845.00,
                portada: "https://irepo.primecp.com/2016/03/259860/recipe-8673_ExtraLarge1000_ID-1461628.jpg"
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