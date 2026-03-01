import { PortfolioData } from '../../shared/models/portfolio.model';

export const PORTFOLIO_FALLBACK_DATA: PortfolioData = {
  hero: {
    name: 'Hazem Gawwad',
    title: 'Frontend Developer',
    subtitle:
      'I craft beautiful, responsive, and user-friendly web applications. With expertise in modern frontend technologies, I turn ideas into elegant digital experiences that make a difference.',
    intro: '👋 Welcome to my portfolio',
    cvUrl: '',
    image:
      'https://images.unsplash.com/photo-1540397106260-e24a507a08ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzE0MDE2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  about: {
    heading: 'About Me',
    subheading: 'Passionate about creating seamless user experiences',
    paragraphs: [
      "I'm a dedicated Frontend Developer with a passion for building modern, responsive web applications. My journey in web development started with a curiosity about how websites work, and it has evolved into a professional career creating impactful digital solutions.",
      'I specialize in Angular framework and have strong expertise in JavaScript, HTML5, and CSS3. I believe in writing clean, maintainable code and staying updated with the latest industry trends and best practices.',
      "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community."
    ],
    stats: [
      { value: '5+', label: 'Years Experience' },
      { value: '50+', label: 'Projects Completed' },
      { value: '30+', label: 'Happy Clients' },
      { value: '100%', label: 'Satisfaction Rate' }
    ]
  },
  skills: {
    heading: 'My Skills',
    subtitle: 'Technologies I work with to bring ideas to life',
    items: [
      { name: 'HTML', level: 95, colorClass: 'cyan-fill' },
      { name: 'CSS', level: 90, colorClass: 'blue-fill' },
      { name: 'JavaScript', level: 92, colorClass: 'purple-fill' },
      { name: 'Angular', level: 88, colorClass: 'pink-fill' }
    ]
  },
  projects: {
    heading: 'Featured Projects',
    subtitle: 'A showcase of my recent work and accomplishments',
    items: [
      {
        title: 'E-Commerce Platform',
        description:
          'A full-featured online shopping platform with cart management, product filtering, and secure checkout process.',
        tech: ['Angular', 'TypeScript', 'TailwindCSS'],
        demoUrl: 'https://example.com/ecommerce-demo',
        image:
          'https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc3MTQyNDc0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      },
      {
        title: 'Mobile Banking App',
        description:
          'Modern banking interface with transaction history, money transfers, and real-time balance updates.',
        tech: ['JavaScript', 'HTML5', 'CSS3'],
        demoUrl: 'https://example.com/mobile-banking-demo',
        image:
          'https://images.unsplash.com/photo-1713857297379-6fc26e70f581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcxMzkzOTk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      },
      {
        title: 'Analytics Dashboard',
        description:
          'Business intelligence dashboard with interactive charts, data visualization, and comprehensive reporting tools.',
        tech: ['Angular', 'D3.js', 'RxJS'],
        demoUrl: 'https://example.com/analytics-dashboard-demo',
        image:
          'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcxMzkwODIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      }
    ]
  },
  contact: {
    heading: 'Get In Touch',
    subtitle: "Have a project in mind? Let's work together to bring your ideas to life",
    info: {
      email: 'hazem.gawwad@example.com',
      phone: '+20 123 456 7890',
      location: 'Cairo, Egypt'
    }
  }
};
