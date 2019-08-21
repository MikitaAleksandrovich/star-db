


class SwapiService {

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

    getPlanet(id) {
        return this.getResource(`/planets/${id}`);
    }

    async getAllStarships(){
        const res = await this.getResource(`/starships/`);
        return await res.results;
    }

    getStarship(id) {
        return this.getResource(`/starships/${id}`);
    }
}

const swapi = new SwapiService();

swapi.getAllPeople().then((b) => {
    console.log(b);
});

swapi.getPerson(3).then((person) => {
    console.log(person.name);
})




