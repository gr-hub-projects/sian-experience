const { createApp } = Vue;

createApp({
  data() {
    return {
      activeCat: 'See all',
      selectedYear: null,
      selectedMonth: null,
      categories: [
        'Architecture & Sustainable Construction', 
        'Investment & Real Estate', 
        'Hospitality & Unique Experiences', 
        'Innovation', 
        'See all'
      ],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      // Aquí gestionas tus contenidos fácilmente
      posts: [
        {
          id: 1,
          title: "Experience that drives profitability: the impact of gastronomy...",
          date: "2026-02-27",
          dateDisplay: "27/02/2026",
          author: "SIAN",
          category: "Hospitality & Unique Experiences",
          excerpt: "In sustainable luxury projects, architecture is the asset's strategic infrastructure...",
          image: "https://www.sianexperience.com/blogs/february26/experience-that-drives-profitability-the-impact-of-gastronomy-and-wellness-in-sustainable-luxury-destinations",
          url: "#"
        },
        {
          id: 2,
          title: "Net-zero spaces: what the standard really implies...",
          date: "2026-02-20",
          dateDisplay: "20/02/2026",
          author: "SIAN",
          category: "Architecture & Sustainable Construction",
          excerpt: "A net-zero space is a building designed so that the total amount of carbon emissions...",
          image: "https://www.sianexperience.com/blogs/february26/experience-that-drives-profitability-the-impact-of-gastronomy-and-wellness-in-sustainable-luxury-destinations",
          url: "#"
        },
        {
          id: 3,
          title: "Inversión en Real Estate 2025",
          date: "2025-05-10",
          dateDisplay: "10/05/2025",
          author: "SIAN",
          category: "Investment & Real Estate",
          excerpt: "Análisis profundo sobre las tendencias de inversión para el próximo año.",
          image: "https://www.sianexperience.com/blogs/february26/experience-that-drives-profitability-the-impact-of-gastronomy-and-wellness-in-sustainable-luxury-destinations",
          url: "#"
        }
      ]
    }
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(post => {
        const d = new Date(post.date + "T00:00:00");
        const matchCat = this.activeCat === 'See all' || post.category === this.activeCat;
        const matchYear = this.selectedYear ? d.getFullYear() === this.selectedYear : true;
        const matchMonth = this.selectedMonth !== null ? d.getMonth() === this.selectedMonth : true;
        return matchCat && matchYear && matchMonth;
      });
    }
  },
  methods: {
    setFilter(year, monthIndex) {
      this.selectedYear = year;
      this.selectedMonth = monthIndex;
    },
    resetFilters() {
      this.selectedYear = null;
      this.selectedMonth = null;
      this.activeCat = 'See all';
      document.querySelectorAll('input[type="radio"]').forEach(el => el.checked = false);
    }
  }
}).mount('#app');