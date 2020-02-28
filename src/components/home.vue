<template>
    <div class="container">
      <div class="header">
          <h1 class="header-title">BUKAN INDOXXI</h1>
          <h3 class="header-caption">"BIAR NONTON GAK BOKEK SLUR"</h3>
      </div>

      <div class="movie" v-for="(data, index) in images" :value="data" :key="index">
        <div class="movie-item" @click="detailFilm(data.id)">
          <img v-bind:src="data.image" class="img-fluid img-movie" v-bind:alt="data">
          <h3 class="judul">{{data.Judul}}</h3>
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
  name: 'home',
  data: () => ({
    images: [
      { id: 1, image: img1, Judul: 'THOR RAGNAROK' },
      { id: 2, image: img2, Judul: 'AVENGERS INFINITY WAR' },
      { id: 3, image: img3, Judul: 'CAPTAIN MARVEL' },
      { id: 4, image: img4, Judul: 'AVENGERS ENDGAME' },
    ],
  }),
  methods: {
    detailFilm(filmId) {
      this.$router.push({ name: 'detail', params: { id: filmId } });
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  width: auto;
}

.header {
  padding: 20px;
  grid-column: 1/5;
  background-color: darkslateblue;
  text-align: center;
  border-radius: 50px;
  border: 8px double deepskyblue;
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

.movie {
  padding-top: 50px;
  padding-bottom: 50px;
  padding-right: 20px;
  padding-left: 20px;
  text-align: center;
  background-color: antiquewhite;
}

.img-movie {
  width: 400px;
  box-shadow: 0 15px 25px 0 black;
  transition: 0.3s ease;
  border-radius: 50px;
}

.judul {
  font-family: monospace;
  font-size: 25px;
  font-style: unset;
}

.img-movie:hover {
  box-shadow: 0 15px 25px 15px darkslateblue;
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
