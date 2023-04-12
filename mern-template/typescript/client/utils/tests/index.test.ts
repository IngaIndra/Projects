
import { composeArticleSlug, cutTextToLength, extractArticleIdFromSlug, getLargestNumber, slugify } from "../index";

const str = "The quick brown fox jumps over the lazy dog.";

describe("cutTextToLength", () => {
  it("should cut text to length", () => {
    expect(cutTextToLength(str, 20)).toBe("The quick brown fox ...");
  });

  it("should not cut text to length", () => {
    expect(cutTextToLength(str, 100)).toBe(str);
  });
});


const str2= "Hello world";
describe('slugify', () => { 
    it("should slugify text", () => {
        expect(slugify(str2)).toBe("hello-world");
    });
});


const str3= "hello world"; 
const id= 123;
describe('composeArticleSlug', ()=> {
    it ("should compose slug url", ()=> {
        expect (composeArticleSlug(id, str3)).toBe("hello-world-123")
    })
});

const slug= composeArticleSlug(id, str3);
describe("extractArticleIdFromSlug", ()=> {
    it("should pop id from slug url", ()=> {
expect (extractArticleIdFromSlug(slug)).toBe("123")
    })
});


const numbers= [1,2,3,4,5];
describe("getLargestNumber",()=> {
    it("should find the biggest number", ()=> {
expect (getLargestNumber(numbers)).toBe(5)
    })
} )