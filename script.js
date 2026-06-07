// Odotetaan, että sivu on kokonaan latautunut ennen koodin ajamista.
$(document).ready(function() {
//Funktio sään hakemiselle.
  function fetchWeather(city) {
    // haetaan tiedot openweathermapista
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2ab7986acaa9bf7aa816c116f71d4779&units=metric`)
      .then(function(response) {
        
        //Otetaan data talteen muuttujaan
        const data = response.data;

        //Päivitetään tiedot sivulle jqueryllä
        $('#cityName').text(city + ", FI");
        $('#temperature').text(data.main.temp + " °C");
        $('#humidity').text(data.main.humidity + " %");
        $('#windSpeed').text(data.wind.speed + " m/s");
        
      })
    
  }
  // kuuntelijat eri napeille. haetaan kyseisen kaupungin sää.
  $('#helsinkiBtn').click(function() {
    fetchWeather("Helsinki");
  });

  $('#turkuBtn').click(function() {
    fetchWeather("Turku"); 
  });

  $('#tampereBtn').click(function() {
    fetchWeather("Tampere"); 
  });
//Sivu aukeaa helsingin säällä.
  fetchWeather("Helsinki");

});