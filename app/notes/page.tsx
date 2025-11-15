import { PostCard, Tpost } from "@/components/server/PostCard";

import axios from "axios";

const getNotes = async () => {
  const resp = await axios.get<Tpost[]>("http://localhost:8000/notes");
  return resp.data;
};

export default async function Notes() {
  const t = await getNotes();

  return (
    <div className="w-full overflow-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {t.map((note) => (
        <PostCard key={note.id} {...note} />
      ))}
    </div>
  );
}
