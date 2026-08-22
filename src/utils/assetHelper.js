/**
 * Resolves static asset paths dynamically using Vite's configured BASE_URL.
 * Supports absolute paths ('/logo.webp'), relative paths ('logo.webp'),
 * and preserves external URLs ('https://...').
 * 
 * @param {string} path - The relative or absolute path of the asset
 * @returns {string} - The fully resolved asset URL compatible with GitHub Pages subpaths
 */
export const getAssetUrl = (path) => {
  if (!path) return '';
  
  // Return early if path is already external or a data URL
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  
  // Strip leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // import.meta.env.BASE_URL is provided by Vite (e.g. './' or '/repo-name/')
  const base = import.meta.env.BASE_URL || './';
  
  // Ensure base ends with '/'
  const formattedBase = base.endsWith('/') ? base : `${base}/`;
  
  return `${formattedBase}${cleanPath}`;
};

export default getAssetUrl;
