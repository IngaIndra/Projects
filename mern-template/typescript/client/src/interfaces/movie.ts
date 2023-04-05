interface MovieAwards {
    wins: number;
    nominations: number;
    text: string;
  }
  
  interface MovieIMD {
    rating: number;
    votes: number;
    id: number;
  }
  
  interface MovieTomatoes {
    viewer: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    lastUpdated: Date;
  }
  
  export interface IMovie {
    _id: string;
    poster?: string;
    plot: string;
    genres: string[];
    runtime: number;
    cast: string[];
    num_mflix_comments: number;
    title: string;
    fullplot: string;
    countries: string[];
    released: Date;
    directors: string[];
    rated: string;
    awards: MovieAwards;
    lastupdated: Date;
    year: number;
    imdb: MovieIMD;
    type: string;
    tomatoes: MovieTomatoes;
  }
  