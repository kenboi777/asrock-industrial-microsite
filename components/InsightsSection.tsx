'use client';

import { useState, useMemo, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { insightArticles } from '@/lib/content-data';
import { Search, ChevronRight, Calendar } from 'lucide-react';

const DESKTOP_ITEMS_PER_PAGE = 8;
const MOBILE_ITEMS_PER_PAGE = 4;

export function InsightsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(DESKTOP_ITEMS_PER_PAGE);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mq = window.matchMedia('(max-width: 640px)');

    const updateItemsPerPage = (e: MediaQueryList | MediaQueryListEvent) => {
      const matches = 'matches' in e ? e.matches : (e as MediaQueryList).matches;
      setItemsPerPage(matches ? MOBILE_ITEMS_PER_PAGE : DESKTOP_ITEMS_PER_PAGE);
      setCurrentPage(1); 
    };

    updateItemsPerPage(mq);
    mq.addEventListener('change', updateItemsPerPage);
    return () => mq.removeEventListener('change', updateItemsPerPage);
  }, []);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [currentPage, searchQuery]);

  const filteredArticles = useMemo(() => {
    return insightArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedArticles = filteredArticles.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleCardClick = (url: string) => {
    if (!url) return;
    window.open(url, '_blank');
  };

  return (
    // ★ 修改 1: 減少 Padding (py-12 -> py-8)，讓整體內容再往上移
    <section id="insights" className="py-8 lg:py-12 bg-white">
      <div className="section-container px-4">
        
        {/* 標題區域 */}
        {/* ★ 修改 2: 減少下方 margin (mb-10 -> mb-8)，拉近標題與搜尋框的距離 */}
        <div className={`text-center mb-8 lg:mb-10 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            Insights & Resources
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            Latest news, technical articles, and industry insights
          </p>
        </div>

        {/* 搜尋框 */}
        <div className={`mb-8 transition-all duration-1000 delay-100 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[hsl(var(--muted-foreground))]" />
            <Input
              type="text"
              placeholder="Keyword Search"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-12 h-12 text-base rounded-full border-slate-200 focus-visible:ring-slate-400"
            />
          </div>
        </div>

        {/* 卡片列表 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayedArticles.map((article, index) => (
            <article
              key={article.id}
              onClick={() => handleCardClick(article.link)}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`
                group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 cursor-pointer
                transform transition-all duration-500 ease-out hover:-translate-y-1
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
            >
              {/* 圖片區塊 */}
              <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* 內容區塊 */}
              <div className="p-5 flex flex-col h-[180px]">
                
                {/* 標籤與日期同一行 */}
                <div className="flex items-center justify-between mb-3">
                  <Badge 
                    className="bg-[#2f396e] hover:bg-[#2f396e]/90 text-white border-none shadow-sm text-xs px-2.5 py-1"
                  >
                    {article.category}
                  </Badge>

                  <div className="flex items-center text-xs text-[hsl(var(--muted-foreground))]">
                    <Calendar className="w-3 h-3 mr-1.5" />
                    {new Date(article.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </div>
                </div>

                {/* 標題 */}
                <h3 className="text-base font-bold text-slate-900 mb-3 line-clamp-3 group-hover:text-[#2f396e] transition-colors leading-snug">
                  {article.title}
                </h3>

                {/* Read more */}
                <div className="mt-auto flex items-center text-sm font-semibold text-[#2f396e] group-hover:underline decoration-2 underline-offset-4">
                  Read more
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 分頁按鈕 */}
        {totalPages > 1 && (
          <div className={`flex justify-center items-center gap-2 transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium"
            >
              Previous
            </button>
            
            {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors text-sm font-medium ${
                  currentPage === page
                    ? 'bg-[#2f396e] text-white shadow-md'
                    : 'bg-white border border-slate-200 hover:bg-slate-50 text-slate-600'
                }`}
              >
                {page}
              </button>
            ))}
            
            {totalPages > 3 && (
              <span className="px-2 text-slate-400">...</span>
            )}
            
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}