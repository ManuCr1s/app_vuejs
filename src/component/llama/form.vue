<template>
    <v-dialog v-model="dialog" max-width="900px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-show="updating"
          v-bind="attrs"
          v-on="on"
          elevation="0"
          :ripple="false"
          height="43"
          class="
            font-weight-normal
            text-capitalize
            btn-primary
            bg-gradient-success
            py-3
            px-6
            ms-3
          "
          >Nuevo registro</v-btn
        >
        <v-btn v-show="!updating"
          v-bind="attrs"
          v-on="on"
          elevation="0"
          :ripple="false"
          color="transparent"
          class="text-dark font-weight-bolder py-6 px-5 shadow-0"
          small
          simple
        >
          <v-icon size="12" class="me-2 material-icons-round">edit</v-icon>
          Editar
        </v-btn>
      </template>
      <v-card class="card-shadow border-radius-xl mt-6" id="basic">
    <div class="px-6 py-6">
      <h5 class="text-h5 font-weight-bold text-typo">Registrar nueva llama</h5>
    </div>
    <div class="px-6 pb-6 pt-0">
      <label class="text-success mb-5">Datos Generales</label>
      <v-row>
        <v-col sm="4" cols="12">
          <v-text-field
            color="#e91e63"
            label="Número de arete"
            placeholder="Número de arete"
            class="font-size-input input-style"
          >
          </v-text-field>
        </v-col>
        <v-col sm="4" cols="12">
          <v-text-field
            color="#e91e63"
            label="Nombre"
            placeholder="Nombre"
            class="font-size-input input-style"
          >
          </v-text-field>
        </v-col>
        <v-col sm="4" cols="12" class="d-flex align-center">
  
  <v-text-field
v-model="fileName"
color="#e91e63"
label="Fotografía"
class="font-size-input input-style"
placeholder="Inserte fotografía"
readonly
></v-text-field>


<v-btn 
class="
                font-weight-normal
                text-capitalize
                btn-primary
                bg-gradient-success
                py-2
                px-4
                "
                elevation="0"
@click="triggerFileInput"
>
Cargar Archivo
</v-btn>


