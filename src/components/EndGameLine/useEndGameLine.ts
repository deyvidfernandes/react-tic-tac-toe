

const useEndGameLine = (winCase: string, offset: number, isInverse: boolean) => {
   let offsetClass : string | null = null;
   const winCaseAndInverse = winCase + "-" + (isInverse ? "inverse" : "normal")
   let crossAnimationClass: string | null = null;

   if (winCase === "row") {
      offsetClass = "offsetY" +  offset
   } else if (winCase === "col") {
      offsetClass = "offsetX" +  offset
   } 

   switch(winCaseAndInverse) {
      case "col-normal":
         crossAnimationClass = "verticalCross"
         break;
      case "col-inverse":
         crossAnimationClass = "verticalBottomCross"
         break;
      case "row-normal":
         crossAnimationClass = "horizontalCross"
         break;
      case "row-inverse":
         crossAnimationClass = "horizontalLeftCross"
         break;
      case "diag-normal":
         crossAnimationClass = "diagonalCross"
         break;
      case "diag-inverse":
         crossAnimationClass = "diagonalLeftBottomCross"
         break;
      case "rdiag-normal":
         crossAnimationClass = "diagonalBottomCross" // XXX
         break;
      case "rdiag-inverse":
         crossAnimationClass = "diagonalLeftCross" // XXX
         break;
   }

   return [crossAnimationClass, offsetClass]
}

export {useEndGameLine}