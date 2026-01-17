import { IProject, IService, ITestimonial, IFounder, NavItem } from '../types';
import { portfolioData } from '../data/portfolioData';
import { servicesData } from '../data/servicesData';
import { testimonialsData } from '../data/testimonialsData';
import { foundersData } from '../data/foundersData';
import { navigationData } from '../data/navigationData';

/**
 * Generic Base Repository
 * Implements basic Read operations for any data type T
 */
abstract class BaseRepository<T> {
  protected data: T[];

  constructor(data: T[]) {
    this.data = data;
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
 * Handles logic specific to Projects (Filtering Featured, etc)
 */
class PortfolioRepository extends BaseRepository<IProject> {
  public getFeatured(): IProject[] {
    return this.data.filter(project => project.featured);
  }

  public getByCategory(category: string): IProject[] {
    if (category === 'All') return this.data;
    // Flexible matching: if project has "Ads & SEO", searching "Ads" will find it
    return this.data.filter(project => project.category.includes(category) || category.includes(project.category));
  }

  // OOP: Extract unique categories dynamically from the dataset
  public getUniqueCategories(): string[] {
    const rawCategories = this.data.map(p => p.category);
    // Use Set to remove duplicates, then convert back to array
    const unique = Array.from(new Set(rawCategories));
    return ['All', ...unique];
  }
}

/**
 * Service Repository
 * Handles logic for Services
 */
class ServiceRepository extends BaseRepository<IService> {
  public getById(id: string): IService | undefined {
    return this.data.find(service => service.id === id);
  }
}

/**
 * Testimonial Repository
 */
class TestimonialRepository extends BaseRepository<ITestimonial> {
  // Add methods like getRandom() or getTop(n) here if needed
  public getLatest(n: number): ITestimonial[] {
    return this.data.slice(0, n);
  }
}

/**
 * Founder Repository
 */
class FounderRepository extends BaseRepository<IFounder> {}

/**
 * Navigation Repository
 */
class NavigationRepository extends BaseRepository<NavItem> {
    // Methods specific to nav if needed, e.g., getFooterLinks()
}

// --- Singleton Export ---
// We export instances so the whole app uses the same service layer
export const PortfolioService = new PortfolioRepository(portfolioData);
export const ServiceService = new ServiceRepository(servicesData);
export const TestimonialService = new TestimonialRepository(testimonialsData);
export const FounderService = new FounderRepository(foundersData);
export const NavigationService = new NavigationRepository(navigationData);
