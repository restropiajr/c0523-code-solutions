select "customers"."firstName", "customers"."lastName", sum("payments"."amount") as "totalAmount"
from "payments"
join "customers" on "payments"."customerId" = "customers"."customerId"
group by "customers"."firstName", "customers"."lastName"
order by "totalAmount" desc;
