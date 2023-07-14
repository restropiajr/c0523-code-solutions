select "films"."releaseYear",
       "genres"."name" as "genreName"
from "filmGenre"
join "films" using ("filmId")
join "genres" using ("genreId")
where "films"."title" = 'Boogie Amelie';
