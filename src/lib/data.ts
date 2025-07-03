export async function getProductById(id: string) {
    const res = await fetch(`http://localhost:3000/api/products/${id}`);
    
    if (!res.ok) {
      return null;
    }
    
    return res.json();
  }