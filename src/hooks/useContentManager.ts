import { useState, useEffect, useCallback } from 'react';

export interface ContentItem {
  id: string;
  title: string;
  description: string;
  content: string;
  type: 'project' | 'blog' | 'skill' | 'experience';
  status: 'published' | 'draft' | 'archived';
  tags: string[];
  metadata: {
    author: string;
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
    views: number;
    likes: number;
    featured: boolean;
  };
  media?: {
    thumbnail?: string;
    gallery?: string[];
    video?: string;
  };
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

export interface ContentFilters {
  type?: string;
  status?: string;
  tags?: string[];
  search?: string;
  featured?: boolean;
  dateRange?: {
    start: string;
    end: string;
  };
}

export interface ContentStats {
  total: number;
  published: number;
  draft: number;
  archived: number;
  totalViews: number;
  totalLikes: number;
}

class ContentAPI {
  private baseUrl = '/api/content';
  private mockData: ContentItem[] = [
    {
      id: '1',
      title: 'Wedding RSVP Application',
      description: 'A beautiful and functional wedding RSVP web application',
      content: 'Full project details and implementation...',
      type: 'project',
      status: 'published',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      metadata: {
        author: 'Josiah Peter James',
        createdAt: '2025-01-01T00:00:00Z',
        updatedAt: '2025-01-01T00:00:00Z',
        publishedAt: '2025-01-01T00:00:00Z',
        views: 1250,
        likes: 45,
        featured: true
      },
      media: {
        thumbnail: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20wedding%20RSVP%20application%20interface%20elegant%20design&image_size=landscape_16_9',
        gallery: [
          'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=wedding%20RSVP%20form%20interface%20beautiful%20design&image_size=landscape_4_3',
          'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=wedding%20guest%20management%20dashboard&image_size=landscape_4_3'
        ]
      },
      seo: {
        metaTitle: 'Wedding RSVP Application - Modern Web Development',
        metaDescription: 'A beautiful and functional wedding RSVP web application featuring multi-language support and elegant UI design.',
        keywords: ['wedding', 'RSVP', 'React', 'web application']
      }
    },
    {
      id: '2',
      title: 'Enterprise CRM System',
      description: 'Comprehensive customer relationship management platform',
      content: 'Enterprise-level CRM system with advanced features...',
      type: 'project',
      status: 'published',
      tags: ['Laravel', 'PHP', 'MySQL', 'Vue.js'],
      metadata: {
        author: 'Josiah Peter James',
        createdAt: '2024-12-15T00:00:00Z',
        updatedAt: '2024-12-20T00:00:00Z',
        publishedAt: '2024-12-20T00:00:00Z',
        views: 890,
        likes: 32,
        featured: true
      },
      media: {
        thumbnail: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=enterprise%20CRM%20dashboard%20modern%20interface%20business&image_size=landscape_16_9'
      }
    },
    {
      id: '3',
      title: 'Advanced React Patterns',
      description: 'Deep dive into modern React development patterns',
      content: 'Exploring advanced React patterns and best practices...',
      type: 'blog',
      status: 'draft',
      tags: ['React', 'JavaScript', 'Patterns', 'Best Practices'],
      metadata: {
        author: 'Josiah Peter James',
        createdAt: '2025-01-10T00:00:00Z',
        updatedAt: '2025-01-12T00:00:00Z',
        views: 0,
        likes: 0,
        featured: false
      }
    },
    {
      id: '4',
      title: 'Full-Stack Development',
      description: 'Expertise in modern web development technologies',
      content: 'Comprehensive full-stack development skills...',
      type: 'skill',
      status: 'published',
      tags: ['React', 'Node.js', 'TypeScript', 'Database'],
      metadata: {
        author: 'Josiah Peter James',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2025-01-01T00:00:00Z',
        publishedAt: '2024-01-01T00:00:00Z',
        views: 2100,
        likes: 78,
        featured: true
      }
    }
  ];

