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
      posts: [
        {
          id: 1,
          title: "Experience that drives profitability: the impact of gastronomy...",
          date: "2026-02-27",
          dateDisplay: "27/02/2026",
          author: "SIAN",
          category: "Hospitality & Unique Experiences",
          excerpt: "In sustainable luxury projects, architecture is the asset's strategic infrastructure...",
          image: "https://cdn.prod.website-files.com/66195148790c4d26550e285f/69a5b3d7452cd28a14dda71e_2026_%234%20FEB.webp",
          url: "https://www.sianexperience.com/blogs/february26/experience-that-drives-profitability-the-impact-of-gastronomy-and-wellness-in-sustainable-luxury-destinations"
        },
        {
          id: 2,
          title: "Net-zero spaces: what the standard really implies...",
          date: "2026-01-27",
          dateDisplay: "27/02/2026",
          author: "SIAN",
          category: "Hospitality & Unique Experiences",
          excerpt: "In sustainable luxury projects, architecture is the asset's strategic infrastructure...",
          image: "https://cdn.prod.website-files.com/66195148790c4d26550e285f/69a5b3d7452cd28a14dda71e_2026_%234%20FEB.webp",
          url: "https://www.sianexperience.com/blogs/february26/experience-that-drives-profitability-the-impact-of-gastronomy-and-wellness-in-sustainable-luxury-destinations"
        }
      ]
    }
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(post => {
        const d = new Date(post.date);
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
      // Desmarcar radio buttons visualmente
      document.querySelectorAll('input[type="radio"]').forEach(el => el.checked = false);
    }
  }
}).mount('#app');