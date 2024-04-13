"use client";
import { database } from '../database/firestore'; 
import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';

export const getCollection = (collectionName) => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const getDocuments = async () => {
        const collectionRef = collection(database, collectionName);
        const querySnapshot = await getDocs(collectionRef);
      const items = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setDocuments(items);
    };

    getDocuments();
  }, [collectionName]);

  return documents;
};
