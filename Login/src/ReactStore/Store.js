import create from "zustand"

const useLoginStore = create((set) => ({
    email: '',
    password: '',
    rememberMe: false,
    setEmail: (newEmail) => set({ email: newEmail }),
    setPassword: (newPassword) => set({ password: newPassword }),
    setRememberMe: (value) => set({ rememberMe: value }),
  }));
  
  export default useLoginStore;
