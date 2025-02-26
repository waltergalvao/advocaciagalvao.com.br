"use server";

export async function createContactEntry(formData: FormData) {
  const name = formData.get("name");
  const role = formData.get("role");
  const state = formData.get("state");
  const city = formData.get("city");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const partnership = formData.get("partnership");
  const details = formData.get("details");

  console.log("name is", name);
  console.log("role is", role);
  console.log("state is", state);
  console.log("city is", city);
  console.log("email is", email);
  console.log("phone is", phone);
  console.log("partnership is", partnership);
}
