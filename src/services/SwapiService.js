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
        return res.results;
    }

    getCurrentPlanet(id){
        return this.getRes(`/planets/${id}/`)
    }

    async getAllStarships(){
        const res = await this.getRes(`/starships/`);
        return res.results;
    }

    getCurrentStarship(id){
        return this.getRes(`/starships/${id}/`)
    }
}