import {doc, collection, getDoc, setDoc, deleteDoc, getCountFromServer} from "firebase/firestore";
import{db} from "../configurations/firebase-config.ts";
import {Category, ProductType} from "../utils/shop-types.ts";
import {getRandomNumber} from "../utils/tools.ts";
import productConfig from"../configurations/products-config.json";
import {collectionData} from "rxfire/firestore";
import {Observable} from "rxjs";

const prodColl = collection (db, "product_collection");
const categoryColl = collection(db, "category_collection");

export const addProduct = async (product:ProductType) => {
    product.id = getRandomNumber(10000, 99999)+"";
    const ref = doc(prodColl, product.id);
    await setDoc(ref, product);
};

export const addCategory = async (category:Category)=>{
    const ref = doc(categoryColl, category.category_name);
    await setDoc(ref, category);
};

export const removeProduct = async (id:string)=>{
   const ref = doc(prodColl, id);
   const removed = await getDoc(ref);
    console.log(removed.data()); // Todo;
    await deleteDoc(ref);
    return removed;
};

export const deleteCategory = async (name:string)=>{
    const ref = doc(categoryColl, name);
    const removed = await getDoc(ref);
    console.log(removed.data()); // Todo;
    await deleteDoc(ref);
    return removed;
};

export const getProduct = async (id:string)=>{
    const ref = doc(prodColl, id);
    const product = await getDoc(ref);
    return product;
    // return await getDoc(ref)
};

export const isCategoryExist = async (name:string)=>{
    const ref = doc(categoryColl, name);
    const res = await getDoc(ref);
    return res.exists();
};

export const setProducts = async ()=>{
    let count = (await getCountFromServer(prodColl)).data().count;
    if(count === 0){
        const products: ProductType[] = productConfig.map(item => ({
            title:item.name,
            category:item.name.split("-")[0],
            unit:item.unit,
            cost:item.cost,
            img:item.name + ".jpg"
        }));
        for (let i = 0; i < products.length; i++){
            const temp = await isCategoryExist(products[i].category);
            if(!temp)
                await addCategory({category_name:products[i].category});
            await addProduct(products[i]);
            count++
            console.log(count);
        }
    }
    return count;
};

export const getProducts = ():Observable<ProductType[]>=>{
    return collectionData(prodColl) as Observable<ProductType[]>;
};