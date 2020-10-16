<template>
  <v-main>
    <v-flex>
      <v-flex v-for="(task, index) in tasks" v-bind:key="task">
        <v-card
          color="blue-grey lighten-4"
          class="pa-6 mx-auto"
          max-width="1175"
        >
          <v-card-text>
            <v-row>
              <v-list-item-avatar color="grey darken-3">
                <span class="white--text headline">Y</span>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>You</v-list-item-title>
              </v-list-item-content>
              <div class="text-right">02/10/2020</div>
            </v-row>
            <v-card-title primary-title>
              <div>
                <h3 class="subtitle-2 font-weight-bold">
                  Subject: {{ task.task }}
                </h3>
                <p class="subtitle-2 font-weight-bold">Description :</p>
                <div class="subtitle-2">{{ task.Description }}</div>
                <div>
                  <v-btn class="ma-2" text icon color="blue lighten-2">
                    <v-icon>mdi-thumb-up</v-icon>
                  </v-btn>

                  <v-btn class="ma-2" text icon color="red lighten-2">
                    <v-icon>mdi-thumb-down</v-icon>
                  </v-btn>
                </div>
              </div>
            </v-card-title>

            <v-row align="end" justify-md="end">
              <v-card-actions v-if="edit == false">
                <v-icon class="mr-2" @click="editTask(task, index)"
                  >mdi-pencil</v-icon
                >
                <v-dialog v-model="dialog" persistent max-width="290">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on" class="mr-2"
                      >mdi-delete</v-icon
                    >
                  </template>
                  <v-card>
                    <v-card-text class="subtitle-2 font-weight-bold">
                      Are you sure you want to delete this post ?
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="green darken-1"
                        text
                        @click="dialog = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        color="green darken-1"
                        text
                        @click="deleteTask(index, (dialog = false))"
                      >
                        Delete Post
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-card-actions>
              <v-card-actions v-if="edit != false">
                <v-icon disabled color="warning">mdi-pencil</v-icon>
                <v-icon disabled color="error"> mdi-delete</v-icon>
              </v-card-actions>
            </v-row>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-flex>

    <div id="app">
      <v-app>
        <v-content>
          <v-container>
            <v-card class="mx-auto teal lighten-4" max-width="650">
              <v-form ref="form" v-model="valid" lazy-validation>
                <p class="subtitle-1 font-weight-bold">Add Your Post</p>
                <v-text-field
                  :rules="[(v) => !!v || 'Subject is required']"
                  v-model="task"
                  label="Subject"
                  required
                >
                </v-text-field>
                <v-textarea
                  :rules="[(v) => !!v || 'Description is required']"
                  background-color="teal lighten-5"
                  auto-grow
                  rows="4"
                  row-height="30"
                  class="pa-3"
                  v-model="Description"
                  label="Description"
                  required
                >
                </v-textarea>
                <v-row align="center" justify="center">
                  <v-btn v-if="edit != true" color="normal" @click="reset">
                    clear
                  </v-btn>
                  <v-btn
                    :disabled="!valid"
                    v-if="edit != true"
                    color="primary"
                    @click="validate, addTask(task, Description, $event)"
                  >
                    Post
                  </v-btn>

                  <v-btn
                    v-if="edit == true"
                    color="success"
                    @click="updateTask($event, validate)"
                  >
                    Update
                  </v-btn>
                  <v-btn
                    v-if="edit == true"
                    color="secondary"
                    @click="cancelTask($event)"
                  >
                    Cancel
                  </v-btn>
                </v-row>
              </v-form>
            </v-card>
          </v-container>
        </v-content>
      </v-app>
    </div>
  </v-main>
</template>

<script>
export default {
  el: "#app",
  data: () => ({
    valid: true,
    task: "",
    Description: "",
    edit: false,
    delete: false,
    cancel: false,
    id2: 0,
    ind: 0,

    dialog: false,

    tasks: [],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },

    addTask: function (t, d, e) {
      if (this.$refs.form.validate()) {
        e.preventDefault();

        this.tasks.push({
          task: this.task,
          Description: this.Description,
        });

        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      }
    },
    editTask: function (t, i) {
      this.edit = !this.edit;
      this.task = t.task;
      this.Description = t.Description;
      this.ind = i;
    },
    updateTask: function (e) {
      e.preventDefault();
      this.edit = !this.edit;
      let taskdb = {
        task: this.task,
        Description: this.Description,
      };
      this.tasks[this.ind] = taskdb;
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
      let taskDB = JSON.parse(localStorage.getItem("tasks"));
      this.tasks = taskDB;
    },
    cancelTask: function (e) {
      e.preventDefault();
      this.Description = "";
      this.edit = !this.editTask;
    },
    deleteTask: function (i) {
      this.tasks.splice(i, 1);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },
  create: function () {
    let taskDB = JSON.parse(localStorage.getItem("tasks"));
    if (taskDB === null) {
      this.tasks = [];
    } else {
      this.tasks = taskDB;
    }
  },
};
</script>