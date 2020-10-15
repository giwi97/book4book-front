<template>
  <v-main>
    <template>
      <v-btn text color="deep-purple accent-4" @click="show = !show">
        Add A Post
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </template>
    <div v-show="show">
      <v-divider></v-divider>
      <div id="app">
        <v-app>
          <v-content>
            <v-container>
                <v-card class="mx-auto" max-width="650" outlined>
              <v-form ref="form">
                <v-text-field class="pa-3" v-model="task" label="Subject">
                </v-text-field>
                <v-textarea
                  filled
                  auto-grow
                  rows="4"
                  row-height="30"
                  shaped
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
    </div>

    <v-flex>
      <v-flex v-for="(task, index) in tasks" v-bind:key="task">
        <v-card color="blue-grey lighten-4" class="mx-auto" max-width="1175">
          <v-card-text>
            <v-card-title primary-title>
              <div>
                <p class="subtitle-1 font-weight-bold text--primary">Me</p>
                <h3 class="subtitle-2 font-weight-bold">
                  Subject: {{ task.task }}
                </h3>
                <p class="subtitle-2 font-weight-bold">Description :</p>
                <div class="subtitle-2">{{ task.Description }}</div>
              </div>
            </v-card-title>
            <v-card-actions v-if="edit == false">
              <v-btn color="warning" @click="editTask(task, index)">Edit</v-btn>
              <v-btn color="error" @click="deleteTask(index)">Delete</v-btn>
            </v-card-actions>
            <v-card-actions v-if="edit != false">
              <v-btn disabled color="warning">edit</v-btn>
              <v-btn disabled color="error"> Delete</v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-flex>
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