export default class SwapiService{

    _apiBase = 'https://swapi.co/api';

      async getRes (url){
        const res = await fetch(`${this._apiBase}${url}`);
       
        if (!res.ok) {
            throw new Error(`Can't fetch ${url}`
            + `, received ${res.status}`)
        }
       
        return await res.json();
    }

    async getAllPeople(){
        const res = await this.getRes(`/people/`);
        return res.results;
    }

    getCurrentPerson(id){
        return this.getRes(`/people/${id}/`)
    }

    async getAllPlanets(){
        const res = await this.getRes(`/planets/`);
        return res.results.map(this.transformPlanet);
    }

    async getCurrentPlanet(id){
        const planet = await this.getRes(`/planets/${id}/`);
        return this.transformPlanet(planet);
    }

    async getAllStarships(){
        const res = await this.getRes(`/starships/`);
        return res.results;
    }

    getCurrentStarship(id){
        return this.getRes(`/starships/${id}/`)
    }

    extractId(item){
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    transformPlanet(planet){
        return{
            id: this.extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }
}