<input 
type="file" 
ref="fileInput" 
style="display: none;" 
accept=".jpg,.png"
@change="handleFileUpload"
/>
</v-col>
      </v-row>
      <v-row class="mt-0 mb-3">
        <v-col sm="4" cols="12">
          <v-menu
                                        v-model="menu"
                                        :close-on-content-click="false"
                                        transition="scale-transition"
                                        offset-y
                                        attach
                                        min-width="auto"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field
                                                v-model="form.fechanac"
                                                color="#e91e63"
                                                class="font-size-input input-style"
                                                placeholder="Fecha de nacimiento"
                                                readonly
                                                v-bind="attrs"
                                                v-on="on"
                                            ></v-text-field>
                                        </template>
                                        <v-date-picker
                                            v-model="form.fechanac"
                                            no-title
                                            scrollable
                                            @input="menu = false"
                                        ></v-date-picker>
                                    </v-menu>
        </v-col>
        <v-col sm="4" cols="12">
          <v-select
            :items="gender"
            label="Seleccione sexo"
            color="#e91e63"
            class="font-size-input input-style"
            single-line
            height="36"
          >
          </v-select>
        </v-col>
        <v-col sm="4" cols="12">
          <v-select
            :items="gender"
            label="Seleccione raza"
            color="#e91e63"
            class="font-size-input input-style"
            single-line
            height="36"
          >
          </v-select>
        </v-col>
      </v-row>
      <label class="text-success mb-5">Datos Genealógicos</label>
      <v-row class="mt-0 mb-3" >
        <v-col sm="4" cols="12">
          <v-select
            :items="gender"
            label="Seleccione llama padre"
            color="#e91e63"
            class="font-size-input input-style"
            single-line
            height="36"
          >
          </v-select>
        </v-col>
        <v-col sm="4" cols="12">
          <v-select
            :items="gender"
            label="Seleccione llama madre"
            color="#e91e63"
            class="font-size-input input-style"
            single-line
            height="36"
          >
          </v-select>
        </v-col>
        <v-col sm="4" cols="12">
          <v-select
            :items="gender"
            label="Estado de llama"
            color="#e91e63"
            class="font-size-input input-style"
            single-line
            height="36"
          >
          </v-select>
        </v-col>
      </v-row>
      <label class="text-success mb-5">Datos Fenotípicos</label>
      <v-row class="mt-0">
        <v-col sm="4" cols="12">
          <v-select
            :items="gender"
            label="Color de pelaje"
            color="#e91e63"
            class="font-size-input input-style"
            single-line
            height="36"
          >
          </v-select>
        </v-col>
        <v-col sm="4" cols="12">
          <v-select
            :items="gender"
            label="Color de ojos"
            color="#e91e63"
            class="font-size-input input-style"
            single-line
            height="36"
          >
          </v-select>
        </v-col>
        <v-col sm="4" cols="12">
          <v-select
            :items="gender"
            label="Dentición"
            color="#e91e63"
            class="font-size-input input-style"
            single-line
            height="36"
          >
          </v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Peso vivo"
          placeholder="Peso vivo"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">Kg</span>
        </template>
        </v-text-field>
      </v-col>

      <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Peso nacimiento"
          placeholder="Peso nacimiento"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">Kg</span>
        </template>
        </v-text-field>
      </v-col>
      <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Peso destete"
          placeholder="Peso destete"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">Kg</span>
        </template>
        </v-text-field>
      </v-col>
      </v-row>
      <v-row>
        <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Peso al año"
          placeholder="Peso al año"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">Kg</span>
        </template>
        </v-text-field>
      </v-col>

      <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Número de partos"
          placeholder="Número de partos"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        </v-text-field>
      </v-col>
      <v-col sm="4" cols="12">
          <v-menu
                                        v-model="menu"
                                        :close-on-content-click="false"
                                        transition="scale-transition"
                                        offset-y
                                        attach
                                        min-width="auto"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field
                                                v-model="form.fechanac"
                                                color="#e91e63"
                                                class="font-size-input input-style"
                                                placeholder="Fecha de último parto"
                                                readonly
                                                v-bind="attrs"
                                                v-on="on"
                                            ></v-text-field>
                                        </template>
                                        <v-date-picker
                                            v-model="form.fechanac"
                                            no-title
                                            scrollable
                                            @input="menu = false"
                                        ></v-date-picker>
                                    </v-menu>
        </v-col>
      </v-row>
      <v-row class="mb-3">
        <v-col cols="6" class="py-0">
          <v-select
            :items="gender"
            label="Estado reproductivo"
            color="#e91e63"
            class="font-size-input input-style"
            single-line
            height="36"
          >
          </v-select>
        </v-col>
      </v-row>
      <label class="text-success mb-5">Datos Productivos</label>
      <v-row class="mt-3">
        <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Altura de cabeza"
          placeholder="Altura de cabeza"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>

      <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Longitud ancho de oreja"
          placeholder="Longitud ancho de oreja"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>
      <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Longitud punta de oreja"
          placeholder="Longitud punta de oreja"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>
      </v-row>
      <v-row>
        <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Longitud arqueo de oreja"
          placeholder="Longitud arqueo de oreja"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>

      <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Longitud base de oreja"
          placeholder="Longitud base de oreja"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>
      </v-row>
      <v-row>
        <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Longitud ancho facial nariz"
          placeholder="Longitud ancho facial nariz"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>

      <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Longitud nuca punta nariz"
          placeholder="Longitud nuca punta nariz"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>
      <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Perímetro tabique nasal"
          placeholder="Perímetro tabique nasal"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>
      </v-row>
      <v-row>
        <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Perímetro dorso nariz hocico"
          placeholder="Perímetro dorso nariz hocico"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>

      <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Longitud garganta belfos"
          placeholder="Longitud garganta belfos"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>
      </v-row>
      <v-row>
        <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Longitud amplitud mandibular"
          placeholder="Longitud amplitud mandibular"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>

      <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Longitud mandibula maxilar superior"
          placeholder="Longitud mandibula maxilar superior"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>
      <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Perímetro cuello superior"
          placeholder="Perímetro cuello superior"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>
      </v-row>
      <v-row>
        <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Perímetro cuello base"
          placeholder="Perímetro cuello base"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>

      <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Longitud punta hombros"
          placeholder="Longitud punta hombros"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>
      </v-row>
      <v-row>
        <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Longitud punta hombro anca"
          placeholder="Longitud punta hombro anca"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>

      <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Altura de cruz"
          placeholder="Altura de cruz"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>
      <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Altura inserción cuello nuca"
          placeholder="Altura inserción cuello nuca"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>
      </v-row>
      <v-row>
        <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Longitud base pecho cruz"
          placeholder="Longitud base pecho cruz"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>

      <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Perímetro torácico"
          placeholder="Perímetro torácico"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>
      </v-row>
      <v-row>
        <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Longitud punta codo rodilla"
          placeholder="Longitud punta codo rodilla"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>

      <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Longitud rodilla menudillo"
          placeholder="Longitud rodilla menudillo"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>
      <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Perímetro caña"
          placeholder="Perímetro caña"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>
      </v-row>
      <v-row>
        <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Perímetro muñeca"
          placeholder="Perímetro muñeca"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>

      <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Longitud barril"
          placeholder="Longitud barril"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>
      </v-row>
      <v-row>
        <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Altura grupa"
          placeholder="Altura grupa"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>

      <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Longitud inserción cuello inserción cola"
          placeholder="Longitud inserción cuello inserción cola"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>
      <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Longitud cola"
          placeholder="Longitud cola"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>
      </v-row>
      <v-row>
        <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Longitud punta cadera"
          placeholder="Longitud punta cadera"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>

      <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Longitud isquion punta anca"
          placeholder="Longitud isquion punta anca"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>
      </v-row>
      <v-row>
        <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Longitud punta isquiones"
          placeholder="Longitud punta isquiones"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>

      <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Longitud corvejón menudillo"
          placeholder="Longitud corvejón menudillo"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>
      <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Longitud corvejón rótula"
          placeholder="Longitud corvejón rótula"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>
      </v-row>
      <v-row>
        <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Longitud amplitud punta corvejón"
          placeholder="Longitud amplitud punta corvejón"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>

      <v-col sm="4" cols="12">
        <v-text-field
          color="#e91e63"
          label="Longitud cruz grupa"
          placeholder="Longitud cruz grupa"
          class="font-size-input input-style"
          type="number"
          v-model="number"
        >
        <template v-slot:append>
        <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">cm</span>
        </template>
        </v-text-field>
      </v-col>
      </v-row>
    </div>
  </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    name: "ProductorForm",
    data() {
      return {
        fileName: "",
        dialog: false,
        form: {
          nombre: "",
          descripcion: "",
          dni: "",
          apaterno: "",
          nombre: "",
          fundo: "",
          provincia: "",
          distrito: "",
          cpoblado: "",
          canexo: "",
          estado: "",
        },
        dniErrorMessage: "",
      };
    },
    methods: {
        close() {
            this.dialog = false;
        },
        triggerFileInput() {
      this.$refs.fileInput.click();
    },
        handleSubmit() {
            this.$emit('submit', this.form);
        },
        reset() {
            this.form.nombre = '';
            this.form.descripcion = '';
        },
        handleFileUpload(event) {
  const file = event.target.files[0]; // Obtén el archivo seleccionado
  console.log("Archivo seleccionado:", file); // Depuración

  if (file) {
    const validExtensions = ['image/jpeg', 'image/png'];
    if (!validExtensions.includes(file.type)) {
      alert('Solo se permiten archivos JPG o PNG.');
      return;
    }
    if (file.size > 2 * 1024 * 1024) { // Límite de tamaño de 2 MB
      alert('El archivo debe ser menor a 2 MB.');
      return;
    }

    this.fileName = file.name; // Actualiza el nombre del archivo
    console.log("Nombre del archivo actualizado:", this.fileName); // Depuración
  } else {
    console.log("No se seleccionó ningún archivo."); // Depuración
  }
}
        },
    props: {
      updating: {
        type: Boolean,
        required: false,
        default: false,
      },
      form: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  