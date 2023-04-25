'use client'
import Link from "next/link";
import PocketBase from 'pocketbase';
import CreateNote from "./CreateNote";
import styles from './Notes.module.css';
import { useRouter } from "next/navigation";
const router = useRouter;

async function getNotes() {
    // const db = new PocketBase('http://127.0.0.1:8090');
    // const data = await db.records.getList('notes');
   const res = await fetch(
    'http://127.0.0.1:8090/api/collections/notes/records',
    { cache: 'no-store'}
    );
   const data = await res.json();
   return data?.items as any[];
}

export default async function NotesPage() {
    const notes = await getNotes();

    return (
     <div>
        <h1>Notes</h1>
        <div className={styles.grid}>
            {notes?.map((note) => {
                return <Note key={note.id} note={note} />
            })}
        </div>

        <CreateNote/>
     </div>
    );
}

const deleteNote = async(id:string) => {
         await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${id}`, {
            method: 'DELETE',
         }
     );
};


function Note({ note }: any) {
    const {id,title, content,created } = note || {};
    const router = useRouter();

    const handleDeleteClick = async() => {
        await deleteNote(id);
        router.refresh();
    };
    
    return (
        <div>
        <Link href={`/notes/${id}`}>
        <div className={styles.note}>
            <h2>{title}</h2>
            <h5>{content}</h5>
            <p>{created}</p>
        </div>
        </Link>
        <button onClick={handleDeleteClick}>Delete</button>
        </div>
    );
}