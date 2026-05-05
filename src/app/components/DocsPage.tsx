import { useState, useEffect } from "react";
import { NewHeader } from "./NewHeader";
import { NewFooter } from "./NewFooter";
import { FileText, LogOut, Lock, Mail, Eye, EyeOff, FolderOpen, BookOpen, Shield, Receipt, Scale, Landmark, ClipboardList, Settings, Heart, Briefcase } from "lucide-react";

const API_BASE = "http://127.0.0.1:8000/api";

interface Document {
  id: number;
  title: string;
  summary: string;
  purpose: string;
  date: string;
  file_url: string | null;
  original_filename: string | null;
}

interface DocumentCategory {
  id: number;
  title: string;
  description: string;
  documents_count: number;
  documents: Document[];
}

export function DocsPage() {
  const [token, setToken] = useState<string | null>(localStorage.getItem("docs_token"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [categories, setCategories] = useState<DocumentCategory[]>([]);
  const [loading, setLoading] = useState(false);

  const categoryIcons = [FolderOpen, BookOpen, Shield, Receipt, Scale, Landmark, ClipboardList, Settings, Heart, Briefcase];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");
    try {
      const res = await fetch(`${API_BASE}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ email, password, device_name: "docs-portal" }),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem("docs_token", data.token);
        setToken(data.token);
      } else {
        setLoginError(data.message || "Invalid credentials");
      }
    } catch {
      setLoginError("Unable to connect to server");
    }
    setLoginLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("docs_token");
    setToken(null);
    setCategories([]);
  };

  useEffect(() => {
    if (token) {
      fetchCategories();
    }
  }, [token]);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/document-categories`, {
        headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
      });
      if (res.status === 401) { handleLogout(); return; }
      const data = await res.json();
      if (data.success) setCategories(data.data);
    } catch { /* ignore */ }
    setLoading(false);
  };

  const viewDocument = async (docId: number) => {
    try {
      const res = await fetch(`${API_BASE}/documents/${docId}/view`, {
        headers: { Authorization: `Bearer ${token}`, Accept: "*/*" },
      });
      if (res.status === 401) { handleLogout(); return; }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    } catch { /* ignore */ }
  };

  if (!token) {
    return (
      <div className="min-h-screen flex flex-col">
        <NewHeader />
        <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-[#2B2D42] via-[#1a1b2e] to-[#2B2D42] py-16 pt-24">
          <div className="w-full max-w-sm mx-4">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-yellow-400/15 mb-3">
                  <Lock className="w-7 h-7 text-yellow-400" />
                </div>
                <h2 className="text-xl font-bold text-white">Document Portal</h2>
                <p className="text-gray-400 text-sm mt-1">Login to access society documents</p>
              </div>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/15 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 text-sm transition-all"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-12 py-2.5 bg-white/5 border border-white/15 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 text-sm transition-all"
                      placeholder="Enter your password"
                      required
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors">
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                {loginError && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-2.5 text-red-400 text-xs">{loginError}</div>
                )}
                <button
                  type="submit"
                  disabled={loginLoading}
                  className="w-full py-2.5 bg-yellow-400 hover:bg-yellow-500 text-[#2B2D42] font-semibold rounded-lg transition-colors disabled:opacity-50 text-sm mt-1"
                >
                  {loginLoading ? "Signing in..." : "Sign In"}
                </button>
              </form>
            </div>
          </div>
        </div>
        <NewFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NewHeader />
      <div className="flex-1 bg-gray-50">
        {/* Header bar */}
        <div className="bg-[#2B2D42] text-white py-6">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Society Documents</h1>
              <p className="text-gray-400 text-sm mt-1">Access all society documents and files</p>
            </div>
            <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm">
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {loading && (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#2B2D42]"></div>
            </div>
          )}

          {!loading && categories.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              <FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p className="text-lg">No documents found</p>
            </div>
          )}

          {!loading && categories.map((cat) => (
            <div key={cat.id} className="mb-10">
              {/* Category Header */}
              {(() => {
                const idx = categories.indexOf(cat) % categoryIcons.length;
                const Icon = categoryIcons[idx];
                return (
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#2B2D42] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[#2B2D42]">{cat.title}</h2>
                      {cat.description && (
                        <p className="text-gray-400 text-sm mt-0.5">{cat.description}</p>
                      )}
                    </div>
                  </div>
                );
              })()}

              {/* Documents Row - Horizontal Scroll */}
              {cat.documents.length > 0 ? (
                <div className="flex gap-5 overflow-x-auto pt-4 pb-6 px-1 snap-x [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#2B2D42]/30 hover:[&::-webkit-scrollbar-thumb]:bg-[#2B2D42]/50">
                  {cat.documents.map((doc) => (
                    <div
                      key={doc.id}
                      className="w-[340px] h-[300px] rounded-2xl overflow-hidden snap-start flex-shrink-0 transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-yellow-400/15 hover:-translate-y-2 border border-gray-100 hover:border-yellow-400/60 group flex flex-col"
                    >
                      {/* Card Header */}
                      <div className="bg-[#2B2D42] px-5 py-4 relative overflow-hidden flex-shrink-0">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400/10 rounded-full -translate-y-6 translate-x-6"></div>
                        <h3 className="text-white font-bold text-base leading-snug relative z-10">{doc.title}</h3>
                        <p className="text-yellow-400/80 text-xs mt-1.5 font-medium relative z-10">
                          {new Date(doc.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                        </p>
                      </div>

                      {/* Card Body */}
                      <div className="px-5 py-4 bg-white relative overflow-hidden flex-1 flex flex-col">
                        <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-yellow-400/[0.06] rounded-full"></div>
                        <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-yellow-400/[0.04] rounded-full"></div>

                        {doc.purpose && (
                          <p className="text-[#2B2D42] text-sm font-semibold mb-2">{doc.purpose}</p>
                        )}

                        {doc.summary && (
                          <div className="text-gray-500 text-[13px] leading-relaxed line-clamp-4 overflow-hidden prose prose-sm max-w-none [&_ul]:list-disc [&_ul]:pl-4 [&_ol]:list-decimal [&_ol]:pl-4 [&_a]:text-yellow-600 [&_strong]:text-gray-700" dangerouslySetInnerHTML={{ __html: doc.summary }} />
                        )}

                        <div className="flex-1"></div>

                        {doc.file_url && (
                          <button
                            onClick={() => viewDocument(doc.id)}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-[#2B2D42] hover:to-[#3d3f5c] text-[#2B2D42] hover:text-white font-bold rounded-xl text-sm transition-all duration-300 w-full justify-center cursor-pointer hover:shadow-xl relative z-10 group/btn"
                          >
                            <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
                            View Document
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-xl border border-gray-100 p-6 text-center text-gray-400 text-sm">
                  No documents in this category
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <NewFooter />
    </div>
  );
}
