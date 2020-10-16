<template>
  <v-content>
    <div class="staticHero">
      <v-img max-height="150" src="../assets/images/ggg.jpg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">Add Books</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <div style="margin-left: 8%; width: 92%; padding-top: 10px">
      <v-card style="float: left; width: 92%" class="mx-auto">
        <div id="addBook">Add Book</div>
        <div style="float: left; width: 220px">
          <div
            class="imagePreviewWrapper"
            :style="{ 'background-image': `url(${previewImage})` }"
            @click="selectImage"
          ></div>
          <input
            id="imgupload"
            ref="fileInput"
            type="file"
            @change="pickFile"
          />
        </div>
        <div style="float: left; width: 74%; margin-left: 30px" class="v-row">
          <v-text-field
            label="Book Name"
            :rules="rules"
            hide-details="auto"
            v-model="name"
          ></v-text-field>
          <v-text-field
            label="Author"
            :rules="rules"
            hide-details="auto"
            v-model="Author"
          ></v-text-field>
          <v-text-field
            label="Price"
            :rules="rules"
            hide-details="auto"
            v-model="price"
          ></v-text-field>
          <v-text-field
            label="Category"
            :rules="rules"
            hide-details="auto"
            v-model="category"
          ></v-text-field>
          <v-textarea
            clearable
            clear-icon="mdi-close-circle"
            label="Descrition"
            value=""
            rows="4"
            v-model="description"
          ></v-textarea>
        </div>
        <div style="float: right; margin: 0px 39px 20px 0px">
          <v-btn id="add" depressed color="success" @click="Addbtn">
            Add
          </v-btn>
          <v-btn id="edit" depressed color="primary"> Edit </v-btn>
          <v-btn id="delete" depressed color="error"> Delete </v-btn>
        </div>
        <v-progress-linear
          color="cyan darken-2"
          rounded
          value="100"
        ></v-progress-linear>
        <h3>Additional Images</h3>
      </v-card>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "imageUpload",
  data() {
    return {
      items: [],
      itemlist: [],
      previewImage: null,
      name: "",
      Author: "",
      price: "",
      category: "",
      description: "",
      ReviewArray: [],
      reviewText: this.reviewText,
    };
  },
  mounted: function() {
    this.apendreview();
  },
  methods: {
    selectitem: function() {
      alert();
    },
    SetReview: function() {
      this.ReviewArray.push(
        '<tr> <ul><li><label class="R_Name">Harshit Sharma</label></li></ul><label class="R_details">' +
          document.getElementById("reviewText").value +
          "</label></tr>"
      );

      this.$session.set("Addreview", this.ReviewArray);
      document.getElementById("reviewText").value = "";
      this.apendreview();
    },
    apendreview: function() {
      var ReviewArraynext = this.$session.get("Addreview");
      for (var key in ReviewArraynext) {
        document.getElementById("reviewTable").insertRow(0).innerHTML =
          ReviewArraynext[key];
      }
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
    onChange: function() {
      var src = document.getElementById("Image1File").value;
      // var target = document.getElementById("mainImage1");
      alert(src);
    },

    selectImage() {
      this.$refs.fileInput.click();
    },
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    },
    Addbtn() {
      var book = {
        Name: this.name,
        Author: this.Author,
        price: this.price,
        category: this.category,
        description: this.description,
        // location: document.getElementById("imgupload").value,
        location: "../assets/images/science.jpg",
      };

      var json = JSON.parse(localStorage.getItem("BookList"));
      if (!json === "") {
        this.itemlist = json;
      }
      this.itemlist.push(book);
      localStorage.setItem("BookList", JSON.stringify(this.itemlist));
      alert(json[0].location);
    },
  },
};
</script>

<style>
.imagePreviewWrapper {
  width: 220px;
  height: 304px;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
  padding-top: 20px;
  margin: 20px 0px 20px 0px;
}

.small_image {
  margin-top: 10px;
  float: left;
  margin-right: 10px;
}

.uploading-image {
  display: flex;
}

#addBook {
  height: 45px;
  background-image: linear-gradient(79deg, #1dcce0, teal);
  color: white;
  font-weight: bold;
  text-align: center;
  padding-top: 10px;
  font-size: 18px;
  margin: -20px -11px 10px -11px;
}
#add,
#edit,
#delete {
  margin-left: 10px;
}
/* jhdcjch */
</style>
