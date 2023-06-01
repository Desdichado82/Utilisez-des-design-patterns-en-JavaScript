

   class FilterMoviesAdapter {
    constructor(Movies, actor) {
        this.Movies = Movies
        this.actor = actor
    }

    async filterByActor() {
        console.log('FilterMoviesAdapter.filterByActor called with actor:', this.actor, this.Movies);
        return await FilterV2.filterByActor(this.actor, this.Movies)
    }
}
