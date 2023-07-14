select "addresses"."line1" as "streetName",
       "cities"."name" as "city",
       "addresses"."district",
       "countries"."name" as "country"
from "addresses"
join "cities" using ("cityId")
join "countries" using ("countryId")
