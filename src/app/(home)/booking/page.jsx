import { redirect } from "next/navigation";

export default async function Booking() {
  await redirect("/booking/bookingdetails");
}
