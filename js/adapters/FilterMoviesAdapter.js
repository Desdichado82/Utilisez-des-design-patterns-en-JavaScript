class FilterMoviesAdapter {
    constructor(Movies, actor) {
        console.log('FilterMoviesAdapter constructor called with actor:', actor); // log the value of the actor argument
        this.Movies = Movies
        this.actor = actor
    }

    async filterByActor() {
        console.log('FilterV2.filterByActor called with actor:', actor); // log the value of the actor argument
        console.log('FilterV2.filterByActor called with Movies:', Movies); // log the value of the Movies array
        return await FilterV2.filterByActor(this.actor, this.Movies);
    }
}