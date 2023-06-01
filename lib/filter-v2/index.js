class FilterV2 {
    /**
    * 
    * @param {string} actor 
    * @param {array} Movies 
    * @returns 
    */
    static async filterByActor(actor, Movies) {
    console.log('FilterV2.filterByActor called with actor:', actor);
    await new Promise(resolve => setTimeout(resolve, 200))
   
    if (!actor) {
    return Movies
    }
   
    const filteredMovies = Movies.filter(Movie => Movie.actor === actor);
    console.log('FilterV2.filterByActor returned:', filteredMovies);
    return filteredMovies;
    }
   }