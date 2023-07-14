select "countries"."name" as "countryName", count("cities"."cityId") as "totalCities"
from "cities"
join "countries" on "cities"."countryId" = "countries"."countryId"
group by "countryName";
