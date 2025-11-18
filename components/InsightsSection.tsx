'use client';

import { useState, useMemo, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { insightArticles } from '@/lib/content-data';
import { Search, ChevronRight, Calendar } from 'lucide-react';

const DESKTOP_ITEMS_PER_PAGE = 8;
const MOBILE_ITEMS_PER_PAGE = 4;

export function InsightsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(DESKTOP_ITEMS_PER_PAGE);

  // 根據視窗寬度切換：手機 4 筆 / 其它 8 筆
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mq = window.matchMedia('(max-width: 640px)');

    const updateItemsPerPage = (e: MediaQueryList | MediaQueryListEvent) => {
      const matches = 'matches' in e ? e.matches : (e as MediaQueryList).matches;
      setItemsPerPage(matches ? MOBILE_ITEMS_PER_PAGE : DESKTOP_ITEMS_PER_PAGE);
      setCurrentPage(1); // 視窗尺寸改變時回到第 1 頁，避免頁數超出
    };

    // 初始判斷
    updateItemsPerPage(mq);

    // 監聽變化
    mq.addEventListener('change', updateItemsPerPage);
    return () => mq.removeEventListener('change', updateItemsPerPage);
  }, []);

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

  return (
    <>
      <div id="insights" className="section-container">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Insights & Resources
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            Latest news, technical articles, and industry insights
          </p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[hsl(var(--muted-foreground))]" />
            <Input
              type="text"
              placeholder="Keyword Search"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-12 h-12 text-base"
            />
          </div>
        </div>

        {/* 卡片：手機 1 欄 → 一頁 4 筆；桌機 4 欄 → 一頁 8 筆 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-4 sm:gap-6 mb-10">
          {displayedArticles.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-[hsl(var(--border))] hover-lift cursor-pointer"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-col gap-2 mb-3">
<Badge
  variant="secondary"
  className="text-xs w-fit bg-[#2f396e] text-white border-none hover:bg-[#2f396e]"
>
  {article.category}
</Badge>
                  <div className="flex items-center text-xs text-[hsl(var(--muted-foreground))]">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(article.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </div>
                </div>
                <h3 className="text-base font-semibold mb-2 line-clamp-2 leading-tight group-hover:text-[hsl(var(--primary))] transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center text-sm text-[hsl(var(--primary))] font-medium">
                  Read more
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mb-16">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-[hsl(var(--border))] hover:bg-[hsl(var(--muted))] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  currentPage === page
                    ? 'bg-[hsl(var(--primary))] text-white border-[hsl(var(--primary))]'
                    : 'border-[hsl(var(--border))] hover:bg-[hsl(var(--muted))]'
                }`}
              >
                {page}
              </button>
            ))}
            {totalPages > 3 && (
              <span className="px-2 text-[hsl(var(--muted-foreground))]">...</span>
            )}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-[hsl(var(--border))] hover:bg-[hsl(var(--muted))] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}