<template>
  <div class="container">
      <div class="card">
          <div class="card-header">
              Crud
          </div>
          <div class="card-body">
              <form v-on:submit.prevent="agregarRegistro">
                  <div class="form-group">
                      <label for="">Nombre: </label>
                      <input type="text"
                      class="form-control" name="nombre" v-model="registro.nombre" id="nombre" aria-describedby="helpId" placeholder="" required>
                      <small id="helpId" class="form-text text-muted">Escribe el Nombre</small>
                  </div>

                  <div class="form-group">
                      <label for="">Correo</label>
                      <input type="email"
                      class="form-control" name="correo" id="correo" v-model="registro.correo" aria-describedby="helpId" placeholder="" required>
                      <small id="helpId" class="form-text text-muted">Escribe el Correo</small>
                  </div>
                  <div class="btn-group" role="group" aria-label="">
                      <button type="submit" class="btn btn-primary m-1">Agregar</button>
                      
                      
                      <router-link :to="{name:'listaCrud'}" class="btn btn-danger m-1" >Cancelar</router-link>
                  </div>
              </form>
          </div>
          
      </div>
  </div>
</template>


<script>
export default {
  data(){
      return{
          registro:{}
      }
  },
  methods:{
      agregarRegistro(){
          console.log(this.registro);
      var datosEnviar = {nombre:this.registro.nombre,correo:this.registro.correo}
          fetch('http://localhost/basecrud/?insertar=1',{
              method:'POST',
              body:JSON.stringify(datosEnviar)
          })
          .then(respuesta =>respuesta.json())
          .then((datosRespuesta=>{
              console.log(datosRespuesta);
              window.location.href='lista'
          }))

      }
  }
}

</script>

