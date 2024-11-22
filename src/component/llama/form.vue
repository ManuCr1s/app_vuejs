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
                            <v-icon size="12" class="me-2 material-icons-round"
                                >edit</v-icon
                            >
                                Editar
                            </v-btn>
                        </template>
                        <v-card class="card-shadow border-radius-xl">
                            <form @submit.prevent="handleSubmit">
                                <div class="card-header-padding card-border-bottom">
                                <span class="font-weight-bold text-h5 text-typo mb-0">Formulario</span>
                                </div>
                                <v-card-text class="card-padding">
                                <v-container class="px-0">
                                    <v-row>
                                    <v-col cols="12">
                                        <v-text-field
                                        hide-details
                                        class="
                                            input-style
                                            font-size-input
                                            text-light-input
                                            placeholder-light
                                            input-icon
                                        "
                                        dense
                                        flat
                                        filled
                                        solo
                                        height="43"
                                        placeholder="Número de arete"
                                        v-model="form.arete"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                        hide-details
                                        class="
                                            input-style
                                            font-size-input
                                            text-light-input
                                            placeholder-light
                                            input-icon
                                        "
                                        dense
                                        flat
                                        filled
                                        solo
                                        height="43"
                                        placeholder="Nombre de llama"
                                        v-model="form.nomllama"
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12">
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
                                                hide-details
                                                dense
                                                flat
                                                filled
                                                solo
                                                height="43"
                                                class="
                                                    input-style
                                                    font-size-input
                                                    text-light-input
                                                    placeholder-light
                                                    input-icon
                                                "
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
                                <v-col cols="12">
                                          <v-select
                                          hide-details
                                          class="
                                              input-style
                                              font-size-input
                                              text-light-input
                                              placeholder-light
                                              input-icon
                                          "
                                          dense
                                          flat
                                          filled
                                          solo
                                          height="43"
                                          placeholder="Seleccione sexo"
                                          v-model="form.sexo"
                                          :items="opciones"
                                          ></v-select>
                                      </v-col>
                                      <v-col cols="12">
                                          <v-select
                                          hide-details
                                          class="
                                              input-style
                                              font-size-input
                                              text-light-input
                                              placeholder-light
                                              input-icon
                                          "
                                          dense
                                          flat
                                          filled
                                          solo
                                          height="43"
                                          placeholder="Seleccione raza"
                                          v-model="form.raza"
                                          :items="opciones"
                                          ></v-select>
                                      </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.peso_vivo"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Peso vivo"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">KG</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.peso_nacimiento"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Peso al nacimiento"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">KG</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.peso_destete"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Peso al destete"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">KG</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.peso_ano"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Peso al año"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">KG</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                          <v-select
                                          hide-details
                                          class="
                                              input-style
                                              font-size-input
                                              text-light-input
                                              placeholder-light
                                              input-icon
                                          "
                                          dense
                                          flat
                                          filled
                                          solo
                                          height="43"
                                          placeholder="Seleccione color de pelaje"
                                          v-model="form.color_pelaje"
                                          :items="opciones"
                                          ></v-select>
                                      </v-col>
                                      <v-col cols="12">
                                          <v-select
                                          hide-details
                                          class="
                                              input-style
                                              font-size-input
                                              text-light-input
                                              placeholder-light
                                              input-icon
                                          "
                                          dense
                                          flat
                                          filled
                                          solo
                                          height="43"
                                          placeholder="Seleccione color de ojos"
                                          v-model="form.color_ojo"
                                          :items="opciones"
                                          ></v-select>
                                      </v-col>
                                      <v-col cols="12">
                                          <v-select
                                          hide-details
                                          class="
                                              input-style
                                              font-size-input
                                              text-light-input
                                              placeholder-light
                                              input-icon
                                          "
                                          dense
                                          flat
                                          filled
                                          solo
                                          height="43"
                                          placeholder="Seleccione dentición"
                                          v-model="form.color_denticion"
                                          :items="opciones"
                                          ></v-select>
                                      </v-col>
                                      <v-col cols="12">
                                        <v-text-field
                                            v-model="form.numpartos"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Número de partos"
                                            type="number"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
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
                                                v-model="form.fechaparto"
                                                hide-details
                                                dense
                                                flat
                                                filled
                                                solo
                                                height="43"
                                                class="
                                                    input-style
                                                    font-size-input
                                                    text-light-input
                                                    placeholder-light
                                                    input-icon
                                                "
                                                placeholder="Fecha de último parto"
                                                readonly
                                                v-bind="attrs"
                                                v-on="on"
                                            ></v-text-field>
                                        </template>
                                        <v-date-picker
                                            v-model="form.fechaparto"
                                            no-title
                                            scrollable
                                            @input="menu = false"
                                        ></v-date-picker>
                                    </v-menu>
                                </v-col>
                                <v-col cols="12">
                                          <v-select
                                          hide-details
                                          class="
                                              input-style
                                              font-size-input
                                              text-light-input
                                              placeholder-light
                                              input-icon
                                          "
                                          dense
                                          flat
                                          filled
                                          solo
                                          height="43"
                                          placeholder="Seleccione estado reproductivo"
                                          v-model="form.est_reproductivo"
                                          :items="opciones"
                                          ></v-select>
                                      </v-col>
                                      <v-col cols="12">
                                          <v-select
                                          hide-details
                                          class="
                                              input-style
                                              font-size-input
                                              text-light-input
                                              placeholder-light
                                              input-icon
                                          "
                                          dense
                                          flat
                                          filled
                                          solo
                                          height="43"
                                          placeholder="Seleccione estado de llama"
                                          v-model="form.est_llama"
                                          :items="opciones"
                                          ></v-select>
                                      </v-col>
                                      <v-col cols="12">
                                        <v-text-field
                                            v-model="form.altura_cabeza"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Altura de cabeza"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.long_ancho_oreja"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Longitud de ancho de oreja"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.long_punta_oreja"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Longitud de punta oreja"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.long_arqueo_oreja"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Longitud de arqueo de oreja"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.long_base_oreja"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Longitud de base de oreja"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.long_ancho_facial_nariz"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Longitud de ancho facial nariz"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.long_nuca_punta_nariz"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Longitud de nuca punta nariz"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.peri_tabique_nasal"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Perímetro de tabique nasal"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.peri_dorso_nariz_hocico"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Perímetro de dorso nariz hocico"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.long_garganta_belfos"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Longitud de garganta belfos"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.long_amplitud_mandibular"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Longitud de amplitud mandibular"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.long_mandibula_max_superior"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Longitud de mandíbula maxilar superior"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.peri_cuello_superior"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Perímetro de cuello superior"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.peri_cuello_base"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Perímetro de cuello base"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.peri_punta_hombros"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Perímetro de punta hombros"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.peri_punta_hombro_anca"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Perímetro de punta hombro anca"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.altura_cruz"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Altura cruz"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.altura_inser_cuello_nuca"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Altura inserción cuello nuca"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.long_base_pecho_cruz"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Longitud de base pecho cruz"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.peri_toracico"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Perímetro torácico"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.long_punta_codo_rodilla"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Longitud de punta codo rodilla"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.long_rodilla_menudillo"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Longitud de rodilla menudillo"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.peri_cana"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Perímetro caña"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.peri_muneca"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Perímetro muñeca"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.altura_grupa"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Altura grupa"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.long_ins_cuello_ins_cola"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Longitud de inserción cuello inserción cola"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.long_cola"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Longitud de cola"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.long_punta_cadera"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Longitud de punta cadera"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.long_isquion_punta_anca"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Longitud de isquion punta anca"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.long_punta_isquiones"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Longitud de punta isquiones"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.long_corvejon_menudillo"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Longitud de corvejón menudillo"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.long_corvejon_rotula"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Longitud de corvejón rótula"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.long_amplitud_punta_corvejon"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Longitud de amplitud punta corvejón"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="form.long_cruz_grupa"
                                            hide-details
                                            dense
                                            flat
                                            filled
                                            solo
                                            height="43"
                                            class="
                                                input-style
                                                font-size-input
                                                text-light-input
                                                placeholder-light
                                                input-icon
                                            "
                                            placeholder="Longitud de cruz grupa"
                                            type="number"
                                        >
                                            <template v-slot:append>
                                                <span class="text-sm font-weight-normal text-body" style="margin-left: 8px; color: inherit;">CM</span>
                                            </template>
                                        </v-text-field>
                                    </v-col>                        



                                </v-row>
                                </v-container>
                                </v-card-text>
                                <v-card-actions class="card-padding d-flex justify-end">
                                <v-btn
                                    @click="close"
                                    elevation="0"
                                    :ripple="false"
                                    height="43"
                                    class="
                                    font-weight-normal
                                    text-capitalize
                                    btn-ls btn-outline-secondary
                                    bg-transparent
                                    py-3
                                    px-6
                                    "
                                    >Cancelar</v-btn
                                >
                                <v-btn
                                    elevation="0"
                                    :ripple="false"
                                    height="43"
                                    class="
                                    font-weight-normal
                                    text-capitalize
                                    btn-ls btn-primary
                                    bg-gradient-success
                                    py-3
                                    px-6
                                    "
                                    type="submit"
                                    >Guardar</v-btn
                                >
                                </v-card-actions>
                            </form>
                        </v-card>
     </v-dialog>
</template>
<script>
export default{
    name:'RoleForm',
    data(){
        return {
            dialog:false,
            form: {
                nombre: '',
                descripcion: ''
            }
        }
    },
    methods:{
    close() {
      this.dialog = false;
    },
    handleSubmit() {
      this.$emit('submit', this.form);
    },
    reset(){
        this.form.nombre ='';
        this.form.descripcion = '';
    }
    },
    props:{
        updating: {
            type: Boolean,
            required: false,
            default: false
        },
        form:{
            type:Object,
            required:true
        },
    }
}
</script>