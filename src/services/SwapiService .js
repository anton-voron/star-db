export default class SwapiService { // классы серверы это хорошая практика при разработке приложений
  // весь код находится в 1 месте, мы можем легче реализовать кеширование, сменить источник данных, сменить логику

  _apiBase = 'https://swapi.co/api';

  async getResource(url) { // 
    const res = await fetch(`${this._apiBase}${url}`); // fetch(url) - возвращает промис (ответ) с сервера, потом получаем response,который мы можем перехватить
    // await - ждём пока результат промиса не будет доступен, как только результ fetch(url)  будет доступен мы запишем его в переменную res

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json(); //  получаем данные (тело) ответа из результата res
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  }

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  }

  async getPlanet(id) { //делаем ассинхронной, иначе await не будет работать
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  }

  async getStarship(id) {
    const  starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship)
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    const id = item.url.match(idRegExp)[1];
  }

  _transformPlanet (planet) {
    return {
          id: this._extractId(planet),
          name: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diameter: planet.diameter
        }
  }

  _transformStarship (starship) {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      constInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity
    }
  }

  _transformPerson (person) {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }
}

