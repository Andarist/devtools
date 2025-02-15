export function validateEmail(email: string) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function validateUUID(uuid: string) {
  const re = /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/;
  return re.test(uuid);
}

export function compareBigInt(point1: BigInt, point2: BigInt) {
  return point1 < point2 ? -1 : point1 > point2 ? 1 : 0;
}

export function commaListOfThings(things: string[]) {
  const listOfThings = [...things];
  const finalThing = listOfThings.pop();

  if (things.length <= 1) {
    return finalThing;
  }

  return `${listOfThings.join(", ")}, and ${finalThing}`;
}

export function isValidTeamName(name: string) {
  if (name.trim() === "") {
    return false;
  }

  return true;
}
