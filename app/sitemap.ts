export default function sitemap() {
  const today = new Date().toISOString();
  return [
    {
      url: "https://www.karmils.com",
      lastModified: today,
      changeFrequency: "weekly",
      priority: 1.0
    },
    {
      url: "https://www.karmils.com/theory",
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: "https://www.karmils.com/analyzer",
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: "https://www.karmils.com/updates",
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.8
    }
  ];
}
