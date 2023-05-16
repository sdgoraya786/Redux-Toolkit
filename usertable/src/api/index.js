import Chance from "chance";

/** #6 */
const chance = Chance();

export const fakeUsersData = () => {
  //   console.log(chance.name({ middle: true }));
  return chance.name({ middle: true });
};