  async getContent(filters?: ContentFilters): Promise<ContentItem[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    let filtered = [...this.mockData];
    
    if (filters) {
      if (filters.type) {
        filtered = filtered.filter(item => item.type === filters.type);
      }
      if (filters.status) {
        filtered = filtered.filter(item => item.status === filters.status);
      }
      if (filters.search) {
        const search = filters.search.toLowerCase();
        filtered = filtered.filter(item => 
          item.title.toLowerCase().includes(search) ||
          item.description.toLowerCase().includes(search) ||
          item.tags.some(tag => tag.toLowerCase().includes(search))
        );
      }
      if (filters.tags && filters.tags.length > 0) {
        filtered = filtered.filter(item => 
          filters.tags!.some(tag => item.tags.includes(tag))
        );
      }
      if (filters.featured !== undefined) {
        filtered = filtered.filter(item => item.metadata.featured === filters.featured);
      }
    }
    
    return filtered;
  }

  async getContentById(id: string): Promise<ContentItem | null> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return this.mockData.find(item => item.id === id) || null;
  }

  async createContent(content: Omit<ContentItem, 'id' | 'metadata'>): Promise<ContentItem> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newItem: ContentItem = {
      ...content,
      id: Date.now().toString(),
      metadata: {
        author: 'Josiah Peter James',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        views: 0,
        likes: 0,
        featured: false
      }
    };
    
    this.mockData.push(newItem);
    return newItem;
  }

  async updateContent(id: string, updates: Partial<ContentItem>): Promise<ContentItem | null> {
    await new Promise(resolve => setTimeout(resolve, 400));
    
    const index = this.mockData.findIndex(item => item.id === id);
    if (index === -1) return null;
    
    this.mockData[index] = {
      ...this.mockData[index],
      ...updates,
      metadata: {
        ...this.mockData[index].metadata,
        ...updates.metadata,
        updatedAt: new Date().toISOString()
      }
    };
    
    return this.mockData[index];
  }

  async deleteContent(id: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const index = this.mockData.findIndex(item => item.id === id);
    if (index === -1) return false;
    
    this.mockData.splice(index, 1);
    return true;
  }

  async getStats(): Promise<ContentStats> {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const stats: ContentStats = {
      total: this.mockData.length,
      published: this.mockData.filter(item => item.status === 'published').length,
      draft: this.mockData.filter(item => item.status === 'draft').length,
      archived: this.mockData.filter(item => item.status === 'archived').length,
      totalViews: this.mockData.reduce((sum, item) => sum + item.metadata.views, 0),
      totalLikes: this.mockData.reduce((sum, item) => sum + item.metadata.likes, 0)
    };
    
    return stats;
  }
}

const contentAPI = new ContentAPI();

export const useContentManager = () => {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<ContentStats | null>(null);

  const fetchContent = useCallback(async (filters?: ContentFilters) => {
    try {
      setLoading(true);
      setError(null);
      const data = await contentAPI.getContent(filters);
      setContent(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch content');
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchStats = useCallback(async () => {
    try {
      const data = await contentAPI.getStats();
      setStats(data);
    } catch (err) {
      console.error('Failed to fetch stats:', err);
    }
  }, []);

  const createContent = useCallback(async (newContent: Omit<ContentItem, 'id' | 'metadata'>) => {
    try {
      setLoading(true);
      setError(null);
      const created = await contentAPI.createContent(newContent);
      setContent(prev => [created, ...prev]);
      await fetchStats();
      return created;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create content');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [fetchStats]);

  const updateContent = useCallback(async (id: string, updates: Partial<ContentItem>) => {
    try {
      setLoading(true);
      setError(null);
      const updated = await contentAPI.updateContent(id, updates);
      if (updated) {
        setContent(prev => prev.map(item => item.id === id ? updated : item));
        await fetchStats();
      }
      return updated;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update content');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [fetchStats]);

  const deleteContent = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      const success = await contentAPI.deleteContent(id);
      if (success) {
        setContent(prev => prev.filter(item => item.id !== id));
        await fetchStats();
      }
      return success;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete content');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [fetchStats]);

  const getContentById = useCallback(async (id: string) => {
    try {
      return await contentAPI.getContentById(id);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch content');
      return null;
    }
  }, []);

  useEffect(() => {
    fetchContent();
    fetchStats();
  }, [fetchContent, fetchStats]);

  return {
    content,
    loading,
    error,
    stats,
    fetchContent,
    createContent,
    updateContent,
    deleteContent,
    getContentById,
    refreshStats: fetchStats
  };
};