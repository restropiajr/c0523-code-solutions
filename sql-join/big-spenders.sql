select "customers"."firstName",
       "customers"."lastName",
       "payments"."amount"
from "payments"
join "customers" using ("customerId")
order by "payments"."amount" desc
limit 10;
