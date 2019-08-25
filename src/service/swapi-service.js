

export default class SwapiService {

    _apiBase = 'https://swapi.co/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        return await res.json();
    }

    async getAllPeople(){
        const res = await this.getResource(`/people/`);
        return await res.results;
    }

    getPerson(id) {
        return this.getResource(`/people/${id}`);
    }

    async getAllPlanets(){
        const res = await this.getResource(`/planets/`);
        return await res.results;
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPLanet(planet);
    }

    async getAllStarships(){
        const res = await this.getResource(`/starships/`);
        return await res.results;
    }

    getStarship(id) {
        return this.getResource(`/starships/${id}`);
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPLanet(planet) {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotation: planet.rotation_period,
            diameter: planet.diameter
        }
    }
}



