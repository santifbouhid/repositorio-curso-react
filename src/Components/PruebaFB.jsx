import React, { useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default function PruebaFB() {
  // Bd4EwpXEyR2EAvDHfsOd
  // productos

  useEffect(() => {
    const db = getFirestore();
    const producto1Ref = doc(db, "productos", "Bd4EwpXEyR2EAvDHfsOd");
    getDoc(producto1Ref).then((prod) => {
      console.log(prod.data());
    });
  }, []);

  return <></>;
}
