'use client'

import { useGiftLists } from '@/contexts/giftList';
import { useState, FormEvent } from 'react';

type GiftList = {
  gift: string;
  description: string;
  from: string;
  id?: string;
};

export default function Home() {
  const [newGiftList, setNewGiftList] = useState<GiftList>({ gift: '', description: '', from: '' });
  const { giftLists, loading, addGiftList } = useGiftLists();

  const handleCreateGiftList = async (e?: FormEvent) => {
    e?.preventDefault();
    if (!newGiftList.gift) return;

    try {
      await addGiftList(newGiftList);
      setNewGiftList({ gift: '', description: '', from: '' });
    } catch (error) {
      // handle error as needed; kept minimal to avoid undefined state setters
      console.error('Erro ao adicionar lista de presente:', error);
    }
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1>Crie sua lista de presente</h1>
      <form onSubmit={handleCreateGiftList} className="space-y-2">
        <input
          type="text"
          placeholder="Qual presente deseja?"
          maxLength={40}
          value={newGiftList.gift}
          onChange={e => setNewGiftList({ ...newGiftList, gift: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Por que quer esse presente?"
          value={newGiftList.description}
          onChange={e => setNewGiftList({ ...newGiftList, description: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="DE: Quem é o presente?"
          value={newGiftList.from}
          onChange={e => setNewGiftList({ ...newGiftList, from: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}
