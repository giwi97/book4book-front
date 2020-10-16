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
        style="float: left; width: 80%; margin-bottom: 20px; padding-top: -0px"
        class="mx-auto"
        id="bookContainer"
      >
        <a @click="getDetails()" href="http://localhost:8080/#/BookDetails">
          <v-hover v-slot:default="{ hover }">
            <v-img class="images" src="../assets/images/100.jpg">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue lighten-5 v-card--reveal display-3 white--text"
                  style="height: 100%; opacity: 90%"
                >
                  <label class="BookName"
                    >Tribe: On Homecoming and Belonging<br /><br /><b>
                      RS. 3500/=</b
                    ></label
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
                    >Science and Technology for Civil Services Preliminary and
                    Main Examinations<br /><br /><b> RS. 2500/=</b></label
                  >
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </a>
        <a @click="getDetails()" href="http://localhost:8080/#/BookDetails">
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

        <a @click="getDetails()" href="http://localhost:8080/#/BookDetails">
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
        <a @click="getDetails()" href="http://localhost:8080/#/BookDetails">
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
        <a @click="getDetails()" href="http://localhost:8080/#/BookDetails">
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
        <a @click="getDetails()" href="http://localhost:8080/#/BookDetails">
          <v-hover v-slot:default="{ hover }">
            <v-img class="images" src="../assets/images/10.jpg">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue lighten-5 v-card--reveal display-3 white--text"
                  style="height: 100%; opacity: 90%"
                >
                  <label class="BookName"
                    >"ANITA DESAI" the village<br /><br /><b> RS. 2500/=</b></label
                  >
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </a>
        <a @click="getDetails()" href="http://localhost:8080/#/BookDetails">
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
        <a @click="getDetails()" href="http://localhost:8080/#/BookDetails">
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
        <a @click="getDetails()" href="http://localhost:8080/#/BookDetails">
          <v-hover v-slot:default="{ hover }">
            <v-img class="images" src="../assets/images/107.jpg">
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
            <v-img class="images" src="../assets/images/108.jpg">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue lighten-5 v-card--reveal display-3 white--text"
                  style="height: 100%; opacity: 90%"
                >
                  <label class="BookName"
                    >Great Again: How to Fix Our Crippled America<br /><br /><b>
                      RS. 2300/=</b
                    ></label
                  >
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </a>
        <a @click="getDetails()" href="http://localhost:8080/#/BookDetails">
          <v-hover v-slot:default="{ hover }">
            <v-img class="images" src="../assets/images/109.jpg">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue lighten-5 v-card--reveal display-3 white--text"
                  style="height: 100%; opacity: 90%"
                >
                  <label class="BookName"
                    >The Better Angels of Our Nature: Why Violence Has
                    Declined<br /><br /><b> RS. 2350/=</b></label
                  >
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </a>
        <a @click="getDetails()" href="http://localhost:8080/#/BookDetails">
          <v-hover v-slot:default="{ hover }">
            <v-img class="images" src="../assets/images/110.jpg">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue lighten-5 v-card--reveal display-3 white--text"
                  style="height: 100%; opacity: 90%"
                >
                  <label class="BookName"
                    >The Art Of War Paperback<br /><br /><b>
                      RS. 2200/=</b
                    ></label
                  >
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </a>
        <a @click="getDetails()" href="http://localhost:8080/#/BookDetails">
          <v-hover v-slot:default="{ hover }">
            <v-img class="images" src="../assets/images/12.jpg">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue lighten-5 v-card--reveal display-3 white--text"
                  style="height: 100%; opacity: 90%"
                >
                  <label class="BookName">
                    Loard of the Ring - the fellowshio of the ring<br /><br /><b> RS. 2500/=</b></label
                  >
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </a>

        <!-- <img v-for="img in imgSet" v-bind:key="img" :src="img.location" /> -->
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
      imgSet: JSON.parse(localStorage.getItem("BookList")),
      img: 0,

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

      alert(JSON.stringify(this.imgSet));

      for (var len in bookss) {
        var img = (document.getElementById("a").src =
          "../assets/images/145.jpg");
        document.getElementById("bookContainer").appendChild(img);

        document.getElementById("bookContainer").innerHTML +=
          '<img class="images" src="' + bookss[len].location + '">';
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
  height: 210px;
  width: 150px;
  cursor: pointer;
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
