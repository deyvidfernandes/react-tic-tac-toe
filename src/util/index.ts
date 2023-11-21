export const cloneMatrix = <T>(array: T[][]) : T[][] => {
   const newArray = array.map(function (arr) {
      return arr.slice();
   });
   return newArray
}
