export function cutTextToLength (str: string, maxLength: number): string {
    return str.length > maxLength ? str.substring(0, maxLength)+ "..." : str;
}

export function slugify (str: string): string {
    return str
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}
//test exercise 1
export function composeArticleSlug(id: number, title: string){
    return `${slugify(title)}-${id}`;
  }

//test exercise 2
export function extractArticleIdFromSlug(slug: string) {
    return slug.split("-").pop();
  }

//test exercise 3 
export function getLargestNumber (numbers: number[]) {
    return Math.max(...numbers);
}

