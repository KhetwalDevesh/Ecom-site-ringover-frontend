import {create} from 'zustand';
import { persist, devtools } from 'zustand/middleware';
let useStore = (set, get) => ({
  totalItemsInCart: 0,
  typeFilters:[],
  costFilters:[],
  cartItems: [],
  filterItems:[],

  addTypeFilterItem:({item})=>{
    console.log(item);
    const itemsInTypeFilter = get().typeFilters;
    const updatedTypeFilters = [...itemsInTypeFilter,item];
    set({
      typeFilters:updatedTypeFilters,
    });
  },

  removeTypeFilterItem:({item})=>{
    const updatedFilterItems = get().typeFilters.map((filterItem) => {
      if (filterItem !== item) return filterItem;
    });
    // console.log(updatedCart, 'updatedCart');
    const updatedTypeFilters = updatedFilterItems.filter((item) => {
      return item !== undefined;
    });
    set({ typeFilters: updatedTypeFilters });
  },

  addItemToCart: ({ item }) => {
    // const totalItemsInCart = get().totalItemsInCart + 1;
    console.log(item);
    const newCartItem = {
      id: item.id,
      name: item.name,
      brand: item.brand,
      price: item.price,
      image: item.image,
      countInStock: item.countInStock,
      quantity: 1,
    };
    // set((state)=>{state.cartItems:[...state.cartItems,newCartItem]})
    const isItemInCart = get().cartItems.find((cartItem) => {
      return cartItem.id === item.id;
    });
    if (isItemInCart) {
      alert('Item already in Cart🐔🐔');
      return;
    }
    const itemsInCart = get().cartItems;
    console.log(itemsInCart, 'itemsInCart👍👍');

    const updatedCartItems = [...itemsInCart, newCartItem];
    console.log(updatedCartItems, 'updatedCartItems😒');
    console.log(newCartItem, 'newCartItem🙌');
    set({
      cartItems: updatedCartItems,
    });
  },
  increaseQuantity: ({ item }) => {
    if (item.quantity === item.countInStock) {
      alert('not more items in stock🐔🐔');
      return;
    }
    const updatedCartItems = get().cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        const currentCartItem = {
          id: cartItem.id,
          name: cartItem.name,
          brand: cartItem.brand,
          price: cartItem.price,
          image: cartItem.image,
          countInStock: cartItem.countInStock,
          quantity: cartItem.quantity + 1,
        };
        return currentCartItem;
      }
      return cartItem;
    });
    set({
      cartItems: updatedCartItems,
    });
  },
  removeItemFromCart: ({ itemId }) => {
    const updatedCart = get().cartItems.map((cartItem) => {
      if (cartItem.id !== itemId) return cartItem;
    });
    console.log(updatedCart, 'updatedCart');
    const updatedCartItems = updatedCart.filter((item) => {
      return item !== undefined;
    });
    set({ cartItems: updatedCartItems });
    console.log(updatedCartItems, '😎');
  },
  decreaseQuantity: ({ item }) => {
    if (item.quantity === 1) {
      get().removeItemFromCart({ itemId: item.id });
    } else {
      const updatedCartItems = get().cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          cartItem.quantity -= 1;
        }
        return cartItem;
      });
      set({
        cartItems: updatedCartItems,
      });
    }
  },
});
// console.log(state.cartItems);
useStore = persist(useStore, { name: 'shoeProductStorage' });
useStore = create(useStore);
export default useStore;