<template>
  <v-content>
    <div style="margin-left: 8%; width: 92%">
      <router-link to="/AddBook"> Add Book</router-link>
      <br />
      <v-card style="float: left; width: 92%" class="mx-auto">
        <div style="float: left; width: 220px">
          <v-img
            id="mainImage"
            max-height="400"
            max-width="200"
            src="../assets/images/science.jpg"
          ></v-img>
          <v-img
            id="Image1"
            class="small_image"
            max-height="100"
            max-width="59.5"
            src="../assets/images/science.jpg"
          ></v-img>
          <v-img
            id="Image2"
            class="small_image"
            max-height="100"
            max-width="59.5"
            src="../assets/images/science.jpg"
          ></v-img>
          <v-img
            id="Image3"
            class="small_image"
            max-height="100"
            max-width="59.5"
            src="../assets/images/science.jpg"
          ></v-img>
        </div>
        <div style="float: left; width: 74%; margin-left: 30px" class="v-row">
          <h1>
            <b>
              {{ $route.params.id }}
              Science and Technology for Civil Services Preliminary and Main
              Examinations</b
            >
          </h1>
          <p>by Ravi P. Agrahari (Author)</p>
          <v-img
            style="float: left"
            id="Image3"
            max-width="80"
            src="../assets/images/ratings.png"
          ></v-img>
          <span style="float: left; margin-top: -5px; margin-left: 10px">
            88 ratings</span
          >
          <v-progress-linear
            color="cyan darken-2"
            rounded
            value="100"
          ></v-progress-linear
          >vue
          <br />
          <h3>Rs. 2500.00/=</h3>
          <v-btn outlined rounded text style="float: right; margin-right: 50px">
            Book Now
          </v-btn>
          <p style="margin-top: -20px">(Inclusive of all taxes)</p>

          <p style="color: green">In Stock</p>
          <label>Quantity</label>
          <input
            type="number"
            value="1"
            :rules="rules"
            hide-details="auto"
            style="width: 55px; margin-left: 15px"
          />
        </div>
        <br />
        <div
          style="width: 96%; margin-top: 20px; margin-left: 10px; float: left"
        >
          <p class="text-justify">
            Science and Technology is one of the most dynamic subjects in the
            UPSC examination. In recent years, UPSC is emphasising on dynamic
            cum analytical aspect of science and Technology. Keeping this in
            mind and aligned as per the examination trends, the fourth edition
            of science and Technology has been thoroughly revised to suit the
            needs of students appearing for UPSC Preliminary and Main
            examination. This book delves into important aspect of the
            examination In detail, providing aspirants with a ready-made
            amalgamation of basic concepts intertwined with recent developments
            in the various fields making it easier for students from non-science
            background to comprehend and retain.
          </p>
        </div>
        <v-progress-linear
          color="cyan darken-2"
          rounded
          value="100"
        ></v-progress-linear>
        <h3>Related Books</h3>
        <div id="relateditemlist">
          <div id="relatedItemgroup">
            <a
              class="related_image"
              @click="getDetails()"
              href="http://localhost:8080/#/BookDetails"
            >
              <v-hover v-slot:default="{ hover }">
                <v-img class="images" src="../assets/images/101.jpg">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out blue lighten-5 v-card--reveal display-3 white--text"
                      style="height: 100%; opacity: 90%"
                    >
                      <label class="BookName"
                        >"The Hobbit Paperback"<br /><br /><b>
                          "RS. 2100/=</b
                        ></label
                      >
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-hover>
            </a>

            <a
              class="related_image"
              @click="getDetails()"
              href="http://localhost:8080/#/BookDetails"
            >
              <v-hover v-slot:default="{ hover }">
                <v-img class="images" src="../assets/images/11.jpg">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out blue lighten-5 v-card--reveal display-3 white--text"
                      style="height: 100%; opacity: 90%"
                    >
                      <label class="BookName"
                        >HALMET the graphyc novel<br /><br /><b>
                          "RS. 1500/=</b
                        ></label
                      >
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-hover>
            </a>
            <a
              class="related_image"
              @click="getDetails()"
              href="http://localhost:8080/#/BookDetails"
            >
              <v-hover v-slot:default="{ hover }">
                <v-img class="images" src="../assets/images/103.jpg">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out blue lighten-5 v-card--reveal display-3 white--text"
                      style="height: 100%; opacity: 90%"
                    >
                      <label class="BookName"
                        >the Quarantine Cooking Book<br /><br /><b>
                          RS. 900/=</b
                        ></label
                      >
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-hover>
            </a>
            <a
              class="related_image"
              @click="getDetails()"
              href="http://localhost:8080/#/BookDetails"
            >
              <v-hover v-slot:default="{ hover }">
                <v-img class="images" src="../assets/images/104.jpg">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out blue lighten-5 v-card--reveal display-3 white--text"
                      style="height: 100%; opacity: 90%"
                    >
                      <label class="BookName"
                        >How to Publish a Book on Amazon in 2020<br /><br /><b>
                          RS. 1100/=</b
                        ></label
                      >
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-hover>
            </a>
            <a
              class="related_image"
              @click="getDetails()"
              href="http://localhost:8080/#/BookDetails"
            >
              <v-hover v-slot:default="{ hover }">
                <v-img class="images" src="../assets/images/10.jpg">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out blue lighten-5 v-card--reveal display-3 white--text"
                      style="height: 100%; opacity: 90%"
                    >
                      <label class="BookName"
                        >"ANITA DESAI" the village<br /><br /><b>
                          RS. 2500/=</b
                        ></label
                      >
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-hover>
            </a>
            <a
              class="related_image"
              @click="getDetails()"
              href="http://localhost:8080/#/BookDetails"
            >
              <v-hover v-slot:default="{ hover }">
                <v-img class="images" src="../assets/images/105.jpg">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out blue lighten-5 v-card--reveal display-3 white--text"
                      style="height: 100%; opacity: 90%"
                    >
                      <label class="BookName"
                        >The Institute: A Novel Hardcover<br /><br /><b>
                          RS. 2900/=</b
                        ></label
                      >
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-hover>
            </a>
            <a
              class="related_image"
              @click="getDetails()"
              href="http://localhost:8080/#/BookDetails"
            >
              <v-hover v-slot:default="{ hover }">
                <v-img class="images" src="../assets/images/106.jpg">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out blue lighten-5 v-card--reveal display-3 white--text"
                      style="height: 100%; opacity: 90%"
                    >
                      <label class="BookName"
                        >The Da Vinci Code (Robert Langdon) Paperback<br /><br /><b>
                          RS. 2800/=</b
                        ></label
                      >
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-hover>
            </a>
             
             
          </div>
        </div>
        <v-progress-linear
          color="cyan darken-2"
          rounded
          value="100"
        ></v-progress-linear>
        <h3>Customer Reviews</h3>
        <table id="reviewTable" v-html="test"></table>

        <v-text-field id="reviewText" label="Write Your Review"></v-text-field>
        <v-btn
          id="submitbtn"
          rounded
          color="cyan darken-2"
          dark
          @click="SetReview()"
        >
          SUBMIT
        </v-btn>
      </v-card>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "BookOffers",

  data() {
    return {
      items: [],
      ReviewArray: [],

      reviewText: this.reviewText,
    };
  },
  mounted: function () {
    this.apendreview();
  },
  methods: {
    selectitem: function () {
      alert();
    },
    SetReview: function () {
      this.ReviewArray.push(
        '<tr> <ul><li><label class="R_Name">Harshit Sharma</label></li></ul><label class="R_details">' +
          document.getElementById("reviewText").value +
          "</label></tr>"
      );

      this.$session.set("Addreview", this.ReviewArray);
      document.getElementById("reviewText").value = "";
      this.apendreview();
    },
    apendreview: function () {
      var ReviewArraynext = this.$session.get("Addreview");
      for (var key in ReviewArraynext) {
        document.getElementById("reviewTable").insertRow(0).innerHTML =
          ReviewArraynext[key];
      }
    },
  },
};
</script>

<style >
.small_image {
  margin-top: 10px;
  float: left;
  margin-right: 10px;
}
.related_image {
  margin-top: 10px;
  float: left;
  margin-left: 31px;
  margin-bottom: 15px;
}
.related_image:hover {
  opacity: 50%;
}
#relateditemlist {
  overflow: hidden;
}
#relatedItemgroup {
  position: relative;
  width: 1900px;
  animation: myfirst 15s 2;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}
@keyframes myfirst {
  0% {
    margin-left: -100px;
  }
  10% {
    margin-left: -200px;
  }
  20% {
    margin-left: -300px;
  }
  30% {
    margin-left: -400px;
  }
  40% {
    margin-left: -500px;
  }
  50% {
    margin-left: -600px;
  }
  60% {
    margin-left: -600px;
  }
  70% {
    margin-left: -500px;
  }
  80% {
    margin-left: -400px;
  }
  90% {
    margin-left: -300px;
  }
  100% {
    margin-left: -200px;
  }
}
#submitbtn {
  width: 100%;
}
.R_Name {
  font-size: 15px;
  font-weight: bold;
}
.R_details {
  margin-left: 30px;
}
/* jhdcjch */
</style>
