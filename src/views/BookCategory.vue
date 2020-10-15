<template>
  <v-content>
    <div style="margin-left: 1%; width: 100%; padding: 20px 0px 20px 0px">
      <div style="float: left; width: 17%">
        <v-card style="margin-right: 10px">
          <div id="categoryHead">Popular Categories</div>

          <v-btn
            x-small
            color="teal"
            dark
            class="categorybtn"
            @click="selecCat('Art & Architecture')"
          >
            Art & Architecture
          </v-btn>
          <v-btn
            x-small
            color="teal"
            dark
            class="categorybtn"
            @click="selecCat('Biography & True Stories')"
          >
            Biography & True Stories
          </v-btn>
          <v-btn
            x-small
            color="teal"
            dark
            class="categorybtn"
            @click="selecCat('Literature & literary studies')"
          >
            Literature & literary studies
          </v-btn>
          <v-btn
            x-small
            color="teal"
            dark
            class="categorybtn"
            @click="selecCat('Lifestyle, sport & leisure')"
          >
            Lifestyle, sport & leisure
          </v-btn>
          <v-btn
            x-small
            color="teal"
            dark
            class="categorybtn"
            @click="selecCat('Children & educational')"
          >
            Children's & educational
          </v-btn>
          <v-btn
            x-small
            color="teal"
            dark
            class="categorybtn"
            @click="selecCat('Economics, business & management')"
          >
            Business & management
          </v-btn>
          <v-btn
            x-small
            color="teal"
            dark
            class="categorybtn"
            @click="selecCat('Fiction & related items')"
          >
            Fiction & related items
          </v-btn>
          <v-btn
            x-small
            color="teal"
            dark
            class="categorybtn"
            @click="selecCat('Health & personal development')"
          >
            Health & personal development
          </v-btn>
        </v-card>
        <v-card style="margin-right: 10px; margin-top: 10px">
          <div id="categoryHead">Popular Authors</div>

          <v-btn
            x-small
            color="teal"
            dark
            class="categorybtn"
            @click="selecCat('ALYSON NOEL')"
          >
            ALYSON NOEL
          </v-btn>
          <v-btn
            x-small
            color="teal"
            dark
            class="categorybtn"
            @click="selecCat('AMANDA HOCKING')"
          >
            AMANDA HOCKING
          </v-btn>
          <v-btn
            x-small
            color="teal"
            dark
            class="categorybtn"
            @click="selecCat('DAN BROWN')"
          >
            DAN BROWN
          </v-btn>
          <v-btn
            x-small
            color="teal"
            dark
            class="categorybtn"
            @click="selecCat('DANIELLE STEEL')"
          >
            DANIELLE STEEL
          </v-btn>
          <v-btn
            x-small
            color="teal"
            dark
            class="categorybtn"
            @click="selecCat('JAMES PATTERSON')"
          >
            JAMES PATTERSON
          </v-btn>
          <v-btn
            x-small
            color="teal"
            dark
            class="categorybtn"
            @click="selecCat('JEFFREY ARCHER')"
          >
            JEFFREY ARCHER
          </v-btn>
          <v-btn
            x-small
            color="teal"
            dark
            class="categorybtn"
            @click="selecCat('JOHN GREEN')"
          >
            JOHN GREEN
          </v-btn>
          <v-btn
            x-small
            color="teal"
            dark
            class="categorybtn"
            @click="selecCat('JOHN GRISHAM')"
          >
            JOHN GRISHAM
          </v-btn>
          <v-btn
            x-small
            color="teal"
            dark
            class="categorybtn"
            @click="selecCat('NORA ROBERTS')"
          >
            NORA ROBERTS
          </v-btn>
          <v-btn
            x-small
            color="teal"
            dark
            class="categorybtn"
            @click="selecCat('STEPHEN KING')"
          >
            STEPHEN KING
          </v-btn>
        </v-card>
      </div>
      <v-card
        id="categoryHead"
        style="float: left; width: 80%; height: 50px; margin: 0px 0px 10px 0px"
      >
        <span>{{ btnText }}</span>
      </v-card>
      <v-card
        style="float: left; width: 80%; margin-bottom: 20px"
        class="mx-auto"
        id="bookContainer"
      >
        <a @click="getDetails()" href="http://localhost:8080/#/BookDetails">
          <v-hover v-slot:default="{ hover }">
            <v-img class="images" src="../assets/images/science.jpg">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue lighten-5 v-card--reveal display-3 white--text"
                  style="height: 100%; opacity: 90%"
                >
                  <label class="BookName"
                    >"Science and Technology for Civil Services Preliminary and
                    Main Examinations"<br /><br /><b> "RS. 2500/="=</b></label
                  >
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </a>
        <a @click="getDetails()" href="http://localhost:8080/#/BookDetails">
          <v-hover v-slot:default="{ hover }">
            <v-img class="images" src="../assets/images/science.jpg">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue lighten-5 v-card--reveal display-3 white--text"
                  style="height: 100%; opacity: 90%"
                >
                  <label class="BookName"
                    >"Science and Technology for Civil Services Preliminary and
                    Main Examinations"<br /><br /><b> "RS. 2500/="=</b></label
                  >
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </a>
        <a @click="getDetails()" href="http://localhost:8080/#/BookDetails">
          <v-hover v-slot:default="{ hover }">
            <v-img class="images" src="../assets/images/science.jpg">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue lighten-5 v-card--reveal display-3 white--text"
                  style="height: 100%; opacity: 90%"
                >
                  <label class="BookName"
                    >"Science and Technology for Civil Services Preliminary and
                    Main Examinations"<br /><br /><b> "RS. 2500/="=</b></label
                  >
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </a>
        <a @click="getDetails()" href="http://localhost:8080/#/BookDetails">
          <v-hover v-slot:default="{ hover }">
            <v-img class="images" src="../assets/images/science.jpg">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue lighten-5 v-card--reveal display-3 white--text"
                  style="height: 100%; opacity: 90%"
                >
                  <label class="BookName"
                    >"Science and Technology for Civil Services Preliminary and
                    Main Examinations"<br /><br /><b> "RS. 2500/="=</b></label
                  >
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </a>

        <a @click="getDetails()" href="http://localhost:8080/#/BookDetails">
          <v-hover v-slot:default="{ hover }">
            <v-img class="images" src="../assets/images/science.jpg">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue lighten-5 v-card--reveal display-3 white--text"
                  style="height: 100%; opacity: 90%"
                >
                  <label class="BookName"
                    >"Science and Technology for Civil Services Preliminary and
                    Main Examinations"<br /><br /><b> "RS. 2500/="=</b></label
                  >
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </a>
        <a @click="getDetails()" href="http://localhost:8080/#/BookDetails">
          <v-hover v-slot:default="{ hover }">
            <v-img class="images" src="../assets/images/science.jpg">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue lighten-5 v-card--reveal display-3 white--text"
                  style="height: 100%; opacity: 90%"
                >
                  <label class="BookName"
                    >"Science and Technology for Civil Services Preliminary and
                    Main Examinations"<br /><br /><b> "RS. 2500/="=</b></label
                  >
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </a>
        <a @click="getDetails()" href="http://localhost:8080/#/BookDetails">
          <v-hover v-slot:default="{ hover }">
            <v-img class="images" src="../assets/images/science.jpg">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue lighten-5 v-card--reveal display-3 white--text"
                  style="height: 100%; opacity: 90%"
                >
                  <label class="BookName"
                    >"Science and Technology for Civil Services Preliminary and
                    Main Examinations"<br /><br /><b> "RS. 2500/="=</b></label
                  >
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </a>
        <a @click="getDetails()" href="http://localhost:8080/#/BookDetails">
          <v-hover v-slot:default="{ hover }">
            <v-img class="images" src="../assets/images/science.jpg">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue lighten-5 v-card--reveal display-3 white--text"
                  style="height: 100%; opacity: 90%"
                >
                  <label class="BookName"
                    >"Science and Technology for Civil Services Preliminary and
                    Main Examinations"<br /><br /><b> "RS. 2500/="=</b></label
                  >
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </a>
        <a @click="getDetails()" href="http://localhost:8080/#/BookDetails">
          <v-hover v-slot:default="{ hover }">
            <v-img class="images" src="../assets/images/science.jpg">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue lighten-5 v-card--reveal display-3 white--text"
                  style="height: 100%; opacity: 90%"
                >
                  <label class="BookName"
                    >"Science and Technology for Civil Services Preliminary and
                    Main Examinations"<br /><br /><b> "RS. 2500/="=</b></label
                  >
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </a>
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
      btnText: "All Category",

      reviewText: this.reviewText,
    };
  },

  mounted() {
    // this.getBook();
  },
  methods: {
    selecCat(a) {
      this.btnText = a;
    },
    getBook: function () {
      var bookss = JSON.parse(localStorage.getItem("BookList"));

      for (var len in bookss) {
        // alert(bookss[len].location);
        // alert(bookss[len].Name);
        // alert(bookss[len].price);
        // alert(bookss[len].description);

        // var img = document.createElement('img')
        // img.setAttribute("src", bookss[len].location);
        // document.getElementById('bookContainer').appendChild( "<v-img class=\"images\" src="+bookss[len].location+">");

        document.getElementById("bookContainer").innerHTML +=
          '<a @click="getDetails()" href="http://localhost:8080/#/BookDetails">\n\
          <v-hover v-slot:default="{ hover }">\n\
            <v-img class="images" src="' +
          bookss[len].location +
          '">\n\
              <v-expand-transition>\n\
                <div v-if="hover" class="d-flex transition-fast-in-fast-out blue lighten-5 v-card--reveal display-3 white--text" style="height: 100%; opacity: 90%">\n\
                  <label class="BookName">"' +
          bookss[len].Name +
          '"<br /><br /><b> "' +
          bookss[len].price +
          '"=</b></label>\n\
                </div>\n\
              </v-expand-transition>\n\
            </v-img>\n\
          </v-hover>\n\
        </a>';
      }
    },
  },
};
</script>

<style >
.images {
  margin-top: 50px;
  float: left;
  margin-right: 29px;
  margin-left: 29px;
  max-height: 350px;
  max-width: 150px;
}
.categorybtn {
  width: 100%;
}
#categoryHead {
  height: 45px;
  background-color: teal;
  color: white;
  font-weight: bold;
  text-align: center;
  padding-top: 10px;
  font-size: 18px;
}
.btnView {
  margin-top: 80px;
  opacity: 100%;
  width: 50px;
  padding: 0px;
}
.item {
  color: slategrey;
  font-size: 25px;
  margin-left: 45px;
  float: left;
  /* margin-top: 100px; */
}
.BookName {
  font-size: 14px;
  color: teal;
  margin-left: 5px;
  margin-right: 5px;
  line-height: 20px;
  margin-top: 15px;
  text-align: center;
  float: left;
  opacity: 100%;
  font-weight: bold;
}
</style>
