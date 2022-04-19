import { Todo } from "@/types/todo"
import {
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  Timestamp,
} from "firebase/firestore"

async function fetchDataOnFirestore(
  podcastname: string,
  userId: string,
): Promise<Todo[]> {
  const db = getFirestore()
  const docRef = doc(collection(db, podcastname), userId)
  const snapshot = await getDoc(docRef)
  const data = snapshot.data()

  return (data?.items ?? []).map((x: { createdAt: Timestamp }) => ({
    ...x,
    createdAt: x.createdAt.toDate(),
  })) as Todo[]
}

async function saveDataOnFirestore(
  todoList: Todo[],
  podcastname: string,
  userId: string,
): Promise<void> {
  const db = getFirestore()
  const docRef = doc(collection(db, podcastname), userId)
  await setDoc(docRef, { items: todoList })
}

export function fetchData(
  podcastname: string,
  userId: string,
): Promise<Todo[]> {
  return fetchDataOnFirestore(podcastname, userId)
}

export function saveData(
  todoList: Todo[],
  podcastname: string,
  userId: string,
): Promise<void> {
  return saveDataOnFirestore(todoList, podcastname, userId)
}