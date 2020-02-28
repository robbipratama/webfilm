<template>
    <div class="container">
      <div class="header">
          <h1 class="header-title">BUKAN INDOXXI</h1>
          <h3 class="header-caption">"BIAR NONTON GAK BOKEK SLUR"</h3>
      </div>

      <div class="movie" v-for="(data, index) in movie" :value="data" :key="index">
        <div class="movie-item" v-if="filmId == data.id">
            <h1 class="page-title">MOVIE DETAILS </h1>
            <img v-bind:src="data.image" class="img-fluid img-movie" v-bind:alt="data">
            <div class="detail">
                <h1>{{data.title}}</h1>
                <h2>IMDb : {{data.rating}}</h2>
                <h4>{{data.release}} | {{data.duration}}</h4>
                <h1>_______________________________________</h1>
                <br>
                <p>Director : {{data.director}}</p>
                <p>Cast By : {{data.cast}}</p>
                <h2>SINOPSIS</h2>
                <p class="desc">{{data.desc}}</p>
      <div class="back">
        <router-link to='/'><button class="btn-back">← Kembali ke Beranda</button></router-link>
      </div>
            </div>
        </div>
      </div>
      <div class="footer">
          <p>Copyright ©2020 All rights reserved | BUKAN INDOXXI is made with love by Ibbor.</p>
      </div>
    </div>
</template>
<script>
import img1 from '../assets/images/thorragnarok.jpg';
import img2 from '../assets/images/infinitywar.jpg';
import img3 from '../assets/images/captainmarvel.jpg';
import img4 from '../assets/images/avengersendgame.jpg';


export default {
  data() {
    return {
      filmId: this.$route.params.id,
      movie: [
        {
          id: 1,
          image: img1,
          title: 'THOR RAGNAROK (2017)',
          rating: '8.5/10',
          release: '3 November 2017',
          duration: '2h 10min',
          director: 'Taika Waititi',
          cast: 'Chris Hemsworth, Tom Hiddleston, Mark Rufallo',
          desc: 'Dipenjara, Thor yang hebat menemukan dirinya dalam sebuah kontes gladiator yang mematikan melawan Hulk, mantan sekutunya. Thor harus berjuang untuk bertahan hidup dan berpacu melawan waktu untuk mencegah Hela yang sangat kuat menghancurkan rumah dan peradaban Asgardian.',
        },
        {
          id: 2,
          image: img2,
          title: 'AVENGERS INFINITY WAR (2018)',
          rating: '9/10',
          release: '27 April 2018',
          duration: '2h 29min',
          director: 'Anthony Russo, Joe Russo',
          cast: 'Robert Downey Jr., Chris Hemsworth, Chris Evans',
          desc: 'The Avengers dan sekutu mereka harus bersedia mengorbankan segalanya dalam upaya untuk mengalahkan Thanos yang kuat sebelum ia berhasil menghancurkan alam semesta.',
        },
        {
          id: 3,
          image: img3,
          title: 'CAPTAIN MARVEL (2019)',
          rating: '8/10',
          release: '8 Maret 2019',
          duration: '2h 3min',
          director: 'Anna Boden, Ryan Fleck',
          cast: 'Brie Larson, Samuel L. Jackson, Ben Mendelsohn',
          desc: 'Captain Marvel adalah superhero wanita dari Marvel yang mempunyai banyak kekuatan setara seperti Superman. Superhero yang bernama Carol Danvers ini awalnya merupakan seorang pilot luar angkasa, konon ia mendapatakan kekuatan supernya dari bangsa alien.',
        },
        {
          id: 4,
          image: img4,
          title: 'AVENGERS ENDGAME (2019)',
          rating: '10/10',
          release: '26 April 2019',
          duration: '3h 1min',
          director: 'Anthony Russo, Joe Russo',
          cast: 'Robert Downey Jr., Chris Evans, Chris Hemsworth',
          desc: 'Melanjutkan Avengers Infinity War, dimana kejadian setelah Thanos berhasil mendapatkan semua infinity stones dan memusnahkan 50% semua mahluk hidup di alam semesta. Akankah para Avengers berhasil mengalahkan Thanos?',
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  width: auto;
}

.header {
  padding: 20px;
  grid-column: 1/3;
  background-color: darkslateblue;
  border: 8px double deepskyblue;
  border-radius: 50px;
  text-align: center;
}

.header-title {
  font-family: fantasy;
  font-size: 90px;
  color: deepskyblue;
}

.header-caption {
  font-family: monospace;
  font-size: 50px;
  color: deepskyblue;
  font-style: italic;
}

.movie-item {
    padding: 50px;
    width: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(50px, auto);
    text-align: left;
    border-radius: 50px;
    background-color: antiquewhite;
    font-family: monospace;
}

.page-title {
    grid-column: 1/3;
    text-align: center;
    font-family: fantasy;
    border: 8px double darkslateblue;
    font-size: 50px;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: transparent;
    color: darkslateblue;
}

.page-title:before {
    content:'';
    border-radius: 0px;
    width: 125px;
    height: 10px;
    margin-top: 5px;
    margin-bottom: 15px;
    margin-right: 15px;
    display: inline-block;
    background: darkslateblue;
  }

.page-title:after {
    content:'';
    border-radius: 0px;
    width: 125px;
    height: 10px;
    margin-top: 5px;
    margin-bottom: 15px;
    margin-right: 15px;
    display: inline-block;
    background: darkslateblue;
  }

.img-movie {
    display: block;
    margin-top: 30px;
    margin-left: 150px;
    width: 500px;
    box-shadow: 0 15px 25px 15px darkslateblue;
    transition: 0.3s ease;
    border-radius: 50px;
}

.detail {
    font-size: 20px;
}

.desc {
    text-align: justify;
}

.back {
    text-align: center;
    padding-bottom: 50px;
    background-color:antiquewhite;
}

.btn-back {
    background-color: darkslateblue;
    color: white;
    font-size: 18px;
    border: 3px solid darkslateblue;
    border-radius: 50px;
    text-align: center;
    margin: 5px 2px;
    padding: 30px 15px;
    cursor: pointer;
    transition: 0.3s;
    margin: 50px;
    width: 250px;
}

.btn-back:focus {
  outline: none;
}

.btn-back:hover {
    background-color: transparent;
    border: 3px solid darkslateblue;
    color: darkslateblue;
}

.footer {
  padding: 40px;
  text-align: center;
  background-color: darkslateblue;
  color: deepskyblue;
  grid-column: 1/5;
  border-radius: 50px;
  border: 8px double deepskyblue;
}
</style>
