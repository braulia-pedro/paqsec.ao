"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { motion } from "framer-motion";
import { Plus, Trash, Edit } from "lucide-react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type Post = {
  id: string;
  title: string;
  tag: string;
  href: string;
};

export default function AdminPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setLoading(true);
    const { data, error } = await supabase.from("posts").select("*");
    if (!error && data) setPosts(data);
    setLoading(false);
  }

  async function deletePost(id: string) {
    await supabase.from("posts").delete().eq("id", id);
    fetchPosts();
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-[#001f3f] to-black p-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-10"
        >
          <h1 className="text-3xl font-bold text-white">Painel de Administração</h1>
          <a
            href="/admin/new"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl transition"
          >
            <Plus size={18} /> Novo Post
          </a>
        </motion.div>

        {loading ? (
          <p className="text-white/70">Carregando posts...</p>
        ) : posts.length === 0 ? (
          <p className="text-white/70">Nenhum post encontrado.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-6 shadow-md hover:shadow-blue-500/20 transition"
              >
                <span className="text-xs uppercase tracking-wide text-blue-400">
                  {post.tag}
                </span>
                <h3 className="font-semibold mt-2 text-lg">{post.title}</h3>
                <div className="flex gap-3 mt-4">
                  <a
                    href={`/admin/edit/${post.id}`}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <Edit size={18} />
                  </a>
                  <button
                    onClick={() => deletePost(post.id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <Trash size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
