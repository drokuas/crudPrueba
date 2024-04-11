<template>
  <div class="container">
      <div class="card">
          <div class="card-header">
              Editar Crud
          </div>
          <div class="card-body">
              <form v-on:submit.prevent="EditarRegistro">
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
                      <button type="submit" class="btn btn-success m-1">Guardar</button>
                      
                      
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
  }
}

</script>