'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import {
    collection,
    getDocs,
    doc,
    setDoc,
} from 'firebase/firestore';

type GiftList = {
    gift: string;
    description: string;
    from: string;
    id: string;
};

type GiftListContextType = {
    giftLists: GiftList[];
    addGiftList: (giftList: Omit<GiftList, 'id'>) => Promise<void>;
    loading: boolean;
};

const GiftListContext = createContext<GiftListContextType | undefined>(undefined);
export const GiftListProvider = ({ children }: { children: React.ReactNode }) => {
    const [giftLists, setGiftLists] = useState<GiftList[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchGiftLists = async () => {
        setLoading(true);
        try {
            const snapshot = await getDocs(collection(db, 'giftLists'));
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...(doc.data() as Omit<GiftList, 'id'>),
            }));
            setGiftLists(data);
        } catch (error) {
            console.error('Erro ao buscar lista de presentes:', error);
        } finally {
            setLoading(false);
        }
    };

    const addGiftList = async (giftList: Omit<GiftList, 'id'>) => {
        try {
            const newDocRef = doc(collection(db, 'giftLists'));
            const giftListWithId: GiftList = { ...giftList, id: newDocRef.id };
            await setDoc(newDocRef, giftListWithId);
            setGiftLists(prev => [...prev, giftListWithId]);
        } catch (error) {
            console.error('Erro ao adicionar lista de presentes:', error);
            throw error;
        }
    }

    useEffect(() => {
        fetchGiftLists();
    }, []);

    return (
        <GiftListContext.Provider
            value={{
                giftLists,
                addGiftList,
                loading,
            }}
        >
            {children}
        </GiftListContext.Provider>
    );
};

export const useGiftLists = () => {
    const context = useContext(GiftListContext);
    if (!context) {
        throw new Error('useGiftLists deve ser usado dentro de GiftListProvider');
    }
    return context;
};
