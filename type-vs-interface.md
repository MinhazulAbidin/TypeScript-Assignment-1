Type Alias এবং interface ব্যবহার করা হয় কোনো একটা টাইপ বানানোর জন্য। দুইটাই দিয়েই টাইপ বানানো যায় কিন্তু এদের মধ্যে কিছু পার্থক্য আছে।

Type Alias:-
এইটা ব্যবহার করা হয় কোনো কিছুর টাইপ বানানোর জন্য।এই ক্ষেত্রে শুরুতে টাইপ লিখে প্রোপার্টির নাম লিখতে হয়। যেমন-
type User = {
  name: string;
  age: number;
  email: string;
};
১। সেইম নামে একাধিক টাইপ বানালে ইরোর দিবে। 
২। type দিয়ে Union Type তৈরি করা যায়।
৩। type দিয়ে Primitive Type-এর Alias তৈরি করা যায়।

টাইপ এলিয়াস কখন ব্যবহার করা উচিত?
১। Union Type তৈরি করবে।
২। Intersection Type তৈরি করবে।
৩। Primitive Type-এর Alias তৈরি করবে।
৪। Tuple তৈরি করবে।
৫। Complex Type তৈরি করবে। 


Interface:- 
interface ও অব্জেক্ট স্ট্রাকচার বানানোর ক্ষেত্রেও ব্যবহার করা হয়। যেমন-
interface User {
  name: string;
  age: number;
  email: string;
}
১। সেইম নামে একাধিক Interface তৈরি করলে TypeScript সেগুলোকে একসঙ্গে Merge করে দেয়।
২। Interface দিয়ে Union Type তৈরি করা যায় না কিন্তু দুটো দিয়েই অন্য Structure Extend করা যায়।
৩। Interface দিয়ে সরাসরি Primitive Type Alias তৈরি করা যায় না।

Interface কখন ব্যবহার করা উচিত?
১। Object-এর Structure তৈরি করবে।
২। Class-এর Structure নির্ধারণ করবে।
৩। একাধিক Interface Extend করতে হবে।
৪। Declaration Merging প্রয়োজন হবে।