<template>
  <v-main>
    <v-flex>
      <v-flex v-for="(task, index) in tasks" v-bind:key="task">
        <v-card color="blue-grey lighten-4" class="mx-auto" max-width="1175">
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
                        @click="deleteTask(index)"
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
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn text color="deep-purple accent-4" @click="show = !show">
              Comments
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-text-field label="Reply" filled rounded dense>
               
              </v-text-field>
                <v-row align="end" justify-md="end">
               <v-btn rounded color="primary"> send </v-btn>
                </v-row>
            </div>
          </v-expand-transition>
        </v-card>
      </v-flex>
    </v-flex>

    <div id="app">
      <v-app>
        <v-content>
          <v-container>
            <v-card class="mx-auto teal lighten-4" max-width="650">
              <v-form ref="form">
                <p class="subtitle-1 font-weight-bold">Add Your Post </p>
                <v-text-field class="pa-3" v-model="task" label="Subject">
                </v-text-field>
                <v-textarea
                  background-color="teal lighten-5"
                  auto-grow
                  rows="4"
                  row-height="30"
                  class="pa-3"
                  v-model="Description"
                  label="Description"
                >
                </v-textarea>
                <v-row align="center" justify="center">
                  <v-btn
                    v-if="edit != true"
                    color="primary"
                    @click="addTask(task, Description, $event)"
                  >
                    Post
                  </v-btn>
                  <v-btn
                    v-if="edit == true"
                    color="success"
                    @click="updateTask($event)"
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
    task: "",
    Description: "",
    edit: false,
    delete: false,
    cancel: false,
    id2: 0,
    ind: 0,
    show: false,
    dialog: false,

    tasks: [],
  }),

  methods: {
    addTask: function (t, d, e) {
      e.preventDefault();
      this.tasks.push({
        task: this.task,
        Description: this.Description,
      });
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
      this.task = "";
      this.Description = "";
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
      this.task = "";
      this.Description = "";
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