// Image loader personalizado para GitHub Pages
export default function imageLoader({ src, width, quality }) {
  // Se for uma URL completa, retorne como está
  if (src.startsWith('http')) {
    return src;
  }
  
  // Para imagens locais, adicione o basePath se necessário
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${src}`;
}