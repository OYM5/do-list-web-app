import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { writable } from "svelte/store";
import {auth} from "../lib/firebase/firebase";

export const authStore = writable({
    user: null,
    loading: true,
    date: {}
})

export const authHandlers = {
    signup: async (/** @type {string} */ email, /** @type {string} */ pass) => {
        await createUserWithEmailAndPassword(auth, email, pass)
    },
    login: async (/** @type {string} */ email, /** @type {string} */ pass) => {
        await signInWithEmailAndPassword(auth, email, pass)
    },
    logout: async () => {
        await signOut(auth)
    }
}