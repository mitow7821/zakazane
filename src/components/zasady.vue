<template>
  <div class="white">
    <h1>
      <strong>Zakazane słowa - jak grać?</strong>
    </h1>
    <p>
      <span style="font-weight: 400"
        >Zakazane słowa, to gra towarzyska dla minimum dw&oacute;ch
        drużyn.</span
      >
    </p>
    <ol>
      <li style="font-weight: 400">
        <span style="font-weight: 400"
          >Wszystkich graczy należy podzielić na drużyny (minimalnie 2,
          maksymalnie 4)</span
        >
      </li>
      <li style="font-weight: 400">
        <span style="font-weight: 400"
          >Każda z drużyn musi wymyślić dla siebie nazwę.</span
        >
      </li>
      <li style="font-weight: 400">
        <span style="font-weight: 400"
          >Po uruchomieniu aplikacji należy wprowadzić drużyny oraz określić
          parametry rozgrywki. Dla os&oacute;b początkujących zalecane są
          podstawowe ustawienia.</span
        >
      </li>
      <li style="font-weight: 400">
        <span style="font-weight: 400"
          >Gra podzielona jest na rundy w kt&oacute;rej wszystkie drużyny
          prezentują słowa.</span
        >
      </li>
      <li style="font-weight: 400">
        <span style="font-weight: 400"
          >W każdej rundzie każda z drużyn typuje jedną osobę ze swojej drużyny
          tzw. &ldquo;PREZENTERA&rdquo; kt&oacute;ra będzie prezentować SŁOWO.
          Zawodnik z innej drużyny tzw. &ldquo;ARBITER&rdquo; obsługuje
          aplikację i sprawdza czy prezentujący zawodnik nie użył ZAKAZANEGO
          SŁOWA.</span
        >
        <span style="font-weight: 400">
          <br />
        </span>
        <span style="font-weight: 400"
          >Zadaniem ARBITRA jest przyznawać punkty w przypadku gdy drużyna
          PREZENTERA odgadnie słowo, pomijać słowa na życzenie PREZENTERA lub
          karać drużynę PREZENTERA w przypadku gdy PREZENTER użyje zakazanego
          słowa lub złamie zasady.</span
        >
      </li>
      <li style="font-weight: 400">
        <span style="font-weight: 400"
          >Każda z drużyn ma domyślnie 90 sekund na zdobycie jak największej
          liczby punkt&oacute;w za odgadnięcie możliwie największej liczby
          sł&oacute;w prezentowanych przez PREZENTERA.</span
        >
      </li>
      <li style="font-weight: 400">
        <span style="font-weight: 400"
          >PREZENTER podczas swojej rundy może:</span
        >
      </li>
      <ol>
        <li style="font-weight: 400">
          <span style="font-weight: 400">pokazywać</span>
        </li>
        <li style="font-weight: 400">
          <span style="font-weight: 400"
            >opisywać SŁOWO nie używając SŁOWA oraz sł&oacute;w zakazanych w
            tym:</span
          >
        </li>
        <ol>
          <li style="font-weight: 400">
            <span style="font-weight: 400"
              >ich obcojęzycznych odpowiednik&oacute;w</span
            >
          </li>
          <li style="font-weight: 400">
            <span style="font-weight: 400">ich odmian</span>
          </li>
          <li style="font-weight: 400">
            <span style="font-weight: 400">złączeń</span>
          </li>
          <li style="font-weight: 400">
            <span style="font-weight: 400"
              >poszczeg&oacute;lnych liter alfabetu lub innego kodu</span
            >
          </li>
        </ol>
      </ol>
      <li style="font-weight: 400">
        <span style="font-weight: 400"
          >Rozgrywka toczy się do momentu osiągnięcia ustalonej wcześniej liczby
          punkt&oacute;w, domyślnie 20.</span
        >
      </li>
    </ol>
    <h1 style="color: #5e9ca0"></h1>
    <p>
      <span style="font-weight: 400">Udanej zabawy!</span>
    </p>
    <div class="button">
      <router-link to="/" class="back">
        <button>Wstecz</button>
      </router-link>
    </div>
    <br />
    <footer>
      <a href="https://grupa.itdesk.eu"
        >2018 &copy; Progressive Web Applications coded by itDesk.eu</a
      >
    </footer>
  </div>
</template>


<script>
export default {};
</script>


<style>
.white {
  color: #fff;
}
.back {
  display: grid;
  justify-content: center;
}
.button > li {
  list-style: none;
}
footer {
  color: white;
  font-size: 1.8vh;
  position: absolute;
  bottom: 0;
  width: 99vw;
  height: 3vh;
  text-align: center;
}
footer > a {
  color: #fff;
  text-decoration: none;
}
</style>
