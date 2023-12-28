

const useEndGameLine = (winCase: string, offset: number, isInverse: boolean) => {
   let offsetClass : string | null = null;
   const winCaseAndInverse = winCase + "-" + (isInverse ? "INVERSE" : "NORMAL")
   let crossAnimationClass: string | null = null;

   if (winCase === "ROW") {
      offsetClass = "offsetY" +  offset
   } else if (winCase === "COL") {
      offsetClass = "offsetX" +  offset
   } 

   switch(winCaseAndInverse) {
      case "COL-NORMAL":
         crossAnimationClass = "verticalCross"
         break;
      case "COL-INVERSE":
         crossAnimationClass = "verticalBottomCross"
         break;
      case "ROW-NORMAL":
         crossAnimationClass = "horizontalCross"
         break;
      case "ROW-INVERSE":
         crossAnimationClass = "horizontalLeftCross"
         break;
      case "DIAGONAL-NORMAL":
         crossAnimationClass = "diagonalCross"
         break;
      case "DIAGONAL-INVERSE":
         crossAnimationClass = "diagonalLeftBottomCross"
         break;
      case "RIGHT_DIAGONAL-NORMAL":
         crossAnimationClass = "diagonalBottomCross" // XXX
         break;
      case "RIGHT_DIAGONAL-INVERSE":
         crossAnimationClass = "diagonalLeftCross" // XXX
         break;
   }

   return [crossAnimationClass, offsetClass]
}

export {useEndGameLine}