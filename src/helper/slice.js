export default function slice(playerinfo) {
  const { dateOfBirth } = playerinfo;
  let dob = dateOfBirth;
  if (dob !== null) {
    dob = dateOfBirth.slice(0, 10);
  }
  return dob;
}
