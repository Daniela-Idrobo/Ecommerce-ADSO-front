import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "@/components/ui/use-toast";

interface UseLovedProductsType {
  lovedItems: any[];
  addLovedItem: (data: any) => void;
  removeLovedItem: (id: number) => void;
}

export const useLovedProducts = create(
  persist<UseLovedProductsType>(
    (set, get) => ({
      lovedItems: [],
      addLovedItem: (data: any) => {
        const currentLovedItems = get().lovedItems;
        const existingItem = currentLovedItems.find(
          (item) => item.id === data.id
        );

        if (existingItem) {
          return toast({
            title: "El producto ya existe en la lista 💔",
            variant: "destructive",
          });
        }

        set({
          lovedItems: [...get().lovedItems, data],
        });
        toast({
          title: " Producto añadido a la lista 🧡",
        });
      },
      removeLovedItem: (id: number) => {
        set({
          lovedItems: [...get().lovedItems.filter((item) => item.id !== id)],
        });
        toast({
          title: "Producto se ha eliminado de la lista ❤️‍🔥",
        });
      },
    }),
    {
      name: "loved-products-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);