import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";


import { storageSave, storageRemove, storageGet } from './Storage'

const firebaseConfig = {
  apiKey: "AIzaSyCJKVIr-NCAg5GN9qVHwliqf7mRRR3lfaE",
  authDomain: "app-g2-54830.firebaseapp.com",
  projectId: "app-g2-54830",
  storageBucket: "app-g2-54830.appspot.com",
  messagingSenderId: "237593763786",
  appId: "1:237593763786:web:263dca7d84a71354267933"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();


export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((usuario) => {
        storageSave("TOKEN_KEY", usuario.user.uid)
        resolve(true)
      })
      .catch((error) => {
        storageRemove("TOKEN_KEY")
        if (error.code === "auth/wrong-password")
          reject("Usuário ou senha inválidos!")
        else
          reject("Usuário ou senha inválidos!")
      })
  })
}


export const registrar = (email, password) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((usuario) => {
        storageSave("TOKEN_KEY", usuario.user.uid)
        resolve(true)
      })
      .catch(() => {
        reject("Usuário já cadastrado!")
      })
  })
}


export const logoff = () => {
  return new Promise((resolve, reject) => {
    storageRemove("TOKEN_KEY")
    signOut(auth).then(() => {
      resolve()
    }).catch((error) => {
      reject()
    });
  })
}


export const saveCarro = (carro) => {
  return new Promise(async (resolve, reject) => {
    try {
      await addDoc(collection(db, "carros"), carro);
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}

export const deleteCarro = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      await deleteDoc(doc(db, 'carros', id));
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}


export const getCarro = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const querySnapshot = await getDocs(collection(db, "carros"));
      let dados = []
      querySnapshot.forEach((doc) => {
        dados.push({
          id: doc.id,
          nome: doc.data().nome,
          descricao: doc.data().descricao,
          preco: doc.data().preco
        })
      });
      resolve(dados)
    } catch (error) {
      reject(error)
    }
  })
}

export const saveCompra = (compra) => {
  return new Promise(async (resolve, reject) => {
    try {
      await addDoc(collection(db, "compras"), compra);
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}


export const deleteCompra = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      await deleteDoc(doc(db, 'compras', id));
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}


export const getCompra = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const querySnapshot = await getDocs(collection(db, "compras"));
      let dados = []
      querySnapshot.forEach((doc) => {
        dados.push({
          id: doc.id,
          nome: doc.data().nome,
          descricao: doc.data().descricao,
          preco: doc.data().preco
        })
      });
      resolve(dados)
    } catch (error) {
      reject(error)
    }
  })
}


export const saveContato = (contato) => {
  return new Promise(async (resolve, reject) => {
    try {
      await addDoc(collection(db, "contatos"), contato);
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}


export const deleteContato = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      await deleteDoc(doc(db, 'contatos', id));
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}


export const getContato = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const querySnapshot = await getDocs(collection(db, "contatos"));
      let dados = []
      querySnapshot.forEach((doc) => {
        dados.push({
          id: doc.id,
          nome: doc.data().nome,
          email: doc.data().email,
          assunto: doc.data().assunto,
          mensagem: doc.data().mensagem
        })
      });
      resolve(dados)
    } catch (error) {
      reject(error)
    }
  })
}

export const isAuthenticated = () => storageGet("TOKEN_KEY") !== null;
export const getToken = () => storageGet("TOKEN_KEY")


