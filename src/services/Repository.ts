import { IProject, IService, ITestimonial, IFounder, NavItem } from '../types';
import { portfolioData } from '../data/portfolioData';
import { servicesData } from '../data/servicesData';
import { testimonialsData } from '../data/testimonialsData';
import { foundersData } from '../data/foundersData';
import { navigationData } from '../data/navigationData';

/**
 * Generic Base Repository
 * Menyediakan fungsi dasar untuk semua jenis data
 */
abstract class BaseRepository<T> {
  protected data: T[];

  constructor(data: T[]) {
    this.data = data || []; // Proteksi jika data import kosong
  }

  public getAll(): T[] {
    return this.data;
  }

  public getCount(): number {
    return this.data.length;
  }
}

/**
 * Portfolio Repository
 */
class PortfolioRepository extends BaseRepository<IProject> {
  public getFeatured(): IProject[] {
    return this.data.filter(project => project.featured);
  }

  public getByCategory(category: string): IProject[] {
    if (!category || category === 'All') return this.data;
    // Pencarian Case-Insensitive agar tidak typo besar/kecil
    return this.data.filter(project => 
      project.category.toLowerCase().includes(category.toLowerCase())
    );
  }

  public getUniqueCategories(): string[] {
    const rawCategories = this.data.map(p => p.category);
    const unique = Array.from(new Set(rawCategories));
    return ['All', ...unique];
  }
}

/**
 * Service Repository
 * Kunci utama untuk navigasi detail layanan
 */
class ServiceRepository extends BaseRepository<IService> {
  // ✅ Mencari berdasarkan slug untuk URL (misal: /services/seo)
  public getBySlug(slug: string | undefined): IService | undefined {
    if (!slug) return undefined;
    return this.data.find(service => service.slug.toLowerCase() === slug.toLowerCase());
  }

  // ✅ Mencari berdasarkan ID (pastikan tipe data di types.ts adalah number)
  public getById(id: number): IService | undefined {
    return this.data.find(service => service.id === id);
  }
}

/**
 * Testimonial Repository
 */
class TestimonialRepository extends BaseRepository<ITestimonial> {
  public getLatest(n: number): ITestimonial[] {
    return this.data.slice(0, n);
  }
}

/**
 * Founder & Navigation Repositories
 */
class FounderRepository extends BaseRepository<IFounder> {}
class NavigationRepository extends BaseRepository<NavItem> {}

// --- Singleton Export ---
// Memastikan seluruh aplikasi menggunakan instance data yang sama
export const PortfolioService = new PortfolioRepository(portfolioData);
export const ServiceService = new ServiceRepository(servicesData);
export const TestimonialService = new TestimonialRepository(testimonialsData);
export const FounderService = new FounderRepository(foundersData);
export const NavigationService = new NavigationRepository(navigationData);