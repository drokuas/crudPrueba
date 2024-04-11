<template>
    <div class="container"> 
        <div class="card">
            <div class="card-header">
                Crud de Prueba
            </div>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="vista in crud" :key="vista.id">
                            <td>{{ vista.id }}</td>
                            <td>{{ vista.nombre }}</td>
                            <td>{{ vista.correo }}</td>
                            <td>
                                <div class="btn-group" role="group" aria-label="">
                                    
                                    
                                    <router-link :to="{ name: 'editarCrud', params: { id: vista.id } }" class="btn btn-warning m-1">Editar</router-link>

                                    
                                    <button type="button" v-on:click="borrarRegistro(vista.id)" class="btn btn-danger m-1">Borrar</button>       
                                </div>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>        
    </div>
</template>

<script>
export default {
    data(){
        return{
            crud:[]
        }
    },
    created:function(){
        this.consultarEmpleados();
    },
    methods:{
        consultarEmpleados(){
            fetch('http://localhost/basecrud/')
            .then(respuesta =>respuesta.json())
            .then((datosRespuesta)=>{

                console.log(datosRespuesta)
                this.crud=[]
                if(typeof datosRespuesta[0].success==='undefined')
                {
                    this.crud= datosRespuesta;
                }
            })
            .catch(console.log)
        },
        borrarRegistro(id){
            console.log(id)
            fetch('http://localhost/basecrud/?borrar='+id)
            .then(respuesta =>respuesta.json())
            .then((datosRespuesta)=>{

                console.log(datosRespuesta)
                window.location.href="lista"
            })
            .catch(console.log)
        }
    }
}

</script>