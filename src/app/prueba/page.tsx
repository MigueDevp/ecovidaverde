"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "@/app/database/firestore";

export default function Prueba() {
  const [documents, setDocuments] = useState<any[]>([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "lecturas"));
        const documentsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDocuments(documentsData);
      } catch (error) {
        console.error("Error pendejo: ", error);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <div>
      <h1>Documentos de Firebase:</h1>
      <ul>
        {documents.map((doc) => (
          <li key={doc.id}>
            <pre>{JSON.stringify(doc, null, 2)}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
}
