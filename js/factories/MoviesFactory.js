class MoviesFactory{
    constructor(data,type){
        if(type === 'oldApi'){
            return new OldMovie(data)

        } else if(type === 'newApi'){
            return new Movie(data)
        }else if(type === 'externalApi'){
            return new ExternalMovie(data)
        }else{
            throw 'Unknow data type'
        }
    }
}