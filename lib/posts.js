export const postsData = [
  {
    id: 1,
    slug: "lady-gaga-fenty-bowl",
    title: "Lady Gaga: Fenty Bowl Halftime Show",
    excerpt: "Performance exclusiva da Lady Gaga no Apple Music Fenty Bowl com produção cinematográfica premium.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX9P2j2MjIjIzkO-yNB3HtENFWk2dp2DE_ripgV5okgFZcc5Al5czn3H61sGZfouOj6Lv0nV7nxMCbIRjz-Ye93NsOBsRrCgmOy10rQj7JjsIY64aLwAGw4skd-kTR9hlHYJzJzmofcav_ww9nlRWHwOjWhm51nWOPV4X4Jd6Vd_xQCO8H5GGVBxKrjp_P/s2100/poster.png",
    date: "15 Out 2023",
    category: "shows",
    content: {
      badge: "EXCLUSIVO FENTY",
      duration: "2h 14min",
      quality: "4K Dolby Vision",
      description: `
        O espetáculo histórico de Lady Gaga no intervalo do Super Bowl Fenty Bowl. Uma produção cinematográfica que captura cada momento da performance icônica, com qualidade 4K Dolby Vision e áudio espacial.
        
        Este show marcou um novo padrão para performances ao vivo, combinando tecnologia de ponta da Apple com a energia inigualável de Lady Gaga. Inclui bastidores exclusivos e entrevistas com a equipe de produção.
      `,
      placeholderImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5d3BC3DtpRKEzZhEjtKwuX9AXpatJZucNxS5MX3KouxLnwVRM2T5amu8NUeZ0zrUGM4-T4S_055GjBmnaSUCAPn2FcY-SnSvYbrfrBNeRRtEAwcPJcTWuVwvrOMpJqKD1qYv3NlgmcbcopOUYGDL31mV0jKtHMC98NLDeL0Em6lLxVC2U2BO24zbWvIxB/s1200/large.gagaimages_005.jpg.f8c9e5b0acce8fe8b63288497191abfa.jpg",
      videoUrl: "https://www.youtube.com/watch?v=demo_lady_gaga", // URL exemplo
      relatedPosts: [2, 3, 4, 5]
    }
  },
  {
    id: 2,
    slug: "nba-all-star-louise",
    title: "NBA All-Star Halftime Show Louise",
    excerpt: "Louise apresenta show histórico no intervalo do NBA All-Star Game com produção em 4K Dolby Vision.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX_x5vkq65cDMXsp5-Mwdf9CvReUI9cKiJOEcuZplLmQktIVP2a-of9cUxrjz6H-mmlZjGx9Il9OhZRG4UtmdgnhpVv-opRoT9rXWTQcKOtdD45njyKSZAFHJjzFKixuFylSOIz12UbU-B6xdmQjcNzKrJmERnm9hsdiZSpmzsmUxt4fIdyRtBx38LYyJw/s2100/alltst.png",
    date: "20 Nov 2023",
    category: "shows",
    content: {
      badge: "EXCLUSIVO APPLE TV+",
      duration: "1h 45min",
      quality: "4K HDR",
      description: `
        Performance exclusiva de Louise no intervalo do NBA All-Star Game. Uma produção em 4K HDR que traz todos os detalhes do espetáculo.
        
        Com coreografia inovadora e visuais deslumbrantes, este show redefine o que é possível em uma performance ao vivo. Inclui entrevistas com a artista e a equipe de produção.
      `,
      placeholderImage: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80",
      videoUrl: "https://www.youtube.com/watch?v=demo_nba_louise",
      relatedPosts: [1, 3, 6]
    }
  },
  {
    id: 3,
    slug: "taylor-swift-apple-music-live",
    title: "Apple Music Live: Taylor Swift",
    excerpt: "Show íntimo exclusivo do Apple Music com Taylor Swift. Gravação ao vivo no Dolby Theatre.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9Q1J0fNN4g0_UbqgG7S-OldHmABwQ3VwIqrcL2bWvnC8uQvbM7r4Q7YuhAhzA9KZPJ9mm5CRK_-r9DshoafDUY7L_rJYhP7t6Qs6ZfU7SQyf-rDSrVllS3iC5f6z5B3Zhm2kRl3aLhXqg8QdpxAl2SDYX_HB1hUyE27Ys/s2100/taylor-swift-apple-music.jpg",
    date: "10 Set 2023",
    category: "shows",
    content: {
      badge: "EXCLUSIVO APPLE MUSIC",
      duration: "2h 30min",
      quality: "4K Dolby Atmos",
      description: `
        Taylor Swift como nunca vista antes. Um show íntimo gravado no histórico Dolby Theatre, exclusivo para o Apple Music.
        
        A performance inclui sucessos de todas as eras da carreira da artista, com arranjos especiais e momentos emocionantes.
      `,
      placeholderImage: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80",
      videoUrl: "https://www.youtube.com/watch?v=demo_taylor_swift",
      relatedPosts: [1, 2, 4]
    }
  }
  // Adicione mais posts conforme necessário
];

// Função para obter post por ID
export function getPostById(id) {
  return postsData.find(post => post.id === parseInt(id));
}

// Função para obter post por slug
export function getPostBySlug(slug) {
  return postsData.find(post => post.slug === slug);
}

// Função para obter todos os posts
export function getAllPosts() {
  return postsData;
}

// Função para obter posts relacionados
export function getRelatedPosts(ids) {
  return postsData.filter(post => ids.includes(post.id));
}
}