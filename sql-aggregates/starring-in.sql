select "genres"."name" as "genreName", count("films"."filmId") as "filmCount"
from "castMembers"
join "actors" on "castMembers"."actorId" = "actors"."actorId"
join "films" on "castMembers"."filmId" = "films"."filmId"
join "filmGenre" on "films"."filmId" = "filmGenre"."filmId"
join "genres" on "filmGenre"."genreId" = "genres"."genreId"
where "actors"."firstName" = 'Lisa' and "actors"."lastName" = 'Monroe'
group by "genreName";